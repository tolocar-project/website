import React from "react";
import BullseyeArrowIcon from "@assets/icons/bullseye-arrow.svg?react";
import FeatherIcon from "@assets/icons/feather.svg?react";
import LeafIcon from "@assets/icons/leaf.svg?react";
import LightbulbOnIcon from "@assets/icons/lightbulb-on.svg?react";
import MaximizeIcon from "@assets/icons/maximize.svg?react";
import UsersIcon from "@assets/icons/users.svg?react";

type Icons =
  | "bullseye_arrow"
  | "feather"
  | "leaf"
  | "lightbulb"
  | "maximize"
  | "users";

interface Props {
  className?: string;
  icon: Icons;
  title: string;
  description: string;
}

const InfoItem: React.FC<Props> = ({
  className,
  icon,
  title,
  description,
}: Props) => {
  const renderIcon = (icon: Icons) => {
    const iconMapping: Record<Icons, React.FunctionComponent | null> = {
      bullseye_arrow: BullseyeArrowIcon,
      feather: FeatherIcon,
      leaf: LeafIcon,
      lightbulb: LightbulbOnIcon,
      maximize: MaximizeIcon,
      users: UsersIcon,
    };

    const IconComponent = iconMapping[icon as Icons] || (() => <></>);

    return <IconComponent />;
  };

  return (
    <div className={`flex gap-4 text-lg ${className || ""}`}>
      <div className={"flex justify-start items-start h-5 w-5 pt-1"}>
        {icon && renderIcon(icon)}
      </div>
      <div>
        <h4 className="font-semibold font-inter">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
