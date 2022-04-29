import * as React from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
