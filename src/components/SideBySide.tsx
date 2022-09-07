import React from "react";

const SideBySide = ({ children, className }) => {
  return (
    <div
      className={`container-width flex flex-col sm:flex-row gap-6 sm:gap-16 sm:pr-16 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideBySide;
