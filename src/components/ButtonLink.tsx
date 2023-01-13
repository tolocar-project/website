import React from "react";
import ArrowSvg from "@components/ArrowSvg";

interface Props {
  className?: string;
  target?: string;
  caption?: string;
  variant?: "dark" | "light" | "search";
}

const ButtonLink: React.FC<Props> = ({
  className,
  target,
  caption,
  variant = "light",
}: Props) => {
  const classes = {
    light: "bg-white z-10 text-tolo-green flex gap-2 justify-center items-center px-3 rounded-full font-semibold text-lg lg:mt-4 h-10 w-44",
    dark: "bg-black z-10 text-white flex gap-2 justify-center items-center px-3 rounded-full font-semibold text-lg lg:mt-4 h-10 w-44",
    search: "bg-black z-10 inline-flex items-center bg-opacity-20 opacity-90 rounded-full py-4 px-5 mt-8"
  }
  return (
    <a href={target} className={`${classes[variant]} ${className || ""}`}>
      {caption}
      {variant === "search" && <ArrowSvg className="h-5 w-5 ml-8 text-white" />}
    </a>
  );
};

export default ButtonLink;
