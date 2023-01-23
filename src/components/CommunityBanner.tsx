import React from "react";

interface Props {
  className?: string;
  title?: string;
  text?: string;
  bg?: number;
}

const CommunityBanner: React.FC<Props> = ({ className, text, title, bg }) => {
  const bgMapping = [
    "lg:bg-community-banner-1-lg bg-community-banner-1-sm",
    "lg:bg-community-banner-2-lg bg-community-banner-2-sm",
    "lg:bg-community-banner-3-lg bg-community-banner-3-sm",
  ];

  return (
    <div
      className={`container-width lg:container-width-hero h-auto mt-28 mb-10 lg:m-10 bg-cover bg-center ${
        bgMapping[bg - 1]
      } ${className || ""}`}
    >
      <div className="flex flex-col gap-3 md:w-[60%] h-full pl-4 pr-16 pb-10 pt-44 md:p-12 text-white items-start justify-end">
        {title && (
          <h1 className="font-semibold text-[32px] leading-10 font-aktiv">
            {title}
          </h1>
        )}
        {text && <p className="font-medium text-lg leading-7">{text}</p>}
      </div>
    </div>
  );
};

export default CommunityBanner;
