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
}

const WideCard: React.FC<Props> = ({
  className,
  text,
  title,
  target,
  caption,
  linkButtonVariant,
  bg,
  newTab
}) => {
  const bgMapping = [
    "bg-illustration-4-wide mask-illustration-vertical md:mask-illustration-horizontal bg-no-repeat bg-[position:right_-80px_top_-40px]",
    "bg-community-messages bg-no-repeat md:bg-[position:right_-20px_top_50px] bg-[position:left_-25px_bottom_-50px] scale-110 md:scale-125 mt-36",
  ];

  return (
    <div className={"container-width lg:container-width-hero mt-20 h-full"}>
      <div className="bg-tolo-green relative overflow-hidden z-10">
        <div className="px-[4%] py-8 md:p-12 text-white absolute items-start md:w-[65%] h-full flex flex-col justify-start gap-6 z-20">
          {title && (
            <h1 className="font-semibold text-4xl lg:text-5xl font-aktiv">
              {title}
            </h1>
          )}
          {text && <p className="font-medium text-2xl">{text}</p>}
          {target && (
            <ButtonLink
              target={target}
              className={className}
              caption={caption}
              variant={linkButtonVariant}
              newTab={newTab}
            />
          )}
        </div>
        <div
          className={`bg-fill
          ${bgMapping[bg - 1]} h-[410px] mt-20 md:mt-0 z-0`}
        />
      </div>
    </div>
  );
};

export default WideCard;
