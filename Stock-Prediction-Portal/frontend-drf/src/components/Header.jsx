import {React} from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <Link to="/" className="navbar-brand logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>

      <div className="pt-4">
        <Button variant="outline" to="/login">
          Login
        </Button>
        &nbsp;&nbsp;
        <Button variant="outline" to="/register">
          Register
        </Button>
      </div>
    </nav>
  );
};

export default Header;
