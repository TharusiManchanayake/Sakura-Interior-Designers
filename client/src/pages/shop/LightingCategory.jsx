import { useParams, Link } from "react-router-dom";
import { lightingSubcategories, getLightingProducts } from "../../data/shopData";

export default function LightingCategory() {
  const { slug } = useParams();
  const subcategory = lightingSubcategories.find((s) => s.slug === slug);

  if (!subcategory) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl">Category not found.</p>
        <Link to="/shop/lighting" className="text-blushDark underline">
          Back to Lighting
        </Link>
      </div>
    );
  }

  const products = getLightingProducts(subcategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-blushDark mb-2">
        Lighting
      </p>
      <h1 className="text-4xl font-bold mb-10">{subcategory.name}</h1>

      {products.length === 0 ? (
        <p className="text-stone-600">Products for this category are coming soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-stone-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}

      <Link to="/shop/lighting" className="text-blushDark underline mt-10 inline-block">
        ← Back to Lighting
      </Link>
    </div>
  );
}