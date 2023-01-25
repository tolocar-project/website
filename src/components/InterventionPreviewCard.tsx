import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as LocationIcon } from "@assets/location-dot.svg";

interface Props {
  href: string;
  image: string;
  className?: string;
  title: string;
  date: string;
  tag: string;
  location: string;
}

const InterventionPreviewCard: React.FC<Props> = ({
  href,
  image,
  className,
  title,
  date,
  tag,
  location,
}) => (
  <div className="max-w-sm overflow-hidden">
    <a href={href} className="relative">
      <img className="w-full" src={image} alt="Intervention Photo" />
      <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
    </a>
    <div className="flex flex-col gap-5">
      <div className="text-neutral-500 font-semibold text-base leading-6 tracking-wide mt-6 flex justify-start items-center uppercase">
        {date}
      </div>
      <div className="flex justify-start">
        <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mr-2 mb-2">
          {tag}
        </span>
        <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mr-2 mb-2">
          {tag}
        </span>
      </div>
      <h3 className="font-semibold text-2xl leading-7 uppercase">
        {title}
        <span className="text-lg leading-[18px] font-medium text-neutral-500 flex gap-3 capitalize">
          <LocationIcon className="h-5 w-[15px]" />
          {location}
        </span>
      </h3>
    </div>
  </div>
);

export default InterventionPreviewCard;
