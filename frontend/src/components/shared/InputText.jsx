import React from "react";

function InputText({ placeholder, className = "", type = "text", ...props }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={
          `w-full px-4 py-4 mt-6 border bg-white rounded-lg ${className}`
        }
        {...props}
      />
    </div>
  );
}

export default InputText;