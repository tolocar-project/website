import React from "react";
import { ButtonLink } from "@components";

interface Props {
  className?: string;
  title?: string;
  text?: string;
  target?: string;
  caption?: string;
  linkButtonVariant?: "light" | "dark" | "search";
  bg?: number;
  newTab?: boolean;
  buttonClasses?: string;
}

const WideCard: React.FC<Props> = ({
  className,
  text,
  title,
  target,
  caption,
  linkButtonVariant,
  bg = 1,
  newTab,
  buttonClasses,
}) => {
  const bgMapping = [
    "bg-illustration-4-wide mask-illustration-vertical md:mask-illustration-horizontal bg-no-repeat bg-[position:right_-80px_top_-40px]",
    "bg-community-messages bg-no-repeat md:bg-[position:right_-60px_top_0px] bg-[position:left_-25px_bottom_-50px] scale-110 md:scale-100",
    "bg-illustration-4-wide bg-[length:80%] bg-[position:left_-25px_top_-50px]",
  ];

  return (
    <div
      className={`h-full ${
        className || ""
      }`}
    >
      <div className="bg-tolo-green relative overflow-hidden z-10">
        <div className="p-5 lg:p-10 text-white absolute items-start md:w-[65%] h-full flex flex-col justify-start gap-4 lg:gap-6 z-20">
          {title && (
            <h1 className="font-semibold text-2xl leading-7 md:text-[40px] md:leading-[48px] font-aktiv">
              {title}
            </h1>
          )}
          {text && (
            <p className="md:w-[75%] font-medium text-lg md:text-xl">{text}</p>
          )}
          {target && (
            <ButtonLink
              target={target}
              className={buttonClasses}
              caption={caption}
              variant={linkButtonVariant}
              newTab={newTab}
            />
          )}
        </div>
        <div
          className={`bg-fill
          ${bgMapping[bg - 1]} h-[364px] mt-24 md:mt-0 z-0`}
        />
      </div>
    </div>
  );
};

export default WideCard;
