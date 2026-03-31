import React from "react";

import "./assets/css/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
