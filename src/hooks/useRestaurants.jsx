import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetching the direct URL, relying on the browser extension for CORS
      const response = await fetch(SWIGGY_API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      const restaurantGrid = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );

      const restaurantData =
        restaurantGrid?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      const validRestaurants = restaurantData
        .filter((item) => item && item.info)
        .map((item) => item.info);

      if (validRestaurants.length === 0) {
        console.warn(
          "Could not find any valid restaurant data in the API response."
        );
      }

      setAllRestaurants(validRestaurants);
      setFilteredRestaurants(validRestaurants);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
      setError(
        "Failed to load restaurants. Please ensure your CORS extension is active and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  };
};

export default useRestaurants;
