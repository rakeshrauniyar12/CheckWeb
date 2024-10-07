import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContainerHeader">
        <div className="loginContainerHeaderTop">
          <div className="rectangle"></div>
          <p>My account</p>
        </div>
      </div>
      <div className="registerLoginFormContainer">
        <div>
          <h1>Login</h1>
          <div className="loginFormContainer">
            <label>
              Username or email address <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" />
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input type="password" />
            <div className="rememberMeDiv">
              <input className="checkboxRememberme" type="checkbox" />
              <p>Remember me</p>
            </div>
            <button>Log in</button>
            <p className="lostYouPassword">Lost your password?</p>
          </div>
        </div>
        <div>
          <h1>Register</h1>
          <div className="registerFormContainer">
            <label>
              Email address <span style={{ color: "red" }}>*</span>
            </label>
            <input />
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input />
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span style={{ color: "red" }}>privacy policy</span>.
            </p>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
