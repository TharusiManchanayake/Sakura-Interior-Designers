import { Link } from "react-router-dom";
import aboutus1 from "../assets/about/aboutus1.jpg";
import aboutus2 from "../assets/about/aboutus2.jpg";
import aboutus3 from "../assets/about/aboutus3.jpg";
import aboutus4 from "../assets/about/aboutus4.jpg";
import aboutus5 from "../assets/about/aboutus5.jpg";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
            About Sakura Interiors
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where beautiful spaces begin with an idea.
          </h1>
          <p className="text-stone-600 leading-relaxed mb-4">
            At Sakura Interiors, we believe that a home is more than furniture,
            colours, and decoration. It is a reflection of the people who live
            there — their personality, their lifestyle, and the moments that
            make a space feel like home.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Our vision is to make interior design more inspiring and accessible
            by bringing together beautiful spaces, thoughtful design ideas, and
            carefully selected products in one place.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <img src={aboutus1} alt="Sakura Interiors" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Vision paragraph */}
      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <p className="text-stone-600 leading-relaxed">
          We believe that great design begins with understanding how a space
          should feel, not simply how it should look. A bedroom can become a
          peaceful retreat, a living room can create a warm atmosphere for
          connection, and a home office can become a place that encourages
          creativity. Whether you are redesigning one room or imagining an
          entirely new home, Sakura Interiors is designed to help you discover
          possibilities and turn inspiration into your own vision.
        </p>
      </section>

      {/* Find Your Style */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-sm order-2 md:order-1">
            <img src={aboutus2} alt="Find Your Style" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="uppercase tracking-widest text-sm text-sage mb-4">
              Find Your Style
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Not sure which interior style speaks to you?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Let us help you discover it. Find My Style is an interactive part
              of the Sakura Interiors experience, created to guide you through
              different design personalities based on your preferences. Whether
              you are drawn to the peaceful simplicity of Japandi, the elegance
              of Art Deco, the relaxed atmosphere of Coastal, the warmth of
              Farmhouse, or the clean character of Minimalist design, exploring
              different styles can help you understand what truly feels like you.
            </p>
            <Link
              to="/find-my-style"
              className="text-blushDark font-semibold hover:underline"
            >
              Find My Style →
            </Link>
          </div>
        </div>
      </section>

      {/* Style range paragraph */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-stone-600 leading-relaxed">
          Our collection brings together a wide range of design aesthetics,
          including Bohemian, Contemporary, Glam, Industrial, Mid-Century
          Modern, Modern, Scandinavian, Traditional, and Transitional styles.
          Rather than following one definition of beauty, we believe that every
          person should have the freedom to explore, mix, and personalise
          different styles until they find a space that feels authentic.
        </p>
      </section>

      {/* Meet the Designers */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
              Meet the Designers
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Behind every beautiful interior is a designer with a different
              way of seeing the world.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Our Designers section introduces visitors to inspiring design
              perspectives and creative approaches from the world of interiors.
              Explore designer profiles, discover their signature aesthetics,
              and see how different creative minds transform spaces through
              colour, materials, furniture, lighting, and composition.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              From designers who embrace quiet minimalism to those who love
              bold colours, rich textures, or timeless elegance, discovering
              different designers can be another way to discover your own
              style. Sakura Interiors brings these perspectives together as a
              source of inspiration, helping you see how many different
              possibilities can exist within a single space.
            </p>
            <Link
              to="/designers"
              className="text-blushDark font-semibold hover:underline"
            >
              Meet the Designers →
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img src={aboutus3} alt="Meet the Designers" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Explore. Imagine. Create. */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-sm order-2 md:order-1">
          <img src={aboutus4} alt="Explore Imagine Create" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">Explore. Imagine. Create.</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            At Sakura Interiors, we want the journey of designing a home to be
            just as enjoyable as the final result. Explore our portfolio by
            room or style, discover designers who inspire you, experiment with
            different aesthetics through Find My Style, and browse products
            that can help bring your ideas together.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We believe that the most beautiful interiors are not necessarily
            the ones that follow every trend. They are the ones that feel
            personal, comfortable, and meaningful. A carefully chosen chair, a
            beautiful lamp, a piece of artwork, or even a simple combination of
            textures can completely change the atmosphere of a room. Sometimes,
            creating a beautiful home begins with just one small idea.
          </p>
        </div>
      </section>

      {/* More Than a Room */}
      <section className="bg-charcoal text-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">More Than a Room</h2>
          <p className="text-stone leading-relaxed mb-4">
            A bedroom should make you want to slow down. A living room should
            invite conversation. A workspace should inspire you. A dining room
            should bring people together. Every room has a purpose, but every
            room can also have a personality.
          </p>
          <p className="text-stone leading-relaxed">
            That is what Sakura Interiors is about — creating spaces that are
            beautiful to look at and meaningful to live in.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="aspect-[16/6] overflow-hidden rounded-sm mb-10">
          <img src={aboutus5} alt="Your Space. Your Style. Your Story." className="w-full h-full object-cover" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Your Space. Your Style. Your Story.
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto mb-8">
          Whether you already know your aesthetic or are still searching for
          inspiration, Sakura Interiors is here to help you explore the
          possibilities. Find your style, discover inspiring designers,
          explore beautiful spaces, and create an interior that feels
          uniquely yours.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/find-my-style"
            className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
          >
            Find My Style
          </Link>
          <Link
            to="/portfolio"
            className="border border-charcoal px-6 py-3 text-sm uppercase tracking-wide hover:border-blushDark hover:text-blushDark transition-colors"
          >
            Explore Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}