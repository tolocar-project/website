import React from "react";
import ArrowIcon from "@assets/arrow.svg?react";

interface CardProps {
  title: string;
  className?: string;
  bg: number;
  target?: string;
  children: React.ReactNode;
  small?: boolean;
  actionCaption?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  className,
  children,
  bg,
  target,
  small,
  actionCaption
}) => {
  const bgMapping = [
    "bg-illustration-1 bg-contain bg-[position:bottom_-40px_right] lg:bg-[position:left_-100px_bottom_-40px] bg-no-repeat",
    "bg-illustration-2 bg-contain bg-[position:bottom_-70px_right] lg:bg-bottom bg-no-repeat",
    "bg-illustration-3 bg-right-bottom bg-contain bg-no-repeat",
    "bg-illustration-3-alpha bg-[position:right_-40px_bottom_-30px] bg-[length:65%] bg-contain bg-no-repeat",
    "bg-illustration-2-alpha bg-[position:bottom_-40px_left] bg-[length:70%] bg-repeat-x",
  ];
  const cardContent = (
    <>
      {title && (
        <h2
          className={`font-semibold font-aktiv ${
            small ? "text-lg md:text-2xl" : "text-4xl"
          } pr-10`}
        >
          {title}
        </h2>
      )}
      {target && (
        <div
          className={`absolute right-8 ${
            small ? "top-8" : "bottom-8 flex items-center gap-4"
          }`}
        >
          {!small && actionCaption}
          <ArrowIcon className="w-8 h-8" />
        </div>
      )}
      <p className="mt-3 text-lg leading-6 mb-24 md:mb-12">{children}</p>
    </>
  );
  return (
    <div
      className={`flex-1 ${
        small ? "basis-[220px] lg:basis-0 h-auto lg:h-[360px] " : ""
      }bg-tolo-green text-white p-5 lg:p-8 relative z-20 ${bgMapping[bg - 1]} ${
        className || ""
      }`}
    >
      {target ? <a href={target}>{cardContent}</a> : cardContent}
    </div>
  );
};

export default Card;
