import React from "react";
import ArrowIcon from "@assets/arrow.svg?react";

interface CommunityCardProps {
  title: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
  small?: boolean;
  actionCaption?: string;
  img: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  children,
  className,
  target,
  small,
  actionCaption,
  img,
}) => {
  const cardContent = (
    <>
      {title && (
        <h2
          className={`font-semibold font-aktiv ${
            small ? "text-lg md:text-2xl" : "text-2xl"
          } pr-10 mt-6`}
        >
          {title}
        </h2>
      )}
      <p className="mt-3 text-lg leading-6 mb-8 md:mb-8">{children}</p>
      {target && (
        <div
          className={`left-4.5 text-tolo-green ${
            small ? "top-8" : "bottom-8 flex items-center gap-4"
          }`}
        >
          {!small && actionCaption}
          <ArrowIcon className="w-5 h-5" />
        </div>
      )}
    </>
  );
  return (
    <div
      className={`flex flex-col items-center lg:basis-1/3 ${
        small ? "basis-[220px] lg:basis-0 h-auto lg:h-[360px] " : ""
      } text-tolo-black lg:px-0 relative ${className || ""}`}
    >
      <img src={img} className="w-full h-full aspect-[18/12] object-cover"/>
      {target ? <a href={target}>{cardContent}</a> : cardContent}
    </div>
  );
};

export default CommunityCard;
