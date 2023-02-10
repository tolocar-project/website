import React from "react";
import { ReactComponent as CalendarIcon } from "@assets/fa-calendar.svg";
import { ReactComponent as MitOstLogo } from "@assets/MitOst.svg";
import { ReactComponent as CadusLogo } from "@assets/Cadus.svg";
import { ReactComponent as HIWWLogo } from "@assets/HIWW.svg";
import { ReactComponent as OstrivLogo } from "@assets/Ostriv.svg";
import type { ITolocarsFrontmatter } from "@interfaces/ITolocars";
import { Tag, LinkWrapper } from "@components";

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
  operators,
  car,
}: Props) => {
  const renderOperator = (logo) => {
    const operatorsMapping = {
      mitost: MitOstLogo,
      cadus: CadusLogo,
      hiww: HIWWLogo,
      ostriv: OstrivLogo,
    };
    const OperatorComponent = operatorsMapping?.[logo];
    return OperatorComponent ? (
      <OperatorComponent className="w-full h-4 inline-block" />
    ) : null;
  };
  return (
    <LinkWrapper
      condition={Boolean(href)}
      wrapper={(children) => <a href={href}>{children}</a>}
    >
      <div className={`flex flex-col bg-neutral-800 w-full ${className || ""}`}>
        <img src={img} className="w-full h-full object-cover aspect-[3/2]" />
        <div className="p-6 flex flex-col items-start text-white">
          <span className="text-neutral-300 text-base uppercase">{car}</span>
          <h3 className="font-semibold text-2xl font-aktiv line-clamp-1">
            {title}
          </h3>
          {Boolean(tags?.length) && (
            <div className="mt-5 max-w-full flex flex-wrap gap-x-2 gap-y-1">
              {tags.map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
            </div>
          )}
          {date && (
            <div className="text-neutral-300 mt-5 flex gap-2 justify-center items-center">
              <CalendarIcon className="w-5 h-5 inline-block" />
              {date}
            </div>
          )}
          {Boolean(operators?.length) && (
            <div className="text-neutral-300 mt-4 flex gap-x-1.5 gap-y-2 justify-start items-center flex-wrap">
              <span className="text-lg leading-6">Operated by</span>
              {operators.map((operator, index) => {
                const isLastOfMultiple =
                  operators.length > 1 && index === operators.length - 1;
                return (
                  <>
                    {isLastOfMultiple && "&"}
                    <div
                      key={index}
                      className="inline-flex justify-center items-center"
                    >
                      {renderOperator(operator)}
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </LinkWrapper>
  );
};

export default CarCard;
