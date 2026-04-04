import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import { AuthContext } from "../AuthProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/token/",
        userData
      );

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      setSuccess(true);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid credentials");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center position-relative">
      <div className="main-aura"></div>

      <div
        className="main-card bg-light-dark p-5 rounded-4 shadow-sm w-100"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-light text-center fw-bold mb-2">
          Welcome Back
        </h3>

        <p className="text-secondary text-center mb-4">
          Login to continue your stock predictions.
        </p>

        <form onSubmit={handleLogin}>
          {error && !success && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success text-center">
              Redirecting to homepage...
            </div>
          )}

          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-dark text-light border-0"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          {/* <div className="text-end mb-3">
            <a href="#" className="text-secondary small">
              Forgot Password?
            </a>
          </div> */}

          <div className="d-grid mt-4">
            <Button type="submit" disabled={loading || success}>
              {loading ? (
                <span className="text-light">
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                  Logging in...
                </span>
              ) : success ? (
                "Redirecting..."
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;