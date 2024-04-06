import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" +
        resId
    );
    // console.log(data);

    const menuList = await data.json();

    // console.log(menuList);
    const mapData =
      menuList.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x?.card?.card)
        .filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    setRestaurantMenu(mapData);
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
