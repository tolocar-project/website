import React from "react";
import { HeadlineUnderlined } from "@components";

interface Props {
  className?: string;
  title?: string;
  text?: string;
}

const CommunityHeader: React.FC<Props> = ({
  className,
  title,
  text,
}: Props) => {
  return (
    <div
      className={`container-hero-width p-10 lg:pl-28 lg:py-16 bg-neutral-50 mt-8 sm:mt-20 ${
        className || ""
      }`}
    >
      <HeadlineUnderlined large variant={7} className="mt-8">
        {title}
      </HeadlineUnderlined>
      <div className="flex justify-center py-8 lg:w-[60%] h-full items-start text-lg text-neutral-500">
        {text}
        <img
          className="absolute scale-125 right-0 top-64 lg:scale-150 md:top-60 lg:right-44 opacity-25"
          alt="Hand drawn illustration of tools"
          src="/tolocar_illustration_3_dark.svg"
        />
      </div>
    </div>
  );
};

export default CommunityHeader;
