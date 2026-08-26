import { useState } from "react";
import { Link } from "react-router-dom";
import { rooms, styles } from "../data/portfolioData";

export default function Navbar() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-cream/90 backdrop-blur-sm border-b border-stone z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-charcoal">
          Sakura <span className="text-blush">Interiors</span>
        </Link>

        <nav className="flex items-center gap-8 text-sm uppercase tracking-wide">
          <Link to="/" className="hover:text-blushDark transition-colors">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <Link to="/portfolio" className="hover:text-blushDark transition-colors">
              Portfolio
            </Link>

            {portfolioOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] bg-white shadow-xl border border-stone rounded-sm p-8 grid grid-cols-2 gap-8 normal-case">
                <div>
                  <p className="text-lg text-blushDark mb-3 font-semibold">By Room</p>
                  <ul className="space-y-2 text-sm">
                    {rooms.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/portfolio/room/${r.slug}`}
                          className="hover:text-blushDark transition-colors"
                        >
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-lg text-sage mb-3 font-semibold">By Style</p>
                  <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-4">
                    {styles.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/portfolio/style/${s.slug}`}
                          className="hover:text-blushDark transition-colors"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}