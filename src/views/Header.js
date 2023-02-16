import Image from "./EImage.js";
import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Header = ({ HeaderColor }) => {
  const color = HeaderColor ? "HeaderColor" : "transparent";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (isAuthenticated === "true") {
      setIsAuth(true);
    }
  }, [users]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let userDetails = JSON.parse(localStorage.getItem("user"));
    setUsers(userDetails);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ApiUrl = "http://localhost:5000/login";
    const res = await axios.post(ApiUrl, { username: email, password });
    if (res.status === 200) {
      const users = res.data;
      localStorage.setItem("user", JSON.stringify(users));
      localStorage.setItem("auth", true);
      // return navigate("/");
    }
  };
  const handleSubmits = async (e) => {
    const ApiUrl = "http://localhost:5000/register";
    e.preventDefault();
    if (passwords === confirmPassword) {
      const res = await axios.post(ApiUrl, {
        name: name,
        email: emails,
        password: passwords,
      });
      console.log(res);

      window.$("#submit").on("click", function () {
        window.$("#exampleModal1").modal("hide");
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      window.$("#submit").on("click", function () {
        window.$("#exampleModal1").modal("hide");
      });
    }, 3000);
  }, ["#submit"]);
  const logout = async () => {
    const ApiUrl = "http://localhost:5000/logout";
    const res = await axios.post(ApiUrl);
    if (res.status === 200) {
      localStorage.setItem("auth", false);
      localStorage.clear();
    }
  };
  return (
    <div className={color}>
      <div className="header">
        <div>
          <Image e="es" image="image" />
        </div>

        <div className="btnClass">
          <button
            className="btn btn1"
            href="#exampleModal"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            aria-hidden="true"
          >
            Login
          </button>
          <button
            className="btn btn2"
            href="#exampleModal1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            aria-hidden="true"
          >
            Create an Account
          </button>
          {isAuth ? (
            <div>
              <p>{users.name}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* login modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ms-3" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                  <p>Email</p>
                  <input
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    size="25"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>Password</p>
                  <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    size="25"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button data-bs-dismiss="modal" className="form-btn">
                    Submit
                  </button>
                </form>
                <button>
                  <i className="fa fa-envelope pe-2 text-danger"></i>Continue
                  with Gmail
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <p className="m-auto">
                Don't you have account?{" "}
                <a
                  className="text-danger text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  aria-hidden="true"
                  href="#"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SignUp modal */}
      <div
        className="modal  fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ms-3" id="exampleModalLabel1">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="container">
                <form className="form" onSubmit={handleSubmits}>
                  <p>Name</p>
                  <input
                    type="name"
                    value={name}
                    placeholder="Enter Name"
                    size="25"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Email</p>
                  <input
                    type="email"
                    value={emails}
                    placeholder="Enter Email"
                    size="25"
                    onChange={(e) => setEmails(e.target.value)}
                  />
                  <p>Password</p>
                  <input
                    type="password"
                    value={passwords}
                    placeholder="Enter Password"
                    size="25"
                    onChange={(e) => setPasswords(e.target.value)}
                  />
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Enter Confirm Password"
                    size="25"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    id="submit"
                    className="form-btn"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
                <button className="button ps-5  pe-5 pt-1 pb-1 mb-3 color2 border rounded-1">
                  <i className="fa fa-envelope pe-2 text-danger"></i>Continue
                  with Gmail
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <p className="m-auto">
                Already have an account?{" "}
                <a
                  className="text-danger text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  aria-hidden="true"
                  href="#"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
