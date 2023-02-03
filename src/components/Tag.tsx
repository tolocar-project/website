import React from "react";
import { ReactComponent as TruckIcon } from "@assets/fa-truck.svg";
import { ReactComponent as CogIcon } from "@assets/fa-cog.svg";
import { ReactComponent as HammerIcon } from "@assets/fa-hammer.svg";
import { ReactComponent as ToolboxIcon } from "@assets/fa-toolbox.svg";
import { ReactComponent as ScrewdriverIcon } from "@assets/fa-screwdriver.svg";

interface Props {
  className?: string;
  title: string;
  tagIcon?: "truck" | "hammer" | "cog" | "toolbox" | "screwdriver";
}

const Tag: React.FC<Props> = ({ className, title, tagIcon }: Props) => {
  const renderIcon = (icon) => {
    const iconMapping = {
      transport: TruckIcon,
      open_source: CogIcon,
      handcraft: HammerIcon,
      making: ToolboxIcon,
      renovation: ScrewdriverIcon,
      default: null,
    };
    const IconComponent = iconMapping[icon || "default"];
    return <IconComponent className="w-5 h-5 inline-block" />;
  };
  return (
    <span
      className={`flex gap-2 justify-start items-center bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mr-2 mb-2 line-clamp-1 ${
        className || ""
      }`}
    >
      {tagIcon && (title === tagIcon ? renderIcon(tagIcon) : null)}
      {title}
    </span>
  );
};

export default Tag;
