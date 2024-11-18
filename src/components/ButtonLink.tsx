import React from "react";
import ArrowIcon from "@assets/arrow.svg?react";
import GitHubIcon from "@assets/GitHub.svg?react";

interface ButtonLinkProps {
  className?: string;
  target?: string;
  caption?: string;
  variant?: "dark" | "light" | "search" | "github" | "green";
  newTab?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  target,
  caption,
  variant = "light",
  newTab = false,
}) => {
  const classes = {
    light:
      "bg-white z-10 text-tolo-green flex gap-2 justify-center items-center px-3 py-2 rounded-full font-semibold text-lg lg:mt-4 h-10 w-44",
    dark: "bg-neutral-700 z-10 text-white flex gap-2.5 justify-center items-center px-6 rounded-full font-semibold lg:text-lg lg:leading-6 text-base leading-[22px] h-10 w-fit",
    green:
      "bg-tolo-green z-10 text-white flex gap-2.5 justify-center items-center px-6 rounded-full font-semibold lg:text-lg lg:leading-6 text-base leading-[22px] h-10 w-fit",
    search:
      "bg-black z-10 inline-flex items-center bg-opacity-20 opacity-90 rounded-full py-4 px-5 mt-8",
    github:
      "bg-white z-10 text-tolo-green flex gap-2 justify-center items-center px-3 py-2 rounded-full font-semibold text-lg lg:mt-4 h-10 w-44",
  };
  return (
    <a
      href={target}
      {...(newTab ? { target: "_blank" } : {})}
      className={`${classes[variant]} ${className || ""}`}
    >
      {variant === "github" && (
        <GitHubIcon className="h-5 w-5 text-tolo-green" />
      )}
      {caption}
      {variant === "search" && (
        <ArrowIcon className="h-5 w-5 ml-8 text-white" />
      )}
      {variant === "dark" && <ArrowIcon className="h-5 w-5 text-white" />}
    </a>
  );
};

export default ButtonLink;
