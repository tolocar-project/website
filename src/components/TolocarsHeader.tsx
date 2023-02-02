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
        <div className="flex-1 flex flex-col gap-4 p-8 bg-tolo-green background-fleet bg-no-repeat bg-right-top text-white h-full w-full lg:mb-[126px]">
          <h3 className="font-semibold text-2xl font-aktiv">
            What is a Tolocar?
          </h3>
          <span className="text-lg font-normal tracking-tight">
            <strong>
              A Tolocar is a converted van that offers the possibilities of a
              makerspace or fablab on wheels.
            </strong>{" "}
            This means they bring the capacity of high end manufacturing or
            diagnosis technologies to the point of need to enable communities to
            replicate some of the capabilities and so to catalyze rebuilding
            efforts and establish support networks.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TolocarsHeader;
