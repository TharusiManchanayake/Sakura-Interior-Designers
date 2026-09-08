import { Link } from "react-router-dom";
import { furnitureSubcategories, getFurnitureProducts } from "../../data/shopData";

export default function Furniture() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-blushDark mb-2">Shop</p>
      <h1 className="text-4xl font-bold mb-10">Furniture</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {furnitureSubcategories.map((sub) => {
          const products = getFurnitureProducts(sub);
          const cover = products[0]?.image;

          return (
            <Link key={sub.slug} to={`/shop/furniture/${sub.slug}`} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-3 bg-stone">
                {cover ? (
                  <img
                    src={cover}
                    alt={sub.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-500 text-sm">
                    Coming soon
                  </div>
                )}
              </div>
              <p className="font-semibold group-hover:text-blushDark transition-colors">
                {sub.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}