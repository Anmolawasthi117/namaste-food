import { img_cdn_link } from "../config";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  areaName,
}) => {
  return (
    <div className="rescard">
      <img src={img_cdn_link + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <h2>{locality + ", " + areaName}</h2>

      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};
