import React from "react";
import Underline1Svg from "../assets/tolocar_underline_1.svg";
import Underline2Svg from "../assets/tolocar_underline_2.svg";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: number;
  large?: boolean;
}

const underlineSvgMapping = [Underline1Svg, Underline2Svg];

const HeadlineUnderlined: React.FC<Props> = ({
  children,
  className,
  variant = 0,
  large,
}: Props) => {
  return (
    <div className={`${className || ""}`}>
      <h2
        className={`text-black relative font-bold ${
          large ? "text-5xl" : "text-2xl"
        } leading-7`}
      >
        <img
          className="-z-10 absolute -bottom-3"
          src={underlineSvgMapping[variant]}
        />
        {children}
      </h2>
    </div>
  );
};

export default HeadlineUnderlined;
