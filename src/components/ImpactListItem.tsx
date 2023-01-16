import React from "react";
import {
  BullseyeSvg,
  HandFistSvg,
  MicrochipSvg,
  ParachuteSvg,
  BookOpenSvg,
  ChartNetworkSvg,
} from "@components";

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
  const iconMapping = {
    bullseye: BullseyeSvg,
    microchip: MicrochipSvg,
    hand_fist: HandFistSvg,
    parachute: ParachuteSvg,
    book_open: BookOpenSvg,
    chart_network: ChartNetworkSvg,
  };
  return (
    <div className={`flex ${className || ""}`}>
      <div className={"flex justify-start items-start h-5 w-5 mr-4 pt-1"}>
        {tagIcon === "bullseye" && <BullseyeSvg />}
        {tagIcon === "microchip" && <MicrochipSvg />}
        {tagIcon === "hand_fist" && <HandFistSvg />}
        {tagIcon === "parachute" && <ParachuteSvg />}
        {tagIcon === "book_open" && <BookOpenSvg />}
        {tagIcon === "chart_network" && <ChartNetworkSvg />}
      </div>
      <div className="pb-10 flex flex-col items-start text-white">
        <h4 className="font-medium text-lg font-aktiv text-tight pb-4">
          {title}
        </h4>
        <span className="text-neutral-300 text-lg text-tight">{text}</span>
      </div>
    </div>
  );
};

export default ImpactListItem;
