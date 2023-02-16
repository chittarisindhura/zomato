import Header from "../views/Header";
import { useState, useEffect } from "react";
// import food from '
import axios from "axios";
const RestaurantPage = ({
  id,
  name,
  path,
  cuisine,
  cost,
  phone,
  address,

  name1,
}) => {
  const [foodItems, setfoodItems] = useState("");
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    const ApiUrl = "http://localhost:5000/getitems";
    const res = await axios.get(ApiUrl);
    console.log("res", res);
    setfoodItems(res.data);
  };
  const handleAdd = (food) => {
    let add = food.cost;
    setCosts([...costs, add]);
  };
  const total = costs.reduce((prev, next) => {
    let sum;
    sum = prev + next;
    console.log(sum);
    return sum;
  }, 0);
  return (
    <div>
      <Header HeaderColor />
      <div>
        <img
          className="pageImg"
          src={path}
          alt="restaurantImage"
          width="85%"
          height="600px"
        />
      </div>
      <div className="restaurantPage">
        <h1 className="name"> {name}</h1>
        <button
          className="placeorder"
          href="#order"
          data-bs-toggle="modal"
          data-bs-target="#order"
          aria-hidden="true"
        >
          Place the order
        </button>
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Overview
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div>
                <p className="about">About this Place</p>
                <div className="space">
                  <p className="bold">Cuisine</p>
                  <p>{cuisine}</p>
                </div>
              </div>
              <div className="space">
                <p className="bold">Average Cost</p>
                <p>{cost} for two people(approx.)</p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="space">
                <p className="bold">Phone Number</p>
                <p className=" phone">{phone}</p>
              </div>
              <div className="space">
                <p className="bold">{name}</p>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div>
        {foodItems &&
          foodItems.map((food) => {
            const food1 = food.items.food1;
            const food2 = food.items.food2;
            const food3 = food.items.food3;
            return name === food.name ? (
              <div
                className="modal modal-lg fade"
                id="order"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title ms-3 title"
                        id="exampleModalLabel"
                      >
                        {food.name}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        {food1 ? (
                          <div className="food1">
                            <div className="details">
                              <p className="bold">{food1.itemName}</p>
                              <p className="bold">Rs.{food1.cost}</p>
                              <p className="bold1">{food1.description}</p>
                            </div>
                            <div className="foodImg">
                              <img
                                src={food1.image}
                                height="150px"
                                width="150px"
                                alt="food"
                              />
                              <button
                                className="add"
                                onClick={() => handleAdd(food1)}
                              >
                                {" "}
                                Add
                              </button>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {food2 ? <hr /> : ""}
                        {food2 ? (
                          <div className="food2">
                            <div className="details">
                              <p className="bold">{food2.itemName}</p>
                              <p className="bold">Rs.{food2.cost}</p>
                              <p className="bold1">{food2.description}</p>
                            </div>
                            <div class="foodImg">
                              <img
                                src={food2.image}
                                height="150px"
                                width="150px"
                                alt="food"
                              />
                              <button
                                className="add"
                                onClick={() => handleAdd(food2)}
                              >
                                {" "}
                                Add
                              </button>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <hr />
                        {food3 ? (
                          <div className="food3">
                            <div className="details">
                              <p className="bold">{food3.itemName}</p>
                              <p className="bold">Rs.{food3.cost}</p>
                              <p className="bold1">{food3.description}</p>
                            </div>
                            <div class="foodImg">
                              <img
                                src={food3.image}
                                height="150px"
                                width="150px"
                                alt="food"
                              />
                              <button
                                className="add"
                                onClick={() => handleAdd(food3)}
                              >
                                {" "}
                                Add
                              </button>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {food3 && <hr />}
                      </div>
                    </div>
                    <div className="modal-footer">
                      <p className="m-auto">
                        {costs && costs.length > 0 ? (
                          <div className="total">
                            <div className="subTotal">
                              <p>Subtotal</p>
                              Rs.{total}
                            </div>

                            <div className="payDiv">
                              <button className="pay">Pay Now</button>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </div>
  );
};
export default RestaurantPage;
