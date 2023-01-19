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
      className={`container-hero-width p-10 lg:pl-28 lg:py-16 background-community background-position-2 lg:background-position-1 mt-8 sm:mt-20 ${
        className || ""
      }`}
    >
      <HeadlineUnderlined large variant={7} className="mt-8">
        {title}
      </HeadlineUnderlined>
      <div className="flex justify-center py-8 lg:w-[60%] h-full items-start text-lg text-neutral-500">
        {text}
      </div>
    </div>
  );
};

export default CommunityHeader;
