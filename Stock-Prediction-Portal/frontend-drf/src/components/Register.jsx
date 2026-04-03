import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register/",
        userData,
      );
      console.log("Data :", response);
      console.log(response.data);
      setErrors({});
      setUsername("");
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center position-relative">
      {/* Same Aura Effect */}
      <div className="main-aura"></div>

      <div
        className="main-card bg-light-dark p-5 rounded-4 shadow-sm w-100"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-light text-center fw-bold mb-2">
          Create an Account
        </h3>

        <p className="text-secondary text-center mb-4">
          Join our community and start predicting stock prices.
        </p>

        <form onSubmit={handleRegistration}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setSuccess(false);
                setErrors((prev) => ({ ...prev, username: null }));
              }}
            />
            <small>
              {errors.username && (
                <div className="mt-1 text-danger small fw-medium">
                  {Array.isArray(errors.username)
                    ? errors.username[0]
                    : errors.username.message || errors.username}
                </div>
              )}
            </small>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light border-0"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSuccess(false);
                setErrors((prev) => ({ ...prev, email: null }));
              }}
            />
            <small>
              {errors.email && (
                <div className="mt-1 text-danger small fw-medium">
                  {Array.isArray(errors.email)
                    ? errors.email[0]
                    : errors.email.message || errors.email}
                </div>
              )}
            </small>
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control bg-dark text-light border-0"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setSuccess(false);
                setErrors((prev) => ({ ...prev, password: null }));
              }}
            />
            <small>
              {errors.password && (
                <div className="mt-1 text-danger small fw-medium">
                  {Array.isArray(errors.password)
                    ? errors.password[0]
                    : errors.password.message || errors.password}
                </div>
              )}
            </small>
          </div>

          <div className="d-grid">
            {success && (
              <div className="alert alert-success text-center">
                Registration successful! You can now login.
              </div>
            )}
            <Button type="submit" disabled={loading}>
              {loading ? (
                <span className="text-light">
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                  Registering...
                </span>
              ) : (
                "Register"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
