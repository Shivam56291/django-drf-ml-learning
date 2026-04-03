import { useState } from "react";
import Button from "./Button";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center position-relative">

      {/* Aura Effect */}
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

        <form>
          <input
            type="email"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Email Address"
          />

          <input
            type="password"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Password"
          />

          <div className="text-end mb-3">
            <a href="#" className="text-secondary small">
              Forgot Password?
            </a>
          </div>

          <div className="d-grid">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;