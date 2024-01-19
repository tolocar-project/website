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
  centerImage?: string;
  centerImageClasses?: string;
  children?: React.ReactNode;
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
  centerImage,
  children,
  centerImageClasses
}) => {
  const bgMapping = [
    "bg-illustration-4-wide mask-illustration-vertical md:mask-illustration-horizontal bg-no-repeat bg-[position:right_-80px_top_-40px] mt-24 md:mt-0",
    "bg-community-messages bg-no-repeat md:bg-[position:right_-60px_top_0px] bg-[position:left_-25px_bottom_-50px] scale-110 md:scale-100 mt-24 md:mt-0",
    "bg-white/50 mask-illustration-4 mt-0",
    "",
  ];

  return (
    <div
      className={`container-width lg:container-width-hero h-full ${
        className || ""
      }`}
    >
      <div className="bg-tolo-green relative overflow-hidden z-10">
        {(centerImage || title || text) && (
          <div
            className={`text-white absolute h-full flex flex-col gap-4 lg:gap-6 z-20 ${
              centerImage
                ? "items-center justify-center w-full"
                : "items-start justify-start md:w-[65%] p-5 lg:p-10"
            }`}
          >
            {centerImage && <img src={centerImage} className={centerImageClasses} />}
            {title && (
              <h1 className="font-semibold text-2xl leading-7 md:text-[40px] md:leading-[48px] font-aktiv">
                {title}
              </h1>
            )}
            {text && (
              <p className="md:w-[75%] font-medium text-lg md:text-xl">
                {text}
              </p>
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
        )}
        {children}
        {bg !== 4 && (
          <div
            className={`bg-fill
          ${bgMapping[bg - 1]} h-[364px] z-0`}
          />
        )}
      </div>
    </div>
  );
};

export default WideCard;
