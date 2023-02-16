const Restaurant = ({ path, type, handleClick }) => {
  return (
    <div className="restaurantInfo" onClick={handleClick}>
      <div>
        <img src={path} height="200px" width="200px" alt="restaurant" />
      </div>
      <div className="info">
        <h2>{type}</h2>
        <p>Start your day with exclusive {type} options</p>
      </div>
    </div>
  );
};
export default Restaurant;
