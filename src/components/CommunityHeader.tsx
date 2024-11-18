import React from "react";
import { HeadlineUnderlined } from "@components";

interface CommunityHeaderProps {
  className?: string;
  title?: string;
  text?: string;
}

const CommunityHeader: React.FC<CommunityHeaderProps > = ({
  className,
  title,
  text,
}) => {
  return (
    <div className={`w-full bg-neutral-50 md:pt-16 mt-14 sm:mt-20 ${className || ""}`}>
      <div className="container-width background-community background-position-2 lg:background-position-1">
        <HeadlineUnderlined large variant={7} className="mt-8">
          {title}
        </HeadlineUnderlined>
        <div className="flex justify-center pt-8 pb-16 lg:pb-24 lg:w-[60%] h-full items-start text-lg text-neutral-500">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
