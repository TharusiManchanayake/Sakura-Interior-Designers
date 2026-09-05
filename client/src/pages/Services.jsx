import { Link } from "react-router-dom";
import services1 from "../assets/services/services1.jpg";
import services2 from "../assets/services/services2.jpg";
import services3 from "../assets/services/services3.jpg";
import services4 from "../assets/services/services4.jpg";
import services5 from "../assets/services/services5.jpg";
import services6 from "../assets/services/services6.jpg";

const featuredServices = [
  {
    title: "Find Your Style",
    tagline: "Discover what feels like you.",
    description:
      "Not sure which interior style matches your personality? Our Find My Style experience helps you explore different aesthetics based on your preferences, lifestyle, and the atmosphere you want to create. Answer a few simple questions about colours, materials, furniture, and spaces you love, and discover styles that may suit you — from Japandi and Scandinavian to Modern, Art Deco, Coastal, Minimalist, Bohemian, and more.",
    cta: "Find My Style →",
    to: "/find-my-style",
    image: services2,
  },
  {
    title: "Room Design",
    tagline: "Transform one room at a time.",
    description:
      "Every room has a different purpose, and our room design service helps you create an environment that works beautifully for the way you live. Whether you're refreshing a peaceful bedroom, creating a welcoming living room, designing a productive home office, or styling a dining space, we help bring the right combination of furniture, colours, lighting, textures, and accessories together.",
    cta: "Explore Room Design →",
    to: "/portfolio",
    image: services3,
  },
  {
    title: "Complete Interior Design",
    tagline: "From the first idea to the final detail.",
    description:
      "For those looking to create a completely new look, our full interior design service brings the entire space together as one cohesive vision. We consider your preferred style, colour palette, furniture, lighting, materials, layout, and decorative details to create an interior that feels balanced from beginning to end.",
    cta: "Start Your Design →",
    to: "/booking",
    image: services4,
  },
];

const compactServices = [
  {
    title: "Personalised Design Consultation",
    tagline: "A little guidance can change everything.",
    description:
      "Discuss your space, preferences, colour choices, furniture options, or design challenges with a Sakura designer and receive guidance tailored to your vision.",
    cta: "Book a Consultation →",
    to: "/booking",
  },
  {
    title: "Furniture & Décor Selection",
    tagline: "Find pieces that belong together.",
    description:
      "Sakura Interiors makes the process easier by helping you discover furniture and decorative pieces that complement your chosen style.",
    cta: "Shop the Collection →",
    to: "/shop",
  },
  {
    title: "Interior Styling",
    tagline: "The details make the space.",
    description:
      "Our styling service focuses on the details that create atmosphere — from artwork and accessories to cushions, lighting, plants, and textures.",
    cta: "Explore Styling →",
    to: "/shop",
  },
  {
    title: "Designer Match",
    tagline: "Find the creative mind behind your vision.",
    description:
      "Our Designer Match service helps you discover a Sakura designer whose creative approach aligns with your preferences.",
    cta: "Meet Our Designers →",
    to: "/designers",
  },
  {
    title: "Design Inspiration",
    tagline: "Sometimes, inspiration comes first.",
    description:
      "Explore Sakura's collection of interior projects, room ideas, design styles, and curated spaces to gather inspiration before beginning your own design journey.",
    cta: "Explore Inspiration →",
    to: "/portfolio",
  },
];

const journeySteps = [
  { number: "01", title: "Discover", text: "Explore rooms, styles, designers, and ideas to understand what inspires you." },
  { number: "02", title: "Define", text: "Use Find My Style or speak with a designer to develop a clearer vision." },
  { number: "03", title: "Design", text: "Build your room concept with colours, furniture, materials, lighting, and décor." },
  { number: "04", title: "Shop", text: "Discover products and pieces that complement your chosen design." },
  { number: "05", title: "Create", text: "Bring everything together and turn your vision into a space that feels like home." },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Design your space. Your way.
          </h1>
          <p className="text-stone-600 leading-relaxed mb-4">
            At Sakura Interiors, we believe that creating a beautiful home
            should be an enjoyable experience. Whether you are looking for
            inspiration, refreshing a single room, or planning a complete
            interior transformation, our services are designed to help you
            move from an idea to a space that feels truly yours.
          </p>
          <p className="text-stone-600 leading-relaxed">
            From discovering your personal style to selecting furniture and
            creating a complete room concept, Sakura brings design
            inspiration and practical solutions together in one place.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <img src={services1} alt="Sakura Interiors services" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Featured services — alternating layout */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {featuredServices.map((service, i) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`aspect-[4/3] overflow-hidden rounded-sm ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="uppercase tracking-widest text-sm text-sage mb-2">
                  ✦ {service.tagline}
                </p>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.to}
                  className="text-blushDark font-semibold hover:underline"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compact services grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          More Ways We Can Help
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {compactServices.map((service) => (
            <div
              key={service.title}
              className="border border-stone p-6 hover:border-blush transition-colors"
            >
              <p className="text-sm text-sage uppercase tracking-wide mb-2">
                {service.tagline}
              </p>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to={service.to}
                className="text-blushDark text-sm font-semibold hover:underline"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Design Journey */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
                Our Design Journey
              </p>
              <h2 className="text-3xl font-bold">
                From inspiration to your space.
              </h2>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src={services5} alt="Our design journey" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            {journeySteps.map((step) => (
              <div key={step.number}>
                <p className="text-3xl font-bold text-blush mb-2">
                  {step.number}
                </p>
                <p className="font-semibold mb-1">{step.title}</p>
                <p className="text-sm text-stone-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sakura */}
      <section className="relative">
        <div className="aspect-[16/6] overflow-hidden">
          <img
            src={services6}
            alt="Why choose Sakura Interiors"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sakura?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            At Sakura Interiors, we don't believe that interior design should
            be about following a formula. Your space should reflect your
            lifestyle, your personality, and your individual sense of beauty.
            That's why our services are designed to give you inspiration and
            guidance while leaving room for personal expression.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Whether you need a little inspiration or a complete design
            direction, Sakura Interiors helps make the process simpler, more
            creative, and more enjoyable.
          </p>
          <Link
            to="/booking"
            className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}