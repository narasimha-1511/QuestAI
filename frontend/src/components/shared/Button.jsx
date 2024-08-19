import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-5 mt-6 text-white bg-purple-6000 rounded-lg
            hover:bg-purple-700 bg-purple-500
            ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
