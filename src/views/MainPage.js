import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import Image from "./EImage.js";
import Restaurant from "./Restaurant.js";
const MainPage = () => {
  const navigate = useNavigate();
  const handleRestaurantClick = (type) => {
    navigate("/restaurant", {
      state: {
        type: type,
      },
    });
  };

  return (
    <div>
      <div className="searchPage">
        <Header />
        <Image e="e" image="image1" />
        <h1 className=" text text-white text-center pt-2">
          Find the best restaurants, cafes and bars
        </h1>

        <div className="search">
          <div>
            <input type="text" placeholder="Please type a location" size="18" />
          </div>
          <div className="searchDiv">
            <div className="searchIcon">
              <span className="color place">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <input
              type="search"
              className="place"
              size="18"
              placeholder="Search for restaurants"
            />
          </div>
        </div>
      </div>
      <div className="restaurantSearch">
        <div className="searchData">
          <h1>Quick Searches</h1>
          <p>Discover restaurants by type of meal</p>
        </div>
        <div className="restaurantType">
          <Restaurant
            path="../../images/img-1.png"
            type="Breakfast"
            handleClick={() => handleRestaurantClick("breakfast")}
          />
          <Restaurant
            path="../../images/img-2.png"
            type="Lunch"
            handleClick={() => handleRestaurantClick("lunch")}
          />
          <Restaurant
            path="../../images/img-3.png"
            type="Dinner"
            handleClick={() => handleRestaurantClick("dinner")}
          />
          <Restaurant
            path="../../images/img-4.png"
            type="Snacks"
            handleClick={() => handleRestaurantClick("snacks")}
          />
          <Restaurant
            path="../../images/img-5.png"
            type="Drinks"
            handleClick={() => handleRestaurantClick("drinks")}
          />
          <Restaurant
            path="../../images/img-6.png"
            type="NightLife"
            handleClick={() => handleRestaurantClick("nightLife")}
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
