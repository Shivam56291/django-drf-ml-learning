import React from "react";

import Button from "./Button";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <a href="#" className="navbar-brand logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img" />
      </a>

      <div className="pt-4">
        <Button variant="outline" href="#">
          Login
        </Button>
        &nbsp;&nbsp;
        <Button variant="outline" href="#">
          Register
        </Button>
      </div>
    </nav>
  );
};

export default Header;
