import React from "react";
import CalendarIcon from "@assets/icons/calendar.svg?react";
import TruckIcon from "@assets/icons/truck.svg?react";
import CogIcon from "@assets/icons/cog.svg?react";
import HammerIcon from "@assets/icons/hammer.svg?react";
import ToolboxIcon from "@assets/icons/toolbox.svg?react";
import ScrewdriverIcon from "@assets/icons/screwdriver.svg?react";


const iconMapping = {
  truck: TruckIcon,
  cog: CogIcon,
  hammer: HammerIcon,
  toolbox: ToolboxIcon,
  screwdriver: ScrewdriverIcon,
  default: <></>,
};

interface CarCardProps {
  className?: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  operator: string;
  img: string;
  tagIcon?: keyof typeof iconMapping;
}

const CarCard: React.FC<CarCardProps> = ({
  className,
  img,
  title,
  subtitle,
  tag,
  date,
  tagIcon,
}) => {
  
  const renderIcon = (icon: keyof typeof iconMapping) => {
    const IconComponent = iconMapping[icon];
    //@ts-expect-error
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
