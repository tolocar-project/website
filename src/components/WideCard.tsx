import React from "react";
import ArrowSvg from "@components/ArrowSvg";

interface Props {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const WideCard: React.FC<Props> = ({ className, children, title }) => {
  return (
    <div className={`container-width mt-20 h-full ${className || ""}`}>
      <div className="bg-tolo-green relative">
        <div className="p-12 text-white absolute items-start w-2/3 h-full flex flex-col justify-between">
          {title && <h1 className="font-bold text-5xl">{title}</h1>}
          {children && <p className="font-medium text-2xl mt-8">{children}</p>}
          <a href="#" className="bg-black z-10 inline-flex items-center bg-opacity-20 opacity-90 rounded-full py-4 px-5 mt-8">Search for Resources<ArrowSvg className="h-5 w-5 ml-8 text-white"/></a>
        </div>
        <div className="bg-fill bg-illustration-4-wide mask-illustration bg-no-repeat bg-[position:right_-20%_top_-10px] h-[410px]" />
      </div>
    </div>
  );
};

export default WideCard;
