import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "filled",
  className = "",
  to,
  type = "button",
  ...props
}) => {
  const base = "btn px-4 py-2";

  const stylesMap = {
    filled: "btn-green",
    outline: "btn-outline-green",
    ghost: "btn-ghost",
    danger: "btn-danger-custom",
  };

  const styles = stylesMap[variant] || "btn-green";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;