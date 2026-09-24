import { useEffect, useState } from "react";
import { API_URL } from "../config";

const money = (n) => `$${Number(n).toFixed(2)}`;
const dateTime = (iso) => new Date(iso).toLocaleString();

const FULFILLMENT_OPTIONS = ["unfulfilled", "processing", "shipped", "delivered"];

const PAYMENT_LABEL = {
  paid: "Paid",
  cod: "Cash on delivery",
  pending: "Awaiting payment",
  failed: "Payment failed",
  cancelled: "Cancelled",
  chargedback: "Charged back",
};

const PAYMENT_BADGE = {
  paid: "bg-green-100 text-green-800",
  cod: "bg-blue-100 text-blue-800",
  pending: "bg-yellow-100 text-yellow-800",
  failed: "bg-red-100 text-red-800",
  cancelled: "bg-stone-200 text-stone-700",
  chargedback: "bg-red-100 text-red-800",
};

/* ---------- A small fetch helper that attaches the admin token ---------- */
function useAdminApi(token, onExpired) {
  return async function call(path, options = {}) {
    const res = await fetch(`${API_URL}/api/admin${path}`, {
      ...options,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        Authorization: `Bearer ${token}`,
        ...options.headers,
      },
    });
    if (res.status === 401) {
      onExpired();
      throw new Error("Session expired. Please log in again.");
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Something went wrong.");
    return data;
  };
}

/* ---------- Login ---------- */
function LoginForm({ onLoggedIn }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }
      onLoggedIn(data.token);
    } catch {
      setError("Couldn't reach the server.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-24">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full border border-stone bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-charcoal"
        />
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors disabled:opacity-60"
        >
          {loading ? "Checking..." : "Log in"}
        </button>
      </form>
    </div>
  );
}

