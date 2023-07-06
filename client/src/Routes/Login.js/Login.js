import React, { useState, useEffect } from "react";
import "./login.style.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata((prevformdata) => ({
      ...prevformdata,
      [name]: value,
    }));
    // console.log(formdata);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = formdata;
    const API = "https://blog-server-oxr9.onrender.com/user/login";

    if (email && password) {
      axios
        .post(API, formdata)
        .then((res) => {
          //     // alert("User registered");
          setStore(res.data);
          // console.log(res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="LoginParent">
      <button onClick={handleBackBtn} className="backButtn">
        Back
      </button>
      <div className="loginText">Login here</div>
      <div className="loginContainer">
        <div className="LoginCard">
          <div className="logComCon">
            <img
              className="lockImg"
              src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
              alt="Locked"
            />
            <div className="Logcont1">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="lLoginInp"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="Logcont2">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                className="lLoginInp"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <span className="loginErr">{error}</span>}
            <button className="Sbutn" onClick={handleButton}>
              Login
            </button>
            <div className="signupRoute">
              {" "}
              <NavLink to="/signup"> Don't have an acoount? signup</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
