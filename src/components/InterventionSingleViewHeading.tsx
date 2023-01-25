import React from "react";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  operator: string;
  location: string;
}

const InterventionSingleViewHeading: React.FC<Props> = ({
  className,
  title,
  subtitle,
  tag,
  date,
  operator,
  location,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full mt-12 pt-24 mb-10 ${
        className || ""
      }`}
    >
      <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mb-6">
        {tag}
      </span>
      <h1 className="text-[32px] leading-10 md:text-5xl md:leading-[54px] font-semibold mb-5">
        {title}
      </h1>
      <div className="text-lg leading-6 text-neutral-500 flex flex-col items-center gap-y-2 font-medium">
        <p>{subtitle}</p>
        <div className="flex justify-evenly gap-5">
          <span>{operator}</span>
          <span>{date}</span>
          <span className="leading-[18px] flex gap-3">
            <LocationIcon className="h-5 w-[15px]" />
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InterventionSingleViewHeading;
