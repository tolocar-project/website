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
    "bg-illustration-1 bg-[position:left_-100px_bottom_-40px]",
    "bg-illustration-2 bg-bottom bg-contain",
    "bg-illustration-3 bg-right-bottom bg-contain",
  ];
  const cardContent = (
    <>
      {title && <h2 className="font-bold font-aktiv text-lg md:text-2xl pr-10">{title}</h2>}
      {target && (
        <img src={ArrowSvg} className="w-8 h-8 absolute right-8 top-8" />
      )}
      <p className="mt-3 text-lg leading-6 mb-24 md:mb-12">{children}</p>
    </>
  );
  return (
    <div
      className={`flex-1 basis-0 lg:max-w-[384px] h-[220px] lg:h-[360px] bg-tolo-green text-white p-5 lg:p-8 bg-no-repeat relative ${
        bgMapping[bg - 1]
      } ${className || ""}`}
    >
      {target ? <a href={target}>{cardContent}</a> : cardContent}
    </div>
  );
};

export default Card;
