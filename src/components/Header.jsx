import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");

  const handleLogin = () => {
    setLoginBtnText(loginBtnText === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="app-logo">
        <img src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {loginBtnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
