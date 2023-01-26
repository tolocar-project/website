import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";
import type { IInterventionFrontmatter } from "@interfaces/IIntervention";
import { Tag } from "@components";

interface Props extends IInterventionFrontmatter {
  href: string;
  className?: string;
  image: string;
}

const InterventionPreviewCard: React.FC<Props> = ({
  href,
  image,
  className,
  title,
  date,
  tags,
  location,
}) => (
  <div className={`flex-1 overflow-hidden z-10 pb-10 ${className || ""}`}>
    {href && (
      <div className="h-64 relative">
        <a href={href}>
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Intervention Photo"
          />
          <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
        </a>
      </div>
    )}
    <div className="flex flex-col gap-5">
      {date && (
        <div className="text-neutral-500 font-semibold text-base leading-6 tracking-wide mt-6 flex justify-start items-center uppercase">
          {date}
        </div>
      )}
      {tags.length && (
        <div className="flex justify-start">
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </div>
      )}
      {title && (
        <h3 className="font-semibold text-2xl leading-7 uppercase">
          <span className="pr-3 font-aktiv">{title}</span>
          {location && (
            <span className="text-lg leading-[18px] font-medium text-neutral-500 inline-flex items-center gap-3 capitalize">
              <LocationIcon className="h-5 w-[15px]" />
              {location}
            </span>
          )}
        </h3>
      )}
    </div>
  </div>
);

export default InterventionPreviewCard;
