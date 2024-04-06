import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import "../css/cart.css";

const Cart = () => {
  const Items = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="cart-cont">
        <h1 id="cart-heading">Cart Items</h1>
        {Items.map((items) => {
          return <CartItems {...items.card.info} key={...items.card.info.id} cartMenuObj={...items} />;
        })}
      </div>
    </>
  );
};

export default Cart;
