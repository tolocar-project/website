import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";

interface Props {
  className?: string;
  target?: string;
}

const HeaderLogo: React.FC<Props> = ({ target = "/", className }: Props) => {
  const Image = (
    <img
      className={`h-8 sm:h-16`}
      src={TolocarLogoSvg}
    />
  );
  return (
    <div className={`w-full flex ${className || ""}`}>
      {target ? <a href={target}>{Image}</a> : Image}
    </div>
  );
};

export default HeaderLogo;
