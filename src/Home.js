import React from "react";
import { useCart } from "./store/cart";

import { navigate } from "@reach/router";

import "./styles.css";

const initialItems = [
  {
    id: 1,
    name: "Lamp",
    image: "https://picsum.photos/200?random=1",
    price: 200
  },
  {
    id: 2,
    name: "Study Desk",
    image: "https://picsum.photos/200?random=1",
    price: 200
  },
  {
    id: 1,
    name: "Flower Vase",
    image: "https://picsum.photos/200?random=1",
    price: 200
  },
  {
    id: 1,
    name: "Candle",
    image: "https://picsum.photos/200?random=1",
    price: 200
  }
];

const Home = () => {
  const [items, setItems] = React.useState(initialItems);
  const { cartItems, setCartItems } = useCart();

  const addToCart = (item) => () => {
    setCartItems([...cartItems, item]);
  };

  const goToCart = () => navigate("/cart");

  return (
    <div className="App">
      <h1>E-Commerce Platofrm</h1>
      <button>Orders</button>
      <button onClick={goToCart}>Cart</button>
      <h2> Items </h2>
      <div className="items">
        {items.map((item, index) => (
          <div className="item">
            <img src={item.image} alt={item.name} />
            <strong>{item.name}</strong>
            <p>Rs. {item.price}</p>
            <button onClick={addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
