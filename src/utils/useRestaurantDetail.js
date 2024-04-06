import { useEffect, useState } from "react";

const useRestaurantDetail = (resId) => {
  const [restaurantDetail, setRestaurantDetail] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
        resId
    );

    const menuList = await data.json();

    setRestaurantDetail(menuList?.data?.cards[2]?.card?.card?.info);
  }
  return restaurantDetail;
};

export default useRestaurantDetail;
