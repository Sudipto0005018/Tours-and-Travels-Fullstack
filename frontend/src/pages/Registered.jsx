import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    } else if (name == "name") {
      setName(value);
    }
  };

  const submithandler = async (event) => {
    event.preventDefault();

    if (name && email && password) {
      let useregister = await axios.post(
        "http://localhost:7000/user/useregister",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log("admin login data : ", useregister.data);

      if (useregister?.data) {
        navigate("/login");
      }
    } else {
      toast.error("Login failed. Please fill all your info.");
    }
  };

  function loginhandler() {
    navigate("/login");
  }

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-center align-items-center vw-100"
      style={{ marginTop: "60px" }}
    >
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/84/88/88/1000_F_384888812_7skIpVpzBHm2VoAdxftidfl0omzIydiv.jpg"
          className="w-100"
          alt="Registration"
        />
      </div>

      <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <div className="h1" style={{ fontFamily: "serif" }}>
          Sign Up
        </div>

        <form
          className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3"
          onSubmit={submithandler}
        >
          <div className="d-flex flex-column">
            <label
              htmlFor="firstnam"
              className="fontstyle"
              style={{ fontFamily: "serif" }}
            >
              Name<sup className="text-black-200">*</sup>
            </label>
            <input
              name="name"
              id="firstnam"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
              required
              className="password-input"
            />
          </div>

          <div className="d-flex flex-column">
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

          <button className="register-login-button" id="btn" type="submit">
            Sign up
          </button>
        </form>

        {/* <p className="fontstyle"> */}
        <p>
          Already have an account?{" "}
          <span className="text-success cursor" onClick={loginhandler}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
