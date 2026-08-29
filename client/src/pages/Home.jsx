import { Link } from "react-router-dom";
import { styles } from "../data/portfolioData";
import { styleContent } from "../data/styleContent";

export default function Home() {
  // Pick a few styles to feature on the homepage
  const featuredSlugs = ["japandi", "art-deco", "coastal", "minimalist"];
  const featured = featuredSlugs
    .map((slug) => ({ slug, ...styleContent[slug] }))
    .filter((s) => s.title); // skip any not yet written

  return (
    <div>
      {/* Hero */}
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
            <Link
              to="/services"
              className="border border-charcoal px-6 py-3 text-sm uppercase tracking-wide hover:border-blushDark hover:text-blushDark transition-colors"
            >
              Our Services
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

      {/* Explore by */}
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

      {/* Featured Styles */}
      {featured.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">Featured Styles</h2>
            <p className="text-center text-stone-600 mb-10">
              A glimpse into the design languages we work in most.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {featured.map((style) => (
                <Link
                  key={style.slug}
                  to={`/portfolio/style/${style.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-sm mb-3">
                    <img
  src={style.sections[0].image}
  alt={style.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
                  </div>
                  <p className="font-semibold group-hover:text-blushDark transition-colors">
                    {style.title}
                  </p>
                  <p className="text-sm text-stone-600">{style.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services teaser + CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-widest text-sm text-sage mb-4">
          How We Work
        </p>
        <h2 className="text-3xl font-bold mb-4">
          From first sketch to final styling.
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto mb-10">
          Whether you need a full home transformation or a single room refresh,
          Sakura Interiors offers a range of services tailored to your space and budget.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
          >
            View Services
          </Link>
          <Link
            to="/about"
            className="border border-charcoal px-6 py-3 text-sm uppercase tracking-wide hover:border-blushDark hover:text-blushDark transition-colors"
          >
            About Sakura
          </Link>
        </div>
      </section>
    </div>
  );
}