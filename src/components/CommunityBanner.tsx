import React from "react";

interface Props {
  className?: string;
  title?: string;
  text?: string;
  bg?: "bg_community_1" | "bg_community_2" | "bg_community_3";
}

const CommunityBanner: React.FC<Props> = ({ className, text, title, bg }) => {
  const bgMapping = {
    bg_community_1: "lg:bg-community_multi_1_lg bg-community_multi_1_sm",
    bg_community_2: "lg:bg-community_multi_2_lg bg-community_multi_2_sm",
    bg_community_3: "lg:bg-community_multi_3_lg bg-community_multi_3_sm",
  };

  return (
    <div
      className={`container-width lg:container-width-hero h-auto m-10 bg-cover bg-center ${
        bgMapping[bg]
      } ${className || ""}`}
    >
      <div className="flex flex-col gap-3 md:w-[60%] h-full pl-4 pr-16 pb-10 pt-44 md:p-12 text-white items-start justify-end">
        {title && (
          <h1 className="font-semibold text-3xl font-aktiv">{title}</h1>
        )}
        {text && <p className="font-medium text-lg leading-7">{text}</p>}
      </div>
    </div>
  );
};

export default CommunityBanner;
