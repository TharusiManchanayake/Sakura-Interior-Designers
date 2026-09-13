import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { furnitureSubcategories, getFurnitureProducts } from "../../data/shopData";
import { useCart } from "../../context/CartContext";

export default function FurnitureCategory() {
  const { slug } = useParams();
  const subcategory = furnitureSubcategories.find((s) => s.slug === slug);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  if (!subcategory) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl">Category not found.</p>
        <Link to="/shop/furniture" className="text-blushDark underline">
          Back to Furniture
        </Link>
      </div>
    );
  }

  const products = getFurnitureProducts(subcategory);

  function handleAddToCart(product) {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-blushDark mb-2">
        Furniture
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
              <p className="text-sm text-stone-600 mb-3">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full border border-charcoal text-charcoal text-xs uppercase tracking-wide py-2 hover:bg-charcoal hover:text-cream transition-colors"
              >
                {addedId === product.id ? "Added ✓" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}

      <Link to="/shop/furniture" className="text-blushDark underline mt-10 inline-block">
        ← Back to Furniture
      </Link>
    </div>
  );
}