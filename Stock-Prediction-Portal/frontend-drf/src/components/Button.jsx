import React from "react";

const Button = ({ children, variant = "filled", className = "", ...props }) => {
  const base = "btn px-4 py-2";

  const styles =
    variant === "outline" ? "btn-outline-green" : "btn-green";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Button;