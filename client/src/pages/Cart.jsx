import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-stone-600 mb-8">
          Browse the shop and add a few pieces you love.
        </p>
        <Link
          to="/shop"
          className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors inline-block"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      <div className="divide-y divide-stone">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center gap-4 sm:gap-6 py-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-sm bg-stone flex-shrink-0">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex-1 min-w-[140px]">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-stone-600">${item.price}</p>
            </div>

            <div className="flex items-center border border-stone rounded-sm">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-stone transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-stone transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="w-20 text-right font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-stone-500 hover:text-blushDark text-sm"
              aria-label="Remove item"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-6 mt-10 pt-6 border-t border-stone">
        <button
          onClick={clearCart}
          className="text-sm text-stone-500 hover:text-blushDark underline"
        >
          Clear cart
        </button>

        <div className="text-right">
          <p className="text-sm text-stone-600 mb-1">Subtotal</p>
          <p className="text-2xl font-bold mb-4">${cartTotal.toFixed(2)}</p>
          <button className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}