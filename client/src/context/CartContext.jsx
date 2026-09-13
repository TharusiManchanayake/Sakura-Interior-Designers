import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "sakura_cart";

function loadInitialCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const existing = state.find((item) => item.id === product.id);

      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...state, { ...product, quantity }];
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        return state.filter((item) => item.id !== id);
      }

      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    undefined,
    loadInitialCart
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, quantity = 1) {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  }

  function removeFromCart(id) {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }

  function updateQuantity(id, quantity) {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}