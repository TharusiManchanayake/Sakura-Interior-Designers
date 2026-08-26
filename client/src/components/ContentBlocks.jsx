export default function ContentBlocks({ blocks }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "text") {
          return (
            <p key={i} className="text-stone-700 leading-relaxed">
              {block.text}
            </p>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3 key={i} className="text-lg font-semibold text-charcoal mt-6">
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc list-inside space-y-1 text-stone-700">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "terms") {
          return (
            <dl key={i} className="space-y-3">
              {block.items.map((entry, j) => (
                <div key={j}>
                  <dt className="font-semibold text-charcoal">{entry.term}</dt>
                  <dd className="text-stone-700">{entry.desc}</dd>
                </div>
              ))}
            </dl>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-blush pl-4 italic text-xl text-charcoal my-6"
            >
              "{block.text}"
            </blockquote>
          );
        }

        return null; // unknown block type — silently skip instead of crashing
      })}
    </div>
  );
}