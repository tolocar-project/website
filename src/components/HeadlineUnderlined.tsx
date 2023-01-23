import React from "react";
import Underline1Svg from "@assets/tolocar_underline_1.svg";
import Underline2Svg from "@assets/tolocar_underline_2.svg";
import Underline3Svg from "@assets/tolocar_underline_3.svg";
import Underline4Svg from "@assets/tolocar_underline_4.svg";
import Underline5Svg from "@assets/tolocar_underline_5.svg";
import Underline6Svg from "@assets/tolocar_underline_6.svg";
import Underline7Svg from "@assets/tolocar_underline_7.svg";
import Underline8Svg from "@assets/tolocar_underline_8.svg";
import CircularUnderlineSvg from "@assets/tolocar_circular_underline.svg";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: number;
  large?: boolean;
  light?: boolean;
  id?: string;
}

const underlineSvgAndClassesMapping = [
  { src: Underline1Svg, classes: "-bottom-3" },
  { src: Underline2Svg, classes: "-bottom-3" },
  { src: Underline3Svg, classes: "bottom-0" },
  { src: Underline4Svg, classes: "-bottom-4" },
  { src: Underline5Svg, classes: "-bottom-1" },
  { src: Underline6Svg, classes: "bottom-0" },
  { src: Underline7Svg, classes: "bottom-0" },
  { src: Underline8Svg, classes: "-bottom-2" },
  {
    src: CircularUnderlineSvg,
    classes:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-125 scale-y-105 lg:scale-100",
  },
];

const HeadlineUnderlined: React.FC<Props> = ({
  children,
  className,
  variant = 1,
  large,
  light,
  id,
}: Props) => {
  return (
    <div className={`${className || ""}`}>
      <h2
        id={id}
        className={`${
          light ? "text-white" : "text-tolo-black"
        } relative z-10 font-semibold font-aktiv ${
          large ? "text-5xl leading-[3.25rem]" : "sm:text-2xl text-lg"
        }`}
      >
        <img
          className={`-z-10 absolute ${
            underlineSvgAndClassesMapping[variant - 1].classes
          }`}
          src={underlineSvgAndClassesMapping[variant - 1].src}
        />
        {children}
      </h2>
    </div>
  );
};

export default HeadlineUnderlined;
