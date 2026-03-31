import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light-dark text-light py-3 mt-auto position-relative overflow-hidden">
      
      {/* Animated Stock Line */}
      <div className="stock-line"></div>

      <div className="container text-center position-relative">
        
        <p className="mb-1 fw-semibold">
          Stock Prediction Portal
        </p>

        <p className="mb-0 small text-secondary">
          © {new Date().getFullYear()} All rights reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;