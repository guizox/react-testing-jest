import React from "react";
import "./index.css";

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="button-style" data-testid="button">
      HI {label}
    </button>
  );
};

export default Button;
