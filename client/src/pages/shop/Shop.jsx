import { Link } from "react-router-dom";
import { shopCategories } from "../../data/shopData";

export default function Shop() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">Shop</h1>
      <p className="text-center text-stone-600 mb-12">
        Furniture and décor to complete your space.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shopCategories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop/${cat.slug}`}
            className="border border-stone p-10 text-center hover:border-blush transition-colors"
          >
            <p className="text-xl font-semibold">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}