import "./App.css";
import React from "react";
import Restaurants from "./Restaurant/Restaurants";
import MainPage from "./views/MainPage";
import { Routes, Route } from "react-router-dom";
import RestaurantDetails from "./Restaurant/RestaurantDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/restaurant" element={<Restaurants />} />
      <Route path="/restaurantdetails" element={<RestaurantDetails />} />
    </Routes>
  );
};

export default App;
