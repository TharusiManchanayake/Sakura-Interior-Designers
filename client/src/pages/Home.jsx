import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
            Interior Design Studio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Spaces that bloom <br /> with intention.
          </h1>
          <p className="text-stone-600 mb-8 max-w-md">
            Sakura Interiors designs homes that feel as considered as they look —
            from a single room refresh to a full renovation.
          </p>
          <div className="flex gap-4">
            <Link
              to="/portfolio"
              className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="aspect-[4/3] bg-stone rounded-sm overflow-hidden">
          <img
            src="https://placehold.co/800x600/E8A0A0/FAF7F2?text=Sakura+Interiors"
            alt="Featured interior design project"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Quick links to Portfolio categories */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Explore by...</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/portfolio/room/living-room"
            className="group border border-stone p-10 hover:border-blush transition-colors"
          >
            <p className="text-2xl font-semibold mb-2">By Room</p>
            <p className="text-sm text-stone-600 group-hover:text-blushDark">
              Bedroom, living room, patio and more
            </p>
          </Link>
          <Link
            to="/portfolio/style/japandi"
            className="group border border-stone p-10 hover:border-blush transition-colors"
          >
            <p className="text-2xl font-semibold mb-2">By Style</p>
            <p className="text-sm text-stone-600 group-hover:text-blushDark">
              Japandi, minimalist, coastal and more
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}