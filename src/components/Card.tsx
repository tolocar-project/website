import React from "react";
import ArrowSvg from "../assets/arrow.svg";

interface Props {
  title: string;
  className?: string;
  bg: number;
  target?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({
  title,
  className,
  children,
  bg,
  target,
}: Props) => {
  const bgMapping = [
    "bg-illustration-1 bg-bottom bg-contain",
    "bg-illustration-2 bg-bottom bg-contain",
    "bg-illustration-3 bg-right-bottom bg-contain",
  ];
  const cardContent = (
    <>
      {title && <h2 className="font-bold font-aktiv text-2xl">{title}</h2>}
      {target && (
        <img src={ArrowSvg} className="w-8 h-8 absolute right-8 top-8" />
      )}
      <p className="mt-3 text-lg leading-6 mb-12">{children}</p>
    </>
  );
  return (
    <div
      className={`basis-[384px] h-[360px] bg-tolo-green text-white p-8 bg-no-repeat relative ${
        bgMapping[bg - 1]
      } ${className || ""}`}
    >
      {target ? <a href={target}>{cardContent}</a> : cardContent}
    </div>
  );
};

export default Card;
