import "dotenv/config";
import express from "express";
import cors from "cors";
import crypto from "node:crypto";
import { getProduct } from "./catalog.js";
import { createOrder, getOrder, updateOrder } from "./store.js";
import reviewsRouter from "./reviews.js";

const {
  PORT = 5000,
  CLIENT_URL = "http://localhost:5173",
  // Public address PayHere can reach (use your ngrok / hosting URL, not localhost)
  PUBLIC_API_URL = `http://localhost:${PORT}`,
  PAYHERE_MERCHANT_ID,
  PAYHERE_MERCHANT_SECRET,
  PAYHERE_MODE = "sandbox", // "sandbox" for testing, "live" for real money
  CURRENCY = "USD",
} = process.env;

// Keep these in sync with the numbers shown on the checkout page
const SHIPPING_FLAT = 15;
const FREE_SHIPPING_OVER = 500;

const PAYHERE_URL =
  PAYHERE_MODE === "live"
    ? "https://www.payhere.lk/pay/checkout"
    : "https://sandbox.payhere.lk/pay/checkout";

const payhereConfigured = Boolean(PAYHERE_MERCHANT_ID && PAYHERE_MERCHANT_SECRET);

const app = express();
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: false })); // PayHere notifications arrive as form data
app.use("/api/reviews", reviewsRouter);

/* ---------------- helpers ---------------- */

const md5Upper = (s) => crypto.createHash("md5").update(s).digest("hex").toUpperCase();

const safeEqual = (a, b) => {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  return A.length === B.length && crypto.timingSafeEqual(A, B);
};

const clean = (value, max = 200) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// hash = MD5( merchant_id + order_id + amount + currency + MD5(merchant_secret) ), upper-case
function checkoutHash(orderId, amount) {
  return md5Upper(
    `${PAYHERE_MERCHANT_ID}${orderId}${amount}${CURRENCY}${md5Upper(PAYHERE_MERCHANT_SECRET)}`
  );
}

function parseOrderInput(body) {
  const errors = {};

  const customer = {
    email: clean(body?.customer?.email, 120),
    phone: clean(body?.customer?.phone, 30),
  };
  const s = body?.shipping ?? {};
  const shippingAddress = {
    fullName: clean(s.fullName, 100),
    address: clean(s.address, 200),
    city: clean(s.city, 80),
    postalCode: clean(s.postalCode, 20),
    country: clean(s.country, 80),
  };
  const paymentMethod = body?.paymentMethod;

  if (!/^\S+@\S+\.\S+$/.test(customer.email)) errors.email = "Enter a valid email address.";
  if (customer.phone.replace(/\D/g, "").length < 7)
    errors.phone = "Enter a phone number we can reach you on.";
  if (!shippingAddress.fullName) errors.fullName = "Enter your full name.";
  if (!shippingAddress.address) errors.address = "Enter your street address.";
  if (!shippingAddress.city) errors.city = "Enter your city.";
  if (!shippingAddress.postalCode) errors.postalCode = "Enter your postal code.";
  if (!shippingAddress.country) errors.country = "Enter your country.";
  if (!["online", "cod"].includes(paymentMethod)) errors.paymentMethod = "Choose a payment method.";

  // Items: combine duplicates, look up each price on the server
  const quantities = new Map();
  const rawItems = Array.isArray(body?.items) ? body.items : [];
  if (rawItems.length === 0 || rawItems.length > 50) {
    errors.items = "Your cart is empty or too large.";
  } else {
    for (const raw of rawItems) {
      const qty = Number(raw?.quantity);
      if (typeof raw?.id !== "string" || !Number.isInteger(qty) || qty < 1 || qty > 20) {
        errors.items = "Some items in your cart are invalid. Please review your cart.";
        break;
      }
      quantities.set(raw.id, (quantities.get(raw.id) ?? 0) + qty);
    }
  }

  const items = [];
  if (!errors.items) {
    for (const [id, quantity] of quantities) {
      const product = getProduct(id);
      if (!product) {
        errors.items = "Some items in your cart are no longer available. Please review your cart.";
        break;
      }
      items.push({ ...product, quantity });
    }
  }

  return { errors, data: { customer, shippingAddress, paymentMethod, items } };
}

// What the browser is allowed to see about an order
const publicOrder = (o) => ({
  id: o.id,
  status: o.status,
  paymentMethod: o.paymentMethod,
  createdAt: o.createdAt,
  email: o.customer.email,
  shippingAddress: o.shippingAddress,
  items: o.items,
  subtotal: o.subtotal,
  shippingCost: o.shippingCost,
  total: o.total,
  currency: o.currency,
});

/* ---------------- routes ---------------- */

app.get("/api/health", (req, res) => {
  res.json({ ok: true, payhereConfigured, mode: PAYHERE_MODE });
});

