import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { admintokenadd } from "../redux/reduxslices/authslice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      let adminlogin = await axios.post(
        "http://localhost:7000/admin/adminlogin",
        {
          email: email,
          password: password,
        }
      );
      console.log("admin login data : ", adminlogin.data);

      if (adminlogin?.data?.token) {
        localStorage.removeItem("usertoken");
        localStorage.setItem("token", adminlogin.data.token);

        dispatch(admintokenadd({ token: adminlogin.data.token }));
        navigate("/admin");
      } else {
        toast.error("Login failed. Please check your info.");
      }
    } else {
      toast.error("Login failed. Please fill all your info.");
    }
  };

  return (
    <div
      className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3"
      style={{ marginBottom: "0px", marginTop: "40px" }}
    >
      <div className="col-12 col-md-6">
        <img
          src="https://cdn.dribbble.com/users/1946759/screenshots/4596801/media/14aa3cda26d947ab3c73298d9c335c16.png?resize=800x600&vertical=center"
          className="w-100"
        />
      </div>

      <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <div className="h1" style={{ fontFamily: "serif" }}>
          Admin Sign In
        </div>
        <b>Enter Your Details</b>

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
      </div>
    </div>
  );
};
