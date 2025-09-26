import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData;

  const imageSrc = cloudinaryImageId
    ? `${CDN_URL}${cloudinaryImageId}`
    : "https://via.placeholder.com/240x160?text=No+Image";

  return (
    <div className="res-card" data-id={id}>
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <h4 className="res-card-cuisines">{cuisines.join(", ")}</h4>
      <div className="res-card-details">
        <span>
          <span className="icon-star">★</span> {avgRating}
        </span>
        <span>•</span>
        <span>{sla?.slaString?.toLowerCase()}</span>
        <span>•</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
