import { useLocation } from "react-router-dom";

import RestaurantPage from "./RestaurantPage";

const RestaurantDetails = ({ id }) => {
  const location = useLocation();
  const data = location.state.tempData;
  const restaurantId = location.state.id;

  const info = data.filter((obj) => {
    if (obj.listid === restaurantId) {
      return obj;
    }
    return null;
  });

  return (
    <div>
      {info &&
        info.map((obj) => {
          return (
            <RestaurantPage
              key={obj.listid}
              id={obj.listid}
              name={obj.name}
              cost={obj.cost}
              cuisine={obj.cuisines}
              address={obj.address}
              path={obj.path}
              phone={obj.phone}
            />
          );
        })}
    </div>
  );
};
export default RestaurantDetails;
