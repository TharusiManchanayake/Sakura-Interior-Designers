import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { API_URL } from "../config";

const money = (n) => `$${n.toFixed(2)}`;

const POLL_EVERY_MS = 3000;
const MAX_POLLS = 20; // about a minute

export default function OrderStatus() {
  const { orderId } = useParams();
  const { clearCart } = useCart();

  const [order, setOrder] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [gaveUp, setGaveUp] = useState(false);
  const cartCleared = useRef(false);

  // Load the order. While payment is still "pending", keep checking,
  // because PayHere confirms the payment to our server a moment after redirecting the customer back.
  useEffect(() => {
    let cancelled = false;
    let timer;
    let polls = 0;

    async function load() {
      try {
        const res = await fetch(`${API_URL}/api/orders/${encodeURIComponent(orderId)}`);
        if (res.status === 404) {
          if (!cancelled) setLoadError("We couldn't find that order.");
          return;
        }
        if (!res.ok) throw new Error("bad response");
        const data = await res.json();
        if (cancelled) return;

        setOrder(data);
        setLoadError("");

        if (data.status === "pending") {
          polls += 1;
          if (polls >= MAX_POLLS) setGaveUp(true);
          else timer = setTimeout(load, POLL_EVERY_MS);
        }
      } catch {
        if (!cancelled) setLoadError("We couldn't load your order. Please refresh the page.");
      }
    }

    load();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [orderId]);

  // Empty the cart once the order is confirmed (paid, or placed as cash on delivery)
  useEffect(() => {
    if (order && (order.status === "paid" || order.status === "cod") && !cartCleared.current) {
      cartCleared.current = true;
      clearCart();
    }
  }, [order, clearCart]);

  if (loadError) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">{loadError}</h1>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-charcoal text-cream hover:bg-blushDark transition-colors uppercase text-sm tracking-wide px-6 py-3"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-stone-600">Loading your order...</p>
      </div>
    );
  }

  const headline = {
    paid: "Thank you, your payment was received.",
    cod: "Thank you, your order is placed.",
    pending: gaveUp ? "We haven't received your payment confirmation yet." : "Confirming your payment...",
    failed: "Your payment didn't go through.",
    cancelled: "Your payment was cancelled.",
    chargedback: "This payment was reversed.",
  }[order.status];

  const detail = {
    paid: `Order ${order.id}. We'll send updates to ${order.email}.`,
    cod: `Order ${order.id}. Please have the amount ready when your order arrives.`,
    pending: gaveUp
      ? `Order ${order.id}. Refresh this page in a minute. If you were charged and this doesn't change, contact us with your order number.`
      : `Order ${order.id}. This usually takes a few seconds. Please don't close this page.`,
    failed: `Order ${order.id} was not charged. You can go back and try again.`,
    cancelled: `Order ${order.id} was not charged. Your cart is still saved.`,
    chargedback: `Order ${order.id}. Please contact us if you have questions.`,
  }[order.status];

  const canRetry = order.status === "failed" || order.status === "cancelled";

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">{headline}</h1>
      <p className="text-stone-600 mt-3">{detail}</p>

      <div className="mt-10 border border-stone p-6">
        <h2 className="font-semibold mb-4">Items</h2>
        <ul className="divide-y divide-stone">
          {order.items.map((i) => (
            <li key={i.id} className="flex items-center justify-between gap-4 py-3 text-sm">
              <div>
                <p className="font-medium">{i.name}</p>
                <p className="text-stone-600">Qty {i.quantity}</p>
              </div>
              <p className="font-medium">{money(i.price * i.quantity)}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-4 pt-4 border-t border-stone text-sm space-y-1.5">
          <div className="flex justify-between">
            <dt className="text-stone-600">Subtotal</dt>
            <dd>{money(order.subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-stone-600">Shipping</dt>
            <dd>{order.shippingCost === 0 ? "Free" : money(order.shippingCost)}</dd>
          </div>
          <div className="flex justify-between text-base font-bold pt-1.5">
            <dt>Total</dt>
            <dd>{money(order.total)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-1">Shipping to</h3>
          <p className="text-stone-600">
            {order.shippingAddress.fullName}
            <br />
            {order.shippingAddress.address}
            <br />
            {order.shippingAddress.city} {order.shippingAddress.postalCode}
            <br />
            {order.shippingAddress.country}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Payment</h3>
          <p className="text-stone-600">
            {order.paymentMethod === "cod" ? "Cash on delivery" : "Online payment (PayHere)"}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {canRetry && (
          <Link
            to="/checkout"
            className="inline-block bg-charcoal text-cream hover:bg-blushDark transition-colors uppercase text-sm tracking-wide px-6 py-3"
          >
            Try again
          </Link>
        )}
        <Link
          to="/shop"
          className={
            canRetry
              ? "inline-block border border-charcoal uppercase text-sm tracking-wide px-6 py-3"
              : "inline-block bg-charcoal text-cream hover:bg-blushDark transition-colors uppercase text-sm tracking-wide px-6 py-3"
          }
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}