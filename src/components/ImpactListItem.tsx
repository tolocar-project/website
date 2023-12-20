import React from "react";
import BullseyeIcon from "@assets/icons/bullseye.svg?react";
import MicrochipIcon from "@assets/icons/microchip.svg?react";
import HandFistIcon from "@assets/icons/hand-fist.svg?react";
import ParachuteIcon from "@assets/icons/parachute.svg?react";
import BookOpenIcon from "@assets/icons/book-open.svg?react";
import ChartNetworkIcon from "@assets/icons/chart-network.svg?react";

interface Props {
  className?: string;
  title: string;
  text: string;
  tagIcon?:
    | "bullseye"
    | "microchip"
    | "hand_fist"
    | "parachute"
    | "book_open"
    | "chart_network";
}

const ImpactListItem: React.FC<Props> = ({
  className,
  title,
  text,
  tagIcon,
}: Props) => {
  const renderIcon = (icon) => {
    const iconMapping = {
      bullseye: BullseyeIcon,
      microchip: MicrochipIcon,
      hand_fist: HandFistIcon,
      parachute: ParachuteIcon,
      book_open: BookOpenIcon,
      chart_network: ChartNetworkIcon,
      default: null,
    };

    const IconComponent = iconMapping[icon || "default"];

    return <IconComponent />;
  };

  return (
    <div className={`flex ${className || ""}`}>
      <div className={"flex justify-start items-start h-5 w-5 mr-4 pt-1"}>
        {tagIcon && renderIcon(tagIcon)}
      </div>
      <div className="pb-10 flex flex-col items-start text-white">
        <p className="font-medium text-lg text-tight pb-4">
          {title}
        </p>
        <span className="text-neutral-300 text-lg text-tight">{text}</span>
      </div>
    </div>
  );
};

export default ImpactListItem;
