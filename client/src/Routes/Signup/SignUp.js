import React, { useState, useEffect } from "react";
import "./signup.style.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [err, setErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);

  const handleButton = async (e) => {
    e.preventDefault();
    // console.log(formdata);
    // setStore({...formdata})
    const { name, phonenumber, email, password } = formdata;
    const API = "https://blog-server-oxr9.onrender.com/user/signup";
    setFormData({
      name: "",
      phonenumber: "",
      email: "",
      password: "",
    });
    if (name && phonenumber && email && password) {
      axios
        .post(API, formdata)
        .then((res) => {
          console.log(res.data.token);
          localStorage.setItem("token",res.data.token)
     
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      setErr("One or more required fields is missing or invalid");
    }
  };

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };
  return (
    // <div>

    <div className="SignupParent">
      <button onClick={() => navigate("/")} className="backButtn">
        Back
      </button>
      <div className="signupText">Signup Here</div>
      <div className="Signupcontainer">
        <form className="SignupForm">
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <input
            className="sInp "
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />

          <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={formdata.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={formdata.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          {emailErr && <span className="signupEmailErr">{err}</span>}
          <input
            className="sInp"
            type="password"
            name="password"
            value={formdata.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {err && <span className="signupErrText">{err}</span>}

          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/login">Already have an account? login</NavLink>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Signup;
