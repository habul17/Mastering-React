import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurants from "../hooks/useRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [isTopRatedFilter, setIsTopRatedFilter] = useState(false);

  const {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  } = useRestaurants();

  useEffect(() => {
    let filteredList = allRestaurants;

    if (isTopRatedFilter) {
      filteredList = filteredList.filter(
        (res) => parseFloat(res.avgRating) > 4.2
      );
    }

    if (searchText) {
      filteredList = filteredList.filter((res) =>
        res.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredRestaurants(filteredList);
  }, [searchText, isTopRatedFilter, allRestaurants]);

  const handleTopRatedToggle = () => {
    setIsTopRatedFilter(!isTopRatedFilter);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div style={{ padding: 20, color: "darkred" }}>{error}</div>;
  }

  return (
    <div className="body">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className={`filter-btn ${isTopRatedFilter ? "active" : ""}`}
          onClick={handleTopRatedToggle}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        ) : (
          <div style={{ padding: 20, textAlign: "center" }}>
            <h3>No restaurants match your filters.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
