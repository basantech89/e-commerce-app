import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "./store/cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
      </Router>
    </CartProvider>
  );
}