// 1. Create an order (prices are calculated here, not trusted from the browser)
app.post("/api/orders", (req, res) => {
  const { errors, data } = parseOrderInput(req.body);
  const { items: itemsError, ...fieldErrors } = errors;

  if (itemsError || Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({
      error: itemsError ?? "Please check the highlighted fields.",
      fields: fieldErrors,
    });
  }

  if (data.paymentMethod === "online" && !payhereConfigured) {
    return res.status(503).json({
      error: "Online payment isn't available right now. Please choose cash on delivery.",
    });
  }

  const subtotal = data.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shippingCost = subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FLAT;
  const total = subtotal + shippingCost;
  const id = `SI-${crypto.randomBytes(6).toString("hex").toUpperCase()}`;

  const order = createOrder({
    id,
    createdAt: new Date().toISOString(),
    status: data.paymentMethod === "cod" ? "cod" : "pending",
    paymentMethod: data.paymentMethod,
    customer: data.customer,
    shippingAddress: data.shippingAddress,
    items: data.items,
    subtotal,
    shippingCost,
    total,
    currency: CURRENCY,
  });

  if (order.paymentMethod === "cod") {
    return res.status(201).json({ orderId: id, paymentMethod: "cod" });
  }

  // Online payment: give the browser the signed form to send to PayHere
  const amount = total.toFixed(2);
  const [firstName, ...rest] = order.shippingAddress.fullName.split(/\s+/);
  const itemCount = order.items.reduce((n, i) => n + i.quantity, 0);

  res.status(201).json({
    orderId: id,
    paymentMethod: "online",
    payhere: {
      action: PAYHERE_URL,
      params: {
        merchant_id: PAYHERE_MERCHANT_ID,
        return_url: `${CLIENT_URL}/order/${id}`,
        cancel_url: `${CLIENT_URL}/cart`,
        notify_url: `${PUBLIC_API_URL}/api/payhere/notify`,
        order_id: id,
        items: `Sakura Interiors order (${itemCount} item${itemCount === 1 ? "" : "s"})`,
        currency: CURRENCY,
        amount,
        first_name: firstName,
        last_name: rest.join(" ") || firstName,
        email: order.customer.email,
        phone: order.customer.phone,
        address: order.shippingAddress.address,
        city: order.shippingAddress.city,
        country: order.shippingAddress.country,
        hash: checkoutHash(id, amount),
      },
    },
  });
});

// 2. PayHere calls this (server to server) to tell us the payment result
const STATUS_BY_CODE = {
  "2": "paid",
  "0": "pending",
  "-1": "cancelled",
  "-2": "failed",
  "-3": "chargedback",
};

app.post("/api/payhere/notify", (req, res) => {
  if (!payhereConfigured) return res.sendStatus(503);

  const {
    merchant_id,
    order_id,
    payhere_amount,
    payhere_currency,
    status_code,
    md5sig,
    payment_id,
    method,
  } = req.body;

  // Verify the message really came from PayHere (signed with your secret)
  const expected = md5Upper(
    `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${md5Upper(
      PAYHERE_MERCHANT_SECRET
    )}`
  );
  if (merchant_id !== PAYHERE_MERCHANT_ID || !md5sig || !safeEqual(expected, String(md5sig).toUpperCase())) {
    console.warn("Rejected PayHere notification: bad signature");
    return res.sendStatus(400);
  }

  const order = getOrder(order_id);
  if (!order) return res.sendStatus(404);

  const next = STATUS_BY_CODE[String(status_code)];
  if (!next) return res.sendStatus(200);

  // Only accept "paid" if the amount and currency match what we asked for
  if (
    next === "paid" &&
    (Number(payhere_amount).toFixed(2) !== order.total.toFixed(2) || payhere_currency !== order.currency)
  ) {
    console.warn(`Rejected PayHere notification for ${order_id}: amount or currency mismatch`);
    return res.sendStatus(400);
  }

  // A paid order never goes back to pending/failed/cancelled (only to chargedback)
  if (order.status === "paid" && next !== "chargedback") return res.sendStatus(200);

  updateOrder(order_id, {
    status: next,
    payment: { paymentId: payment_id, method, statusCode: String(status_code) },
  });
  res.sendStatus(200);
});

// 3. The confirmation page asks for the order status
app.get("/api/orders/:id", (req, res) => {
  const order = getOrder(req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found." });
  res.json(publicOrder(order));
});

// Bad JSON etc.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({ error: "Bad request." });
});

app.listen(PORT, () => {
  console.log(`Sakura server running on http://localhost:${PORT}`);
  console.log(`PayHere: ${payhereConfigured ? PAYHERE_MODE : "NOT CONFIGURED (online payment disabled)"}`);
});