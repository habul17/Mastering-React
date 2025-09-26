import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // In Body component, before the return statement

  const restaurantList = [
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        cuisines: ["Burgers", "Biryani", "American"],
        avgRating: 4.1,
        costForTwo: 40000, // This is in paisa
        deliveryTime: 36,
      },
    },
    {
      data: {
        id: "229",
        name: "Meghana Foods",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Biryani", "Andhra", "South Indian"],
        avgRating: 4.4,
        costForTwo: 50000,
        deliveryTime: 38,
      },
    },
    // ... more restaurant objects
  ];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;