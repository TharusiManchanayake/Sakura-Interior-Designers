import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { API_URL } from "../config";

/* Keep these in sync with SHIPPING_FLAT / FREE_SHIPPING_OVER in server/index.js.
   The server always calculates the real total; these only drive what's shown here. */
const SHIPPING_FLAT = 15;
const FREE_SHIPPING_OVER = 500;

const money = (n) => `$${n.toFixed(2)}`;

function validate(f) {
  const e = {};
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (f.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a phone number we can reach you on.";
  if (!f.fullName.trim()) e.fullName = "Enter your full name.";
  if (!f.address.trim()) e.address = "Enter your street address.";
  if (!f.city.trim()) e.city = "Enter your city.";
  if (!f.postalCode.trim()) e.postalCode = "Enter your postal code.";
  if (!f.country.trim()) e.country = "Enter your country.";
  return e;
}

// Sends the customer to PayHere's secure payment page
function redirectToPayHere({ action, params }) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = action;
  Object.entries(params).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}

function focusFirstError() {
  setTimeout(() => document.querySelector('[aria-invalid="true"]')?.focus(), 0);
}

/* Reusable field (defined outside so inputs keep focus while typing) */
function Field({ label, name, value, onChange, error, className = "", ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-charcoal ${
          error ? "border-red-600" : "border-stone"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Checkout() {
  const { cartItems: items, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    phone: "",
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    payment: "online",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [placing, setPlacing] = useState(false);

  // If the customer presses Back from the PayHere page, re-enable the button
  useEffect(() => {
    const reset = () => setPlacing(false);
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  const subtotal = cartTotal;
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;

  const update = (name) => (e) => {
    setForm((f) => ({ ...f, [name]: e.target.value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      focusFirstError();
      return;
    }

    setPlacing(true);
    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { email: form.email, phone: form.phone },
          shipping: {
            fullName: form.fullName,
            address: form.address,
            city: form.city,
            postalCode: form.postalCode,
            country: form.country,
          },
          paymentMethod: form.payment,
          // Only ids and quantities are sent. The server works out the prices.
          items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fields && Object.keys(data.fields).length > 0) {
          setErrors(data.fields);
          focusFirstError();
        }
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setPlacing(false);
        return;
      }

      if (data.paymentMethod === "cod") {
        clearCart();
        navigate(`/order/${data.orderId}`);
        return;
      }

      // Online payment: leave the cart as it is until payment is confirmed
      redirectToPayHere(data.payhere);
    } catch {
      setSubmitError("We couldn't reach the server. Check your connection and try again.");
      setPlacing(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-stone-600 mt-2">Add something to your cart before checking out.</p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-charcoal text-cream hover:bg-blushDark transition-colors uppercase text-sm tracking-wide px-6 py-3"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-10 grid lg:grid-cols-[1fr_380px] gap-12 items-start"
      >
        {/* Left: details */}
        <div className="space-y-10">
          <fieldset>
            <legend className="text-xl font-semibold mb-4">Contact</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                error={errors.email}
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                error={errors.phone}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-semibold mb-4">Shipping address</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full name"
                name="fullName"
                autoComplete="name"
                className="sm:col-span-2"
                value={form.fullName}
                onChange={update("fullName")}
                error={errors.fullName}
              />
              <Field
                label="Street address"
                name="address"
                autoComplete="street-address"
                className="sm:col-span-2"
                value={form.address}
                onChange={update("address")}
                error={errors.address}
              />
              <Field
                label="City"
                name="city"
                autoComplete="address-level2"
                value={form.city}
                onChange={update("city")}
                error={errors.city}
              />
              <Field
                label="Postal code"
                name="postalCode"
                autoComplete="postal-code"
                value={form.postalCode}
                onChange={update("postalCode")}
                error={errors.postalCode}
              />
              <Field
                label="Country"
                name="country"
                autoComplete="country-name"
                className="sm:col-span-2"
                value={form.country}
                onChange={update("country")}
                error={errors.country}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-semibold mb-4">Payment</legend>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                { value: "online", label: "Pay online" },
                { value: "cod", label: "Cash on delivery" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 border px-4 py-3 text-sm cursor-pointer ${
                    form.payment === opt.value ? "border-charcoal" : "border-stone"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={form.payment === opt.value}
                    onChange={update("payment")}
                    className="accent-charcoal"
                  />
                  {opt.label}
                </label>
              ))}
            </div>

            <p className="text-sm text-stone-600">
              {form.payment === "online"
                ? "You'll be taken to PayHere's secure page to pay by card or wallet. Your card details never touch our site."
                : "Pay in cash when your order arrives."}
            </p>
          </fieldset>
        </div>

        {/* Right: summary */}
        <aside className="border border-stone p-6 lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold mb-4">Order summary</h2>

          <ul className="divide-y divide-stone">
            {items.map((i) => (
              <li key={i.id} className="flex items-center gap-3 py-3">
                <img src={i.image} alt="" className="w-14 h-14 object-cover" />
                <div className="flex-1 text-sm">
                  <p className="font-medium">{i.name}</p>
                  <p className="text-stone-600">Qty {i.quantity}</p>
                </div>
                <p className="text-sm font-medium">{money(i.price * i.quantity)}</p>
              </li>
            ))}
          </ul>

          <dl className="mt-4 pt-4 border-t border-stone text-sm space-y-1.5">
            <div className="flex justify-between">
              <dt className="text-stone-600">Subtotal</dt>
              <dd>{money(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-600">Shipping</dt>
              <dd>{shipping === 0 ? "Free" : money(shipping)}</dd>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2">
              <dt>Total</dt>
              <dd>{money(total)}</dd>
            </div>
          </dl>

          {shipping > 0 && (
            <p className="mt-3 text-xs text-stone-600">
              Add {money(FREE_SHIPPING_OVER - subtotal)} more for free shipping.
            </p>
          )}

          {submitError && (
            <p role="alert" className="mt-4 text-sm text-red-700">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={placing}
            className="mt-6 w-full bg-charcoal text-cream hover:bg-blushDark transition-colors uppercase text-sm tracking-wide px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {placing
              ? form.payment === "online"
                ? "Opening PayHere..."
                : "Placing order..."
              : form.payment === "online"
              ? `Pay ${money(total)}`
              : `Place order · ${money(total)}`}
          </button>

          <Link to="/cart" className="block mt-4 text-center text-sm underline text-stone-600">
            Back to cart
          </Link>
        </aside>
      </form>
    </div>
  );
}