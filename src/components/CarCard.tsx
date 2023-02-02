import React from "react";
import { ReactComponent as CalendarIcon } from "@assets/fa-calendar.svg";
import { ReactComponent as TruckIcon } from "@assets/fa-truck.svg";
import { ReactComponent as CogIcon } from "@assets/fa-cog.svg";
import { ReactComponent as HammerIcon } from "@assets/fa-hammer.svg";
import { ReactComponent as ToolboxIcon } from "@assets/fa-toolbox.svg";
import { ReactComponent as ScrewdriverIcon } from "@assets/fa-screwdriver.svg";
import { ReactComponent as MitOstIcon } from "@assets/MitOst.svg";
import { ReactComponent as CadusIcon } from "@assets/Cadus.svg";
import { ReactComponent as HIWWIcon } from "@assets/HIWW.svg";
import { ReactComponent as OstrivIcon } from "@assets/Ostriv.svg";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  operator: string;
  img: string;
  tagIcon?: "truck" | "hammer" | "cog" | "toolbox" | "screwdriver";
  operatorIcon?: "mitost" | "cadus" | "hiww" | "ostriv";
}

const CarCard: React.FC<Props> = ({
  className,
  img,
  title,
  subtitle,
  tag,
  date,
  tagIcon,
  operatorIcon,
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

  const renderOperatorIcon = (icon) => {
    const operatorIconMapping = {
      mitost: MitOstIcon,
      cadus: CadusIcon,
      hiww: HIWWIcon,
      ostriv: OstrivIcon,
      default: null,
    };

    const OperatorIconComponent = operatorIconMapping[icon || "default"];

    return <OperatorIconComponent className="w-full h-4 inline-block" />;
  };

  return (
    <div className={`flex flex-col bg-neutral-800 w-full ${className || ""}`}>
      <img src={img} className="w-full h-full object-cover aspect-[3/2]" />
      <div className="p-6 flex flex-col items-start text-white">
        <span className="text-neutral-300 text-base uppercase">{subtitle}</span>
        <h3 className="font-semibold text-2xl font-aktiv line-clamp-1">
          {title}
        </h3>
        <div className="bg-tolo-green flex gap-2 justify-start items-center px-3 rounded-full text-lg mt-5 h-8 max-w-full line-clamp-1">
          {tagIcon && renderIcon(tagIcon)}
          {tag}
        </div>
        <div className="text-neutral-300 mt-6 flex gap-2 justify-center items-center">
          <CalendarIcon className="w-5 h-5 inline-block" />
          {date}
        </div>
        <div className="text-neutral-300 mt-6 flex gap-2 justify-center items-center">
          <span className="line-clamp-1">Operated by</span>
          <div>{operatorIcon && renderOperatorIcon(operatorIcon)}</div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
