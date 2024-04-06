import { useDispatch } from "react-redux";
import { menu_img_url } from "../config";
import "../css/cart.css";
import { removeItem } from "../utils/cartSlice";
const CartItems = ({
  name,
  imageId,
  isVeg,
  ratings,
  price,
  description,
  itemAttribute,
  cartMenuObj,
}) => {
  const dispatch = useDispatch((store) => store.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      <div className="cart-item-box">
        <div className="cart-item-detail">
          {isVeg === 1 ? (
            <h5 className="cart-text">🟢 {itemAttribute?.vegClassifier}</h5>
          ) : (
            <h5 className="cart-text">🔴 {itemAttribute?.vegClassifier}</h5>
          )}
          <h1 className="cart-text">{name}</h1>
          <p className="cart-text">{description}</p>
          <h3 className="cart-text">{ratings?.aggregatedRating?.rating} ⭐</h3>
          <h2 className="cart-text" id="cart-price">
            Rs {Math.round(price / 100)}
          </h2>
          {/* <button onClick={() => handleRemoveItem(cartMenuObj)}>Remove</button> */}
        </div>
        <div className="cart-item-image">
          <img src={menu_img_url + imageId} alt="" />
        </div>
      </div>
    </>
  );
};

export default CartItems;
