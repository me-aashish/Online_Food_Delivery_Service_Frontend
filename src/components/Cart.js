import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItemInCart from "./FoodItemInCart";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-2">
        Welcome to Cart - {cartItems.length} items present
      </h1>
      {cartItems.length > 0 && <button
        className="p-2 m-2 hover:bg-pink-200 rounded-lg bg-purple-200 shadow-lg"
        onClick={() => clearCartHandler()}
      >
        Clear Cart
      </button>}
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItemInCart item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
