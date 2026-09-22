import { useParams, Link } from "react-router-dom";
import { rooms } from "../../data/portfolioData";
import { roomContent } from "../../data/roomContent";
import ContentBlocks from "../../components/ContentBlocks";
import { getRoomHero } from "../../data/heroImages";

export default function ByRoom() {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);
  const content = roomContent[slug];
  const hero = getRoomHero(slug);

  // Slug doesn't exist at all (bad URL)
  if (!room) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl">Room not found.</p>
        <Link to="/portfolio" className="text-blushDark underline">Back to Portfolio</Link>
      </div>
    );
  }

  // Slug is valid but we haven't written the detailed content for it yet
  if (!content) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-blushDark mb-2">By Room</p>
        <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
        <p className="text-stone-600">
          Detailed content for this room is coming soon.
        </p>
        <Link to="/portfolio" className="text-blushDark underline mt-4 inline-block">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Full rich content page
  return (
    <div>
      {/* Hero (only shown when a matching image exists, e.g. bedroomhero.jpg) */}
      {hero && (
        <div className="max-w-5xl mx-auto px-6 pt-10">
          <img
            src={hero}
            alt={content.title}
            className="w-full h-auto max-h-[70vh] object-cover rounded-sm"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-blushDark mb-2">
          By Room
        </p>
        <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
        <p className="text-xl text-blushDark mb-6">{content.tagline}</p>

        <p className="text-stone-700 leading-relaxed mb-6">{content.intro}</p>

        <div className="flex flex-wrap gap-2 mb-16">
          {content.keywords.map((word) => (
            <span
              key={word}
              className="text-xs uppercase tracking-wide border border-stone px-3 py-1 rounded-full text-stone-600"
            >
              {word}
            </span>
          ))}
        </div>

        {content.sections.map((section, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b border-stone pb-2">
              {section.heading}
            </h2>

            {section.image && (
              <div className="aspect-[8/5] overflow-hidden rounded-sm mb-6">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <ContentBlocks blocks={section.blocks} />
          </div>
        ))}

        <Link to="/portfolio" className="text-blushDark underline">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}