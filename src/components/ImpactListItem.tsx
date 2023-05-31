import React from "react";
import { ReactComponent as BullseyeIcon } from "@assets/bullseye.svg";
import { ReactComponent as MicrochipIcon } from "@assets/microchip.svg";
import { ReactComponent as HandFistIcon } from "@assets/hand-fist.svg";
import { ReactComponent as ParachuteIcon } from "@assets/parachute.svg";
import { ReactComponent as BookOpenIcon } from "@assets/book-open.svg";
import { ReactComponent as ChartNetworkIcon } from "@assets/chart-network.svg";

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
