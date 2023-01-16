import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";

interface Props {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const WideCard: React.FC<Props> = ({ className, children, title }) => {
  return (
    <div className={`container-width-hero mt-20 h-full ${className || ""}`}>
      <div className="bg-tolo-green relative overflow-hidden">
        <div className="px-[4%] py-8 md:p-12 text-white absolute items-start md:w-[60%] h-full flex flex-col justify-between">
          {title && <h1 className="font-semibold text-5xl font-aktiv">{title}</h1>}
          {children && <p className="font-medium text-2xl mt-8">{children}</p>}
          <a href="#" className="bg-black z-10 inline-flex items-center bg-opacity-20 opacity-90 rounded-full py-4 px-5 mt-8">Search for Resources<ArrowIcon className="h-5 w-5 ml-8 text-white"/></a>
        </div>
        <div className="bg-fill bg-illustration-4-wide mask-illustration bg-no-repeat bg-[position:right_-80px_top_-40px] h-[410px]" />
      </div>
    </div>
  );
};

export default WideCard;
