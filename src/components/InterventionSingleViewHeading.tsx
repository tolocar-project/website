import React from "react";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";
import { ReactComponent as DotIcon } from "@assets/dot-icon.svg";

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
      className={`flex flex-col items-start md:items-center md:justify-center w-full mt-12 pt-24 mb-10 ${
        className || ""
      }`}
    >
      <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mb-6">
        {tag}
      </span>
      <h1 className="text-[32px] leading-10 md:text-5xl md:leading-[54px] font-semibold mb-5">
        {title}
      </h1>
      <div className="text-lg leading-6 text-neutral-500 flex flex-col items-start md:items-center gap-y-2 font-medium">
        <p>{subtitle}</p>
        <div className="hidden md:block">
          <div className="flex items-center gap-2 md:gap-3">
            <span>{operator}</span>
            <DotIcon className="h-1 w-1" />
            <span>{date}</span>
            <DotIcon className="h-1 w-1" />
            <span className="leading-[18px] flex gap-2 md:gap-3">
              <LocationIcon className="h-5 w-[15px]" />
              {location}
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col items-start gap-2 md:gap-3">
            <span>{date}</span>
            <span className="leading-[18px] flex items-center gap-2 md:gap-3">
              <LocationIcon className="h-5 w-[15px]" />
              {location}
              <DotIcon className="h-1 w-1" />
              <span>{operator}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionSingleViewHeading;
