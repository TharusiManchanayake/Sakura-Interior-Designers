import { useState } from "react";
import consultantImg from "../assets/booking/consultant.png";

const services = [
  "Find Your Style",
  "Room Design",
  "Complete Interior Design",
  "Personalised Design Consultation",
  "Interior Styling",
  "Not sure yet",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
            Book a Consultation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let's talk about your space.
          </h1>
          <p className="text-stone-600 leading-relaxed">
            Whether you have a clear vision or you're just starting to explore
            ideas, a Sakura consultation is a relaxed conversation about your
            space, your style, and how we can help bring it to life.
          </p>
        </div>
      <div className="aspect-[4/3] overflow-hidden rounded-sm">
  <img
    src={consultantImg}
    alt="Book a consultation with Sakura Interiors"
    className="w-full h-full object-cover"
  />
</div>
      </section>

      {/* Form / confirmation */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        {submitted ? (
          <div className="border border-stone rounded-sm p-10 text-center">
            <p className="text-4xl mb-4">🌸</p>
            <h2 className="text-2xl font-bold mb-3">Thank you, {form.name.split(" ")[0] || "there"}!</h2>
            <p className="text-stone-600 leading-relaxed">
              Your consultation request has been received. A Sakura designer
              will be in touch with you shortly to confirm your appointment
              and discuss your space.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="date">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="service">
                What are you interested in?
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush bg-white"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Tell us about your space
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-stone px-4 py-3 focus:outline-none focus:border-blush"
                placeholder="Share a bit about your room, your style, or any ideas you already have..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-charcoal text-cream px-6 py-4 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
            >
              Request Consultation
            </button>
          </form>
        )}
      </section>
    </div>
  );
}