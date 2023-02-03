import React from "react";
import { ReactComponent as CalendarIcon } from "@assets/fa-calendar.svg";
import { ReactComponent as MitOstIcon } from "@assets/MitOst.svg";
import { ReactComponent as CadusIcon } from "@assets/Cadus.svg";
import { ReactComponent as HIWWIcon } from "@assets/HIWW.svg";
import { ReactComponent as OstrivIcon } from "@assets/Ostriv.svg";
import type { ITolocarsFrontmatter } from "@interfaces/ITolocars";
import { Tag } from "@components";

interface Props extends ITolocarsFrontmatter {
  className?: string;
  href?: string;
}

const CarCard: React.FC<Props> = ({
  className,
  href,
  img,
  title,
  tags,
  date,
  operatorIcon,
  car,
}: Props) => {
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
      {href && (
        <a href={href}>
          <img src={img} className="w-full h-full object-cover aspect-[3/2]" />
        </a>
      )}
      <div className="p-6 flex flex-col items-start text-white">
        <span className="text-neutral-300 text-base uppercase">{car}</span>
        <h3 className="font-semibold text-2xl font-aktiv line-clamp-1">
          {title}
        </h3>
        {Boolean(tags.length) && (
          <div className="mt-5 max-w-full flex flex-wrap">
            {tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        )}
        {date && (
          <div className="text-neutral-300 mt-4 flex gap-2 justify-center items-center">
            <CalendarIcon className="w-5 h-5 inline-block" />
            {date}
          </div>
        )}
        {operatorIcon && (
          <div className="text-neutral-300 mt-4 flex gap-2 justify-center items-center">
            <span className="line-clamp-1">Operated by</span>
            <div>{renderOperatorIcon(operatorIcon)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
