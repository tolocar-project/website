import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";
import { ReactComponent as DotIcon } from "@assets/dot-icon.svg";
import { Tag } from "@components";
import type { IInterventionFrontmatter } from "@interfaces/IIntervention";

interface Props extends IInterventionFrontmatter {
  className?: string;
  image: string;
  href: string;
}

const InterventionsListItem: React.FC<Props> = ({
  className,
  image,
  title,
  subtitle,
  tags,
  date,
  location,
  href,
}: Props) => {
  return (
    <div className={`flex gap-[42px] ${className || ""}`}>
      <div className="border-l-2 border-neutral-200 relative">
        <div className="absolute rounded-full bg-tolo-green left-1/2 -translate-x-[calc(50%+1px)] top-20 h-5 w-5" />
      </div>
      <div className="flex flex-col mt-20 lg:flex-row flex-1 overflow-hidden z-10 gap-8">
        <div className="w-full lg:w-96 h-64 relative">
          <a href={href}>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Intervention Photo"
            />
            <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
          </a>
        </div>
        <div className="flex flex-col gap-y-6">
          {tags.length && (
            <div className="flex justify-start">
              {tags.map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
            </div>
          )}
          <div className="flex flex-col gap-y-3">
            <h3 className="font-semibold text-2xl leading-7 uppercase">
              <span className="pr-3 font-aktiv">{title}</span>
            </h3>
            <p className="text-neutral-500 text-base lg:text-lg leading-6 font-medium">
              {subtitle}...
              <span className="text-tolo-green font-normal pl-2">
                <a href={href}>Read more</a>
              </span>
            </p>
          </div>
          <div className="flex gap-x-3 items-center text-neutral-500 font-medium">
            <div className=" text-base leading-6">{date}</div>
            <DotIcon className="h-1 w-1" />
            <span className="text-lg leading-[18px] inline-flex items-center gap-3">
              <LocationIcon className="h-5 w-[15px]" />
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionsListItem;
