import React from "react";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";
import { ReactComponent as DotIcon } from "@assets/dot-icon.svg";
import type { IInterventionFrontmatter } from "@interfaces/IIntervention";
import { Tag } from "@components";

interface Props extends IInterventionFrontmatter {
  className?: string;
}

const InterventionSingleViewHeading: React.FC<Props> = ({
  className,
  title,
  subtitle,
  tags,
  date,
  car,
  location,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-start md:items-center md:justify-center w-full mt-12 pt-24 mb-10 ${
        className || ""
      }`}
    >
      {tags.length && (
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>
      )}
      {title && (
        <h1 className="text-[32px] leading-10 md:text-5xl md:leading-[54px] font-semibold mb-5">
          {title}
        </h1>
      )}
      <div className="text-lg leading-6 text-neutral-500 flex flex-col items-start md:items-center gap-y-2 font-medium">
        {subtitle && <p>{subtitle}</p>}
        <div className="hidden md:block">
          <div className="flex items-center gap-2 md:gap-3">
            {car && (
              <>
                <span>{car}</span>
                <DotIcon className="h-1 w-1" />
              </>
            )}
            {date && (
              <>
                <span>{date}</span>
                <DotIcon className="h-1 w-1" />
              </>
            )}
            {location && (
              <span className="leading-[18px] flex gap-2 md:gap-3">
                <LocationIcon className="h-5 w-[15px]" />
                {location}
              </span>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col items-start gap-2 md:gap-3">
            {date && <span>{date}</span>}
            <span className="leading-[18px] flex items-center gap-2 md:gap-3">
              {location && (
                <>
                  <LocationIcon className="h-5 w-[15px]" />
                  {location}
                  <DotIcon className="h-1 w-1" />
                </>
              )}
              {car && <span>{car}</span>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionSingleViewHeading;
