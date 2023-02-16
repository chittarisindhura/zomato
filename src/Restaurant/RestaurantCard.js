const RestaurantCard = ({
  id,
  path,
  name,
  address,
  cost,
  cuisine,
  rating,
  handleClick,
}) => {
  return (
    <div className="card-wrapper" onClick={() => handleClick(id)}>
      <div className="card">
        <div className="restaurantDetails">
          <div>
            <img src={path} height="150px" width="150px" alt="card" />
          </div>
          <div className="address">
            <h2>{name}</h2>
            <p>Rating: {rating}</p>
            <p className="light">{address}</p>
          </div>
        </div>

        <hr />
        <div>
          <div className="bakery light">
            <p>CUISINES:</p>
            <p>COST FOR TWO:</p>
          </div>
          <div className="bakery">
            <p>{cuisine}</p>
            <p>
              <span>&#x20B9;</span>
              {cost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
