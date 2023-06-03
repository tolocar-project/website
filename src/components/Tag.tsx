import React from "react";
import { ReactComponent as TruckIcon } from "@assets/fa-truck.svg";
import { ReactComponent as CogIcon } from "@assets/fa-cog.svg";
import { ReactComponent as HammerIcon } from "@assets/fa-hammer.svg";
import { ReactComponent as ToolboxIcon } from "@assets/fa-toolbox.svg";
import { ReactComponent as ScrewdriverIcon } from "@assets/fa-screwdriver.svg";
import { ReactComponent as PersonIcon } from "@assets/fa-person-from-portal.svg";

interface Props {
  className?: string;
  title: string;
}

const Tag: React.FC<Props> = ({ className, title }: Props) => {
  const renderIcon = (icon) => {
    const iconMapping = {
      "staff transport": PersonIcon,
      "material transport": TruckIcon,
      "open source": CogIcon,
      handcraft: HammerIcon,
      making: ToolboxIcon,
      renovation: ScrewdriverIcon,
    };
    const IconComponent = iconMapping?.[icon];
    return IconComponent ? (
      <IconComponent className="w-5 h-5 inline-block" />
    ) : null;
  };
  return (
    <span
      className={`flex gap-2 justify-start items-center bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white ${
        className || ""
      }`}
    >
      {renderIcon(title.toLowerCase())}
      {title}
    </span>
  );
};

export default Tag;
