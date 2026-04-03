import React from "react";

import Button from "./Button";

const Main = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center position-relative">
      {/* Animated Aura */}
      <div className="main-aura"></div>

      <div
        className="main-card text-center bg-light-dark p-4 rounded-4 shadow-sm w-100 mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <h1 className="text-light fw-bold mb-3">Stock Prediction Portal</h1>

        <p className="text-secondary mb-4">
          This stock prediction application utilizes machine learning
          techniques, specifically LSTM models, integrated with the Django
          framework. It forecasts future stock prices by analyzing 100-day and
          200-day moving averages — key indicators widely used in stock analysis
          for smarter investment decisions.
        </p>

        <Button to="/register">Get Started</Button>
      </div>
    </div>
  );
};

export default Main;
