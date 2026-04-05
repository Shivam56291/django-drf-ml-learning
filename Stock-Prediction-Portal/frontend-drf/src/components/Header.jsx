import { React, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";
import logo from "../assets/img/logo.png";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <Link to="/" className="navbar-brand logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>

      <div className="pt-4 d-flex align-items-center gap-2">
        {isLoggedIn ? (
          <>
            <Button variant="ghost" to="/dashboard">
              Dashboard
            </Button>

            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" to="/login">
              Login
            </Button>

            <Button variant="filled" to="/register">
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
