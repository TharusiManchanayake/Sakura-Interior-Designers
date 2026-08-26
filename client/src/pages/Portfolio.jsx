import { Link } from "react-router-dom";
import { rooms, styles } from "../data/portfolioData";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
      <p className="text-center text-stone-600 mb-12">
        Browse our work by room, or by design style.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl text-blushDark font-semibold mb-4">By Room</h2>
          <ul className="grid grid-cols-2 gap-3">
            {rooms.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/portfolio/room/${r.slug}`}
                  className="block border border-stone px-4 py-3 text-sm hover:border-blush hover:text-blushDark transition-colors"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-sage font-semibold mb-4">By Style</h2>
          <ul className="grid grid-cols-2 gap-3">
            {styles.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/portfolio/style/${s.slug}`}
                  className="block border border-stone px-4 py-3 text-sm hover:border-blush hover:text-blushDark transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}