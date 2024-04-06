import { useEffect, useState } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Shimmer from "./Shimmerui";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import "../css/restaurantDetails.css";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import MenuShimmerui from "./MenuShimmerui";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId)
  const restaurantDetail = useRestaurantDetail(resId)


  return restaurantMenu?.length === 0 || restaurantDetail?.length === 0 ? (
    <MenuShimmerui />
  ) : (
    <>
      <div className="restaurant-info-cont">
        <div className="restaurant-info">
          <RestaurantInfo {...restaurantDetail} />
          {/* {console.log(restaurantDetail)} */}
        </div>
        <div className="restaurant-menu-info">
          <h1 id="res-menu-name">{restaurantDetail.name} Menu</h1>
          {restaurantMenu.map((menuItems) => {
            {
              return menuItems?.itemCards.map((menuList)  => {
                // console.log(menuList.card.info);
                return (
                  <li key={...menuList?.card?.info?.id}>
                    <RestaurantMenuInfo {...menuList?.card?.info} menuobj={...menuList}/>
                  </li>
                );
              });
            }
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
