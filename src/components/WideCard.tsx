import React from "react";
import ArrowSvg from "@components/ArrowSvg";

interface Props {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const WideCard: React.FC<Props> = ({ className, children, title }) => {
  return (
    <div className={`container-width-hero mt-20 h-full ${className || ""}`}>
      <div className="bg-tolo-green relative overflow-hidden">
        <div className="p-6 md:p-12 text-white absolute items-start w-full md:max-w-2/3 h-full flex flex-col justify-between">
          {title && <h1 className="font-bold text-5xl">{title}</h1>}
          {children && <p className="font-medium text-2xl mt-8">{children}</p>}
          <a href="#" className="bg-black z-10 inline-flex items-center bg-opacity-20 opacity-90 rounded-full py-4 px-5 mt-8">Search for Resources<ArrowSvg className="h-5 w-5 ml-8 text-white"/></a>
        </div>
        <div className="bg-fill bg-illustration-4-wide mask-illustration bg-no-repeat bg-[position:right_-80px_top_-10px] h-[410px]" />
      </div>
    </div>
  );
};

export default WideCard;
