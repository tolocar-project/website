import React from "react";
import { ReactComponent as CalendarIcon } from "@assets/fa-calendar.svg";
import { ReactComponent as TruckIcon } from "@assets/fa-truck.svg";
import { ReactComponent as CogIcon } from "@assets/fa-cog.svg";
import { ReactComponent as HammerIcon } from "@assets/fa-hammer.svg";
import { ReactComponent as ToolboxIcon } from "@assets/fa-toolbox.svg";
import { ReactComponent as ScrewdriverIcon } from "@assets/fa-screwdriver.svg";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  operator: string;
  img: string;
  tagIcon?: "truck" | "hammer" | "cog" | "toolbox" | "screwdriver";
}

const CarCard: React.FC<Props> = ({
  className,
  img,
  title,
  subtitle,
  tag,
  date,
  tagIcon,
}: Props) => {
  const renderIcon = (icon) => {
    const iconMapping = {
      truck: TruckIcon,
      cog: CogIcon,
      hammer: HammerIcon,
      toolbox: ToolboxIcon,
      screwdriver: ScrewdriverIcon,
      default: null,
    };

    const IconComponent = iconMapping[icon || "default"];

    return <IconComponent className="w-5 h-5 inline-block" />;
  };

  return (
    <div className={`flex flex-col bg-neutral-800 w-full ${className || ""}`}>
      <img src={img} className="w-full h-full object-cover aspect-[3/2]" />
      <div className="p-8 flex flex-col items-start text-white">
        <h3 className="font-semibold text-2xl font-aktiv">
          <span className="text-neutral-300 text-base uppercase">
            {subtitle}
          </span>
          <br />
          {title}
        </h3>
        <div className="bg-tolo-green flex gap-2 justify-start items-center px-3 rounded-full text-lg mt-5 h-8 max-w-full truncate">
          {tagIcon && renderIcon(tagIcon)}
          {tag}
        </div>
        <div className="text-neutral-300 mt-6 flex gap-2 justify-center items-center">
          <CalendarIcon className="w-5 h-5 inline-block" />
          {date}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
