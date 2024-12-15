import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { usertokenadd } from "../redux/reduxslices/authslice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const touridSelector = useSelector((state) => state.tourid.id);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };

  const submithandler = async (event) => {
    event.preventDefault();

    if (email && password) {
      let userlogin = await axios.post("http://localhost:7000/user/userlogin", {
        email: email,
        password: password,
      });
      console.log("admin login data : ", userlogin.data);

      if (userlogin?.data?.token) {
        localStorage.removeItem("token");
        localStorage.setItem("usertoken", userlogin.data.token);

        dispatch(usertokenadd({ token: userlogin.data.token }));

        if (touridSelector) {
          navigate(`/tourdetails/${touridSelector}`);
        } else {
          navigate("/tours");
        }
      } else {
        toast.error("Login failed. Please check your info.");
      }
    } else {
      toast.error("Login failed. Please fill your info.");
    }
  };

  function registerhandler() {
    navigate("/register");
  }

  return (
    <div
      className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3"
      style={{ marginTop: "50px" }}
    >
      <div className="col-12 col-md-6">
        <img
          src="https://img.freepik.com/premium-vector/login-computer_118813-10280.jpg?w=1060"
          className="w-100"
        />
      </div>

      <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <div className="h1" style={{ fontFamily: "serif" }}>
          Sign In
        </div>

        <form className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3">
          <div className="d-flex flex-column ">
            <label
              htmlFor="mail"
              className="fontstyle"
              style={{ fontFamily: "serif" }}
            >
              Email<sup className="text-black-200">*</sup>
            </label>
            <input
              name="email"
              id="mail"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
              className="password-input"
            />
          </div>

          <div className="d-flex flex-column position-relative">
            <label
              htmlFor="password"
              className="fontstyle"
              style={{ fontFamily: "serif" }}
            >
              Password<sup className="text-black-200">*</sup>
            </label>
            <div className="position-relative">
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
                required
                className="password-input"
              />
              <span
                className="password-icon position-absolute"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>

          <button
            className="register-login-button"
            id="btn"
            type="button"
            onClick={submithandler}
          >
            Sign in
          </button>
        </form>

        {/* <p className="fontstyle"> */}
        <p>
          Don't have an account?{" "}
          <span className="text-success cursor" onClick={registerhandler}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

