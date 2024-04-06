import React from "react";
import "../css/restaurantMenu.css";
import { menu_img_url } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuInfo = ({
  name,
  imageId,
  isVeg,
  ratings,
  price,
  description,
  itemAttribute,
  menuobj,
}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="restaurant-menu-info-card">
        <div className="restaurant-menu-info-card-text">
          {isVeg === 1 ? (
            <h5 className="cart-text">🟢 {itemAttribute?.vegClassifier}</h5>
          ) : (
            <h5 className="cart-text">🔴 {itemAttribute?.vegClassifier}</h5>
          )}
          <h1>{name}</h1>
          <h3>{Math.round(price / 100)} rs</h3>
          <p>{description}</p>
          <h3>{ratings?.aggregatedRating?.rating}</h3>
          <button className="addbtn" onClick={() => handleAddItem(menuobj)}>
            ADD
          </button>
        </div>
        <div className="restaurant-menu-info-card-img">
          <img src={menu_img_url + imageId} alt="" />
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuInfo;
