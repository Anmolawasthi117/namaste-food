import React from "react";
import { menu_img_url } from "../config";
import "../css/restaurantDetails.css";

const RestaurantInfo = ({
  name,
  locality,
  costForTwoMessage,
  city,
  areaName,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="restaurant-info-card">
        <div className="restaurant-info-card-img">
          <img src={menu_img_url + cloudinaryImageId} alt="" />
        </div>
        <div className="restaurant-info-card-text">
          <h1>{name}</h1>
          <h2>{locality + ", " + areaName + ", " + city}</h2>
          <h3>{avgRatingString} Stars</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
