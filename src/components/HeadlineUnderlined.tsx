import React from "react";
import UnderlineSvg from "../assets/tolocar_underline_1.svg";

const HeadlineUnderlined = ({ children, className }) => {
  return (
    <div className={`relative ${className || ""}`}>
      <h2 className="font-bold text-2xl leading-7">{children}</h2>
      <img className="-z-10 relative bottom-3 sm:-ml-4" src={UnderlineSvg} />
    </div>
  );
};

export default HeadlineUnderlined;
