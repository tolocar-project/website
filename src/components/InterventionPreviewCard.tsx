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
  <a
    href={href}
    className={`group z-10 flex-1 hover:-translate-y-4 transition-transform ${
      className || ""
    }`}
  >
    <div className={`overflow-hidden pb-10 ${className || ""}`}>
      <div className="h-64 overflow-hidden relative">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
          src={image}
          alt="Intervention Photo"
        />
        <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
      </div>
      <div className="flex flex-col gap-5">
        {date && (
          <div className="text-neutral-500 font-semibold text-sm leading-4 md:text-base md:leading-6 tracking-wide mt-6 flex justify-start items-center uppercase">
            {date}
          </div>
        )}
        {Boolean(tags.length) && (
          <div className="flex justify-start">
            {tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        )}
        {title && (
          <h3 className="font-semibold text-lg leading-6 md:text-2xl md:leading-7 uppercase">
            <span className="pr-3 font-aktiv group-focus:underline">
              {title}
            </span>
            {location && (
              <span className="text-base leading-4 md:text-lg md:leading-[18px] font-medium text-neutral-500 inline-flex items-center gap-3 capitalize">
                <LocationIcon className="h-5 w-[15px]" />
                {location}
              </span>
            )}
          </h3>
        )}
      </div>
    </div>
  </a>
);

export default InterventionPreviewCard;
