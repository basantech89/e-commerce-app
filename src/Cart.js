import { useCart } from "./store/cart";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  console.log("cc", cartItems);

  return cartItems.map((item) => <div key={item.id}> {item.name} </div>);
};

export default Cart;
