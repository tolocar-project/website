import React from "react";
import { ReactComponent as BullseyeArrowIcon } from "@assets/icons/bullseye-arrow.svg";
import { ReactComponent as FeatherIcon } from "@assets/icons/feather.svg";
import { ReactComponent as LeafIcon } from "@assets/icons/leaf.svg";
import { ReactComponent as LightbulbOnIcon } from "@assets/icons/lightbulb-on.svg";
import { ReactComponent as MaximizeIcon } from "@assets/icons/maximize.svg";
import { ReactComponent as UsersIcon } from "@assets/icons/users.svg";

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
