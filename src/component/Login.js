import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import image from "./login.jpg";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    console.log(userName);
    console.log(password);
    if (userName === "pkv966@gmail.com" && password === "Avian") {
      window.location.href = "/home";
    } else {
      alert("Check Your Credential");
    }
  };

  return (
    <div id="login">
      <div className="login__image">
        <img src={image} alt="" />
      </div>
      <div className="login__form">
        <div className="form__title">
          <span>Welcome back</span>
        </div>
        <div className="form__heading">
          <span>Login to Your Account</span>
        </div>
        <div className="form__main">
          <form>
            <span>Email</span>

            <input
              type="text"
              onChange={changeUserName}
              value={userName}
              placeholder="johnsnow@gmail.com"
            />
            <span>Password</span>

            <input
              onChange={changePassword}
              value={password}
              type="password"
              placeholder="********"
            />
          </form>
        </div>
        <div className="form__recover">
          <div className="recover__first">
            <label htmlFor="">
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <div className="recover__second">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="button__login">
          <button onClick={login} type="submit">
            Login Now
          </button>
        </div>
        <div className="button__google">
          <button>
            <span>
              <FcGoogle />
            </span>
            or sign-in with Google
          </button>
        </div>
        <div className="form__footer">
          <span>
            Don't have an account? <a href="#">Join Free Today</a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
