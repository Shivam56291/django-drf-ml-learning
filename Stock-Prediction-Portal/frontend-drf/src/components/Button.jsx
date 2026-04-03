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
  const styles =
    variant === "outline" ? "btn-outline-green" : "btn-green";

  // If "to" is provided → use Link
  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise → use button (for forms)
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