/* ---------- Reviews tab ---------- */
function ReviewsTab({ api }) {
  const [status, setStatus] = useState("pending");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await api(`/reviews?status=${status}`);
      setReviews(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  async function act(id, action) {
    setBusyId(id);
    try {
      if (action === "delete") {
        if (!confirm("Delete this review permanently?")) return;
        await api(`/reviews/${id}`, { method: "DELETE" });
      } else {
        await api(`/reviews/${id}/${action}`, { method: "POST" });
      }
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {["pending", "approved", "rejected", "all"].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`text-xs uppercase tracking-wide border px-4 py-2 rounded-full ${
              status === s ? "bg-charcoal text-cream border-charcoal" : "border-stone text-stone-600"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {loading && <p className="text-stone-600">Loading...</p>}
      {error && <p className="text-red-700">{error}</p>}
      {!loading && !error && reviews.length === 0 && (
        <p className="text-stone-600">No reviews here.</p>
      )}

      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="border border-stone p-5">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-blushDark">{r.category}</p>
                <h3 className="font-bold">"{r.headline}"</h3>
              </div>
              <p className="text-xs text-stone-500">{dateTime(r.createdAt)}</p>
            </div>
            <p className="text-stone-700 mb-3 whitespace-pre-line">{r.quote}</p>
            <p className="text-sm text-stone-600 mb-4">— {r.name}</p>

            <div className="flex flex-wrap gap-2">
              {r.status !== "approved" && (
                <button
                  onClick={() => act(r.id, "approve")}
                  disabled={busyId === r.id}
                  className="text-xs uppercase px-4 py-2 bg-charcoal text-cream disabled:opacity-60"
                >
                  Approve
                </button>
              )}
              {r.status !== "rejected" && (
                <button
                  onClick={() => act(r.id, "reject")}
                  disabled={busyId === r.id}
                  className="text-xs uppercase px-4 py-2 border border-charcoal disabled:opacity-60"
                >
                  Reject
                </button>
              )}
              <button
                onClick={() => act(r.id, "delete")}
                disabled={busyId === r.id}
                className="text-xs uppercase px-4 py-2 text-red-700 hover:underline disabled:opacity-60"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Orders tab ---------- */
function OrdersTab({ api }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [savingId, setSavingId] = useState(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setOrders(await api("/orders"));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateFulfillment(id, fulfillmentStatus) {
    setSavingId(id);
    try {
      const updated = await api(`/orders/${id}/fulfillment`, {
        method: "POST",
        body: JSON.stringify({ fulfillmentStatus }),
      });
      setOrders((prev) => prev.map((o) => (o.id === id ? updated : o)));
    } catch (err) {
      alert(err.message);
    } finally {
      setSavingId(null);
    }
  }

  if (loading) return <p className="text-stone-600">Loading...</p>;
  if (error) return <p className="text-red-700">{error}</p>;
  if (orders.length === 0) return <p className="text-stone-600">No orders yet.</p>;

  return (
    <div className="space-y-3">
      {orders.map((o) => (
        <div key={o.id} className="border border-stone">
          <button
            type="button"
            onClick={() => setExpanded(expanded === o.id ? null : o.id)}
            className="w-full flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-left"
          >
            <div>
              <p className="font-semibold">{o.id}</p>
              <p className="text-xs text-stone-500">{dateTime(o.createdAt)}</p>
            </div>
            <p className="text-sm text-stone-600">{o.customer?.email}</p>
            <p className="font-semibold">{money(o.total)}</p>
            <span
              className={`text-xs uppercase px-3 py-1 rounded-full ${PAYMENT_BADGE[o.status] ?? "bg-stone-200"}`}
            >
              {PAYMENT_LABEL[o.status] ?? o.status}
            </span>
            <span className="text-xs uppercase text-stone-500">{o.fulfillmentStatus ?? "unfulfilled"}</span>
          </button>

          {expanded === o.id && (
            <div className="border-t border-stone px-5 py-4 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Shipping to</p>
                  <p className="text-stone-600">
                    {o.shippingAddress?.fullName}
                    <br />
                    {o.shippingAddress?.address}
                    <br />
                    {o.shippingAddress?.city} {o.shippingAddress?.postalCode}
                    <br />
                    {o.shippingAddress?.country}
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Contact</p>
                  <p className="text-stone-600">
                    {o.customer?.email}
                    <br />
                    {o.customer?.phone}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-sm">Items</p>
                <ul className="text-sm divide-y divide-stone">
                  {o.items?.map((i) => (
                    <li key={i.id} className="flex justify-between py-2">
                      <span>
                        {i.name} × {i.quantity}
                      </span>
                      <span>{money(i.price * i.quantity)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <label className="text-sm font-semibold" htmlFor={`fulfillment-${o.id}`}>
                  Fulfillment:
                </label>
                <select
                  id={`fulfillment-${o.id}`}
                  value={o.fulfillmentStatus ?? "unfulfilled"}
                  disabled={savingId === o.id}
                  onChange={(e) => updateFulfillment(o.id, e.target.value)}
                  className="border border-stone px-3 py-2 text-sm"
                >
                  {FULFILLMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Page ---------- */
export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem("sakura_admin_token"));
  const [tab, setTab] = useState("reviews");

  function handleLogin(newToken) {
    sessionStorage.setItem("sakura_admin_token", newToken);
    setToken(newToken);
  }

  function handleLogout() {
    sessionStorage.removeItem("sakura_admin_token");
    setToken(null);
  }

  const api = useAdminApi(token, handleLogout);

  if (!token) return <LoginForm onLoggedIn={handleLogin} />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Admin</h1>
        <button onClick={handleLogout} className="text-sm underline text-stone-600 hover:text-blushDark">
          Log out
        </button>
      </div>

      <div className="flex gap-2 mb-8 border-b border-stone">
        {["reviews", "orders"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-3 text-sm uppercase tracking-wide border-b-2 -mb-px ${
              tab === t ? "border-charcoal text-charcoal" : "border-transparent text-stone-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "reviews" ? <ReviewsTab api={api} /> : <OrdersTab api={api} />}
    </div>
  );
}