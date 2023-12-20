import React from "react";
import TolocarLogoSvg from "@assets/tolocar_logo.svg?react";

interface Props {
  className?: string;
  target?: string;
}

const HeaderLogo: React.FC<Props> = ({ target = "/", className }: Props) => {
  const Image = <TolocarLogoSvg className={`h-8 sm:h-16 mt-8 sm:mt-16`} />;
  
  return (
    <div className={`container-width flex ${className || ""}`}>
      {target ? <a href={target}>{Image}</a> : Image}
    </div>
  );
};

export default HeaderLogo;
