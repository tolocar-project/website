import React from "react";
import { HeadlineUnderlined } from "@components";

interface Props {
  className?: string;
  title?: string;
  text?: string;
}

const TolocarsHeader: React.FC<Props> = ({ className, title, text }: Props) => {
  return (
    <div
      className={`w-full h-[448px] md:h-[718px] bg-illustration-5 bg-no-repeat bg-right-top bg-neutral-50 lg:pt-16 lg:pb-16 mt-14 sm:mt-20 ${
        className || ""
      }`}
    >
      <div className="container-width flex flex-col lg:flex-row lg:justify-between lg:mb-20">
        <div className="flex-1">
          <HeadlineUnderlined large variant={10} className="mt-8">
            {title}
          </HeadlineUnderlined>
          <div className="flex justify-center pt-8 pb-16 lg:pb-24 w-full h-full items-start text-2xl font-aktiv text-neutral-900 leading-[30px] font-semibold">
            {text}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-8 bg-tolo-green bg-[size:94.87px_75.38px] bg-[url('truck.svg')] bg-no-repeat bg-[right_top_-20px] text-white h-full w-full mb-44 lg:mb-32 ">
          <h3 className="font-semibold text-xl leading-6 lg:text-2xl font-aktiv">
            What is a Tolocar?
          </h3>
          <span className="text-base lg:text-lg font-medium tracking-tight">
            A Tolocar is a converted van that offers the possibilities of a
            makerspace or fablab on wheels.
            <span className="font-normal opacity-70">
              This means they bring the capacity of high end manufacturing or
              diagnosis technologies to the point of need to enable communities
              to replicate some of the capabilities and so to catalyze
              rebuilding efforts and establish support networks.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TolocarsHeader;
