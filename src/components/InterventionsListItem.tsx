import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";
import { ReactComponent as DotIcon } from "@assets/dot-icon.svg";
import { Tag } from "@components";
import type { IInterventionFrontmatter } from "@interfaces/IIntervention";

interface Props extends IInterventionFrontmatter {
  className?: string;
  image?: string;
  href?: string;
}

const InterventionsListItem: React.FC<Props> = ({
  className,
  image,
  title,
  tags,
  date,
  location,
  href,
  teaser,
}: Props) => {
  return (
    <div className={`flex gap-[42px] ${className || ""}`}>
      <div className="border-l-2 border-neutral-200 relative">
        <div className="absolute rounded-full bg-tolo-green left-1/2 -translate-x-[calc(50%+1px)] top-20 h-5 w-5" />
      </div>
      <a
        href={href}
        className="group hover:-translate-y-4 transition-transform"
      >
        <div className="flex flex-col mt-20 lg:flex-row overflow-hidden z-10 gap-8">
          {image && (
            <div className="flex-none w-full lg:w-96 h-64 relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                src={image}
                alt="Intervention Photo"
              />
              <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
            </div>
          )}
          <div className="flex flex-col gap-y-6 flex-1">
            {tags.length && (
              <div className="flex justify-start">
                {tags.map((tag, index) => (
                  <Tag key={index} title={tag} />
                ))}
              </div>
            )}
            <div className="flex flex-col gap-y-3">
              {title && (
                <h3 className="font-semibold text-lg leading-6 md:text-2xl md:leading-7 uppercase">
                  <span className="pr-3 font-aktiv">{title}</span>
                </h3>
              )}
              {teaser && (
                <p className="text-neutral-500 text-base md:text-lg leading-6 font-normal">
                  {teaser && teaser + "..."}
                  <span className="text-tolo-green font-normal pl-2">
                    Read more
                  </span>
                </p>
              )}
            </div>
            {location && (
              <div className="flex gap-x-3 items-center text-neutral-500 font-medium">
                <div className="text-base leading-5 md:text-lg md:leading-6">
                  {date}
                </div>
                <DotIcon className="h-1 w-1" />
                <span className="text-base leading-4 md:text-lg md:leading-[18px] inline-flex items-center gap-3">
                  <LocationIcon className="h-5 w-[15px]" />
                  {location}
                </span>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default InterventionsListItem;
