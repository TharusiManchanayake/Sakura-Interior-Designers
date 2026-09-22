import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { reviews, reviewCategories } from "../data/reviewsData";
import { API_URL } from "../config";

const FORM_CATEGORIES = reviewCategories.filter((c) => c !== "All");
const MAX_QUOTE = 1000;

const EMPTY_FORM = {
  name: "",
  category: FORM_CATEGORIES[0],
  headline: "",
  quote: "",
  website: "", // hidden spam trap, real visitors never fill this in
};

const monthYear = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });

const inputClass = (error) =>
  `w-full border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-charcoal ${
    error ? "border-red-600" : "border-stone"
  }`;

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (f.headline.trim().length < 3) e.headline = "Please add a short title for your review.";
  if (f.quote.trim().length < 30)
    e.quote = "Please write at least a couple of sentences (30+ characters).";
  return e;
}

/* ---------- The "write a review" form ---------- */
function ReviewForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [submitError, setSubmitError] = useState("");

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
      setTimeout(() => document.querySelector('[aria-invalid="true"]')?.focus(), 0);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setForm(EMPTY_FORM);
      setStatus("done");
    } catch {
      setSubmitError("We couldn't reach the server. Please try again in a moment.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-stone p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Thank you for your review!</h3>
        <p className="text-stone-600 mb-6">
          We read every review, and yours will appear on this page once we've approved it.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm underline text-stone-600 hover:text-blushDark"
        >
          Write another review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="rv-name" className="block text-sm font-medium mb-1.5">
            Your name
          </label>
          <input
            id="rv-name"
            value={form.name}
            onChange={update("name")}
            maxLength={60}
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="rv-category" className="block text-sm font-medium mb-1.5">
            What did we design for you?
          </label>
          <select
            id="rv-category"
            value={form.category}
            onChange={update("category")}
            className={inputClass(errors.category)}
          >
            {FORM_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-xs text-red-700">{errors.category}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="rv-headline" className="block text-sm font-medium mb-1.5">
          Review title
        </label>
        <input
          id="rv-headline"
          value={form.headline}
          onChange={update("headline")}
          maxLength={100}
          placeholder="e.g. A home that finally feels like us"
          aria-invalid={errors.headline ? "true" : "false"}
          className={inputClass(errors.headline)}
        />
        {errors.headline && <p className="mt-1 text-xs text-red-700">{errors.headline}</p>}
      </div>

      <div>
        <label htmlFor="rv-quote" className="block text-sm font-medium mb-1.5">
          Your review
        </label>
        <textarea
          id="rv-quote"
          rows={6}
          value={form.quote}
          onChange={update("quote")}
          maxLength={MAX_QUOTE}
          aria-invalid={errors.quote ? "true" : "false"}
          className={inputClass(errors.quote)}
        />
        <div className="flex justify-between mt-1">
          <p className="text-xs text-red-700">{errors.quote}</p>
          <p className="text-xs text-stone-500">
            {form.quote.length}/{MAX_QUOTE}
          </p>
        </div>
      </div>

      {/* Spam trap: hidden from people, bots tend to fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update("website")}
          />
        </label>
      </div>

      {submitError && (
        <p role="alert" className="text-sm text-red-700">
          {submitError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit review"}
        </button>
        <p className="text-xs text-stone-500">
          Reviews are checked by our team before they appear on the site.
        </p>
      </div>
    </form>
  );
}

/* ---------- The page ---------- */
export default function Reviews() {
  const [active, setActive] = useState("All");
  const [customerReviews, setCustomerReviews] = useState([]);

  // Load approved reviews that visitors have submitted.
  // If the server isn't reachable, the page still shows your own reviews.
  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/api/reviews`)
      .then((res) => (res.ok ? res.json() : []))
      .then((list) => {
        if (!cancelled && Array.isArray(list)) setCustomerReviews(list);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const matches = (r) => active === "All" || r.category === active;
  const featured = reviews.filter(matches);
  const fromCustomers = customerReviews.filter(matches);

  return (
    <div>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-blushDark mb-2">Reviews</p>
        <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Kind words from the homeowners, couples and families we've designed for.
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-wrap justify-center gap-2">
        {reviewCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`text-xs uppercase tracking-wide border px-4 py-2 rounded-full transition-colors ${
              active === cat
                ? "bg-charcoal text-cream border-charcoal"
                : "border-stone text-stone-600 hover:border-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured reviews (with photos) */}
      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-x-10 gap-y-16">
          {featured.map((r) => (
            <article key={r.id} className="flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-stone mb-6">
                {r.image ? (
                  <img
                    src={r.image}
                    alt={`${r.name}'s ${r.category.toLowerCase()} by Sakura Interiors`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-stone-500">
                    {r.name[0]}
                  </div>
                )}
              </div>

              <p className="text-xs uppercase tracking-widest text-blushDark mb-2">
                {r.category}
              </p>
              <h2 className="text-2xl font-bold mb-1">“{r.headline}”</h2>
              <p className="text-sm text-stone-600 mb-4">
                {r.name} · {r.client}
              </p>
              <p className="text-stone-700 leading-relaxed">{r.quote}</p>
            </article>
          ))}
        </section>
      )}

      {/* Reviews submitted by visitors (only appear after approval) */}
      {fromCustomers.length > 0 && (
        <section className="border-t border-stone">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-10 text-center">More from our customers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {fromCustomers.map((r) => (
                <article key={r.id} className="border border-stone p-6">
                  <p className="text-xs uppercase tracking-widest text-blushDark mb-2">
                    {r.category}
                  </p>
                  <h3 className="text-lg font-bold mb-3">“{r.headline}”</h3>
                  <p className="text-stone-700 leading-relaxed whitespace-pre-line mb-4">
                    {r.quote}
                  </p>
                  <p className="text-sm text-stone-600">
                    {r.name} · {monthYear(r.createdAt)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {featured.length === 0 && fromCustomers.length === 0 && (
        <p className="text-center text-stone-600 pb-20">No reviews in this category yet.</p>
      )}

      {/* Write a review */}
      <section className="border-t border-stone">
        <div className="max-w-2xl mx-auto px-6 py-16 relative">
          <h2 className="text-3xl font-bold mb-2 text-center">Share your experience</h2>
          <p className="text-stone-600 mb-10 text-center">
            Worked with Sakura Interiors? We'd love to hear how it went.
          </p>
          <ReviewForm />
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your own story?</h2>
          <p className="text-stone-600 mb-8">
            Tell us about your space, and we'll help you make it feel like home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
            >
              Book a consultation
            </Link>
            <Link
              to="/portfolio"
              className="border border-charcoal px-6 py-3 text-sm uppercase tracking-wide hover:bg-charcoal hover:text-cream transition-colors"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}