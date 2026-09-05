import { useState } from "react";
import { designers } from "../data/designersData";

export default function Designers() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="uppercase tracking-widest text-sm text-blushDark mb-4">
          🌸 Meet the Sakura Designers
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Behind every beautiful interior is a designer with a different
          way of seeing the world.
        </h1>
        <p className="text-stone-600 leading-relaxed">
          Explore designer profiles, discover their signature aesthetics, and
          see how different creative minds transform spaces through colour,
          materials, furniture, lighting, and composition.
        </p>
      </section>

      {/* Designer grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {designers.map((designer) => {
            const isExpanded = expandedId === designer.id;
            return (
              <div key={designer.id} className="text-center">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold">{designer.name}</p>
<p className="text-sm text-blushDark uppercase tracking-wide mb-1">
  {designer.specialty}
</p>
<p className="text-xs text-stone-500 mb-1">{designer.education}</p>
<p className="text-xs text-sage font-semibold mb-3">{designer.experience}</p>
                <p
                  className={`text-sm text-stone-600 leading-relaxed ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {designer.bio}
                </p>
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : designer.id)
                  }
                  className="text-blushDark text-sm font-semibold mt-2 hover:underline"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}