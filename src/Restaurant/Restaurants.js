import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../views/Header";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lists, setLists] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    getLists();
  }, []);
  const getLists = async () => {
    const ApiUrl = "http://localhost:5000/getlists";
    const res = await axios.get(ApiUrl);
    console.log("res", res);
    setLists(res.data);
  };

  const cardType = location.state.type;
  let tempData = [];
  tempData = lists && lists.filter((item) => item.type === cardType);
  const itemsToDisplay = 2;
  const startIndex = page * itemsToDisplay;
  const visibleItems = tempData.slice(startIndex, startIndex + itemsToDisplay);
  const restaurantDetails = (id) => {
    return navigate("/restaurantdetails", { state: { tempData, id } });
  };
  const PreviousPage = (restaurantDetails) => {
    if (page < 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page >= 1) {
      return;
    } else if (tempData) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Header HeaderColor />
      <div>
        <p id="breakfast">Best Places in this Area</p>
        <div id="left">
          <div id="filter">
            <h4>Filters</h4>
            <div>
              <p className="top">Select location</p>
              <select defaultValue="select">
                <option value="select">Select location</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <p className="top">Cuisine</p>
            <input type="checkbox" value="northIndian" />
            <label>North Indian</label>
            <br />
            <input type="checkbox" value="southIndian" />
            <label>South Indian</label>
            <br />
            <input type="checkbox" value="chinese" className="check" />
            <label>Chinese</label>
            <br />
            <input type="checkbox" value="fastFood" />
            <label>Fast Food</label>
            <br />
            <input type="checkbox" value="streetFood" />
            <label>Street Food</label>
            <br />
          </div>
          <div>
            <p className="top">Cost For Two</p>
            <input type="radio" id="500" value="less 500" name="cost" />
            <label htmlFor="500">Less than ` 500</label>
            <br />
            <input type="radio" id="1000" name="cost" value="1000" />
            <label htmlFor="1000">` 500 to ` 1000</label>
            <br />
            <input type="radio" id="1500" name="cost" value="1500" />
            <label htmlFor="1500">` 1000 to ` 1500</label>
            <br />
            <input type="radio" id="2000" name="cost" value="2000" />
            <label htmlFor="2000">` 1500 to ` 2000</label>
            <br />
            <input type="radio" id="2000+" name="cost" value="2000+" />
            <label htmlFor="2000+">` 2000+</label>
            <br />
          </div>
          <div>
            <p className="top">Sort</p>
            <input type="radio" id="low" name="sort" value="low" />
            <label htmlFor="low">Price low to high</label>
            <br />
            <input type="radio" id="high" name="sort" value="high" />
            <label htmlFor="high">Price high to low</label>
            <br />
          </div>
        </div>
      </div>

      <div>
        {visibleItems &&
          visibleItems.map((list) => {
            const objType = list.type;
            return cardType === objType ? (
              <RestaurantCard
                key={list.listid}
                id={list.listid}
                name={list.name}
                rating={list.rating}
                cost={list.cost}
                cuisine={list.cuisines}
                address={list.address}
                path={list.path}
                handleClick={restaurantDetails}
              />
            ) : (
              " "
            );
          })}
        <div className="pageno">
          <button className="no" onClick={PreviousPage}>
            1
          </button>
          <button className="no" onClick={nextPage}>
            2
          </button>
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
