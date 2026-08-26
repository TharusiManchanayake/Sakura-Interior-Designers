import { useParams, Link } from "react-router-dom";
import { styles } from "../../data/portfolioData";
import { styleContent } from "../../data/styleContent";
import ContentBlocks from "../../components/ContentBlocks";

export default function ByStyle() {
  const { slug } = useParams();
  const style = styles.find((s) => s.slug === slug);
  const content = styleContent[slug];

  // Slug doesn't exist at all (bad URL)
  if (!style) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl">Style not found.</p>
        <Link to="/portfolio" className="text-blushDark underline">Back to Portfolio</Link>
      </div>
    );
  }

  // Slug is valid but we haven't written the detailed content for it yet
  if (!content) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-sage mb-2">By Style</p>
        <h1 className="text-4xl font-bold mb-4">{style.name}</h1>
        <p className="text-stone-600">
          Detailed content for this style is coming soon.
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
      {/* Hero */}
      <div className="aspect-[12/5] w-full overflow-hidden">
        <img
          src={content.heroImage}
          alt={content.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-sage mb-2">
          By Style
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