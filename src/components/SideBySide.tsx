import React from "react";

const SideBySide = ({ children, className }) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex-row gap-16 sm:pr-16 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideBySide;
