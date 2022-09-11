import React from "react";
import ArrowSvg from "../assets/arrow.svg";

interface Props {
  title: string;
  className?: string;
  bg: number;
  target?: string;
  children: React.ReactNode;
  small?: boolean;
}

const Card: React.FC<Props> = ({
  title,
  className,
  children,
  bg,
  target,
  small,
}: Props) => {
  const bgMapping = [
    "bg-illustration-1 bg-[position:left_-100px_bottom_-40px] bg-no-repeat",
    "bg-illustration-2 bg-bottom bg-contain bg-no-repeat",
    "bg-illustration-3 bg-right-bottom bg-contain bg-no-repeat",
    "bg-illustration-3-alpha bg-[position:right_-40px_bottom_-30px] bg-[length:65%] bg-contain bg-no-repeat",
    "bg-illustration-2-alpha bg-[position:bottom_-50%_left] bg-[length:70%] bg-repeat-x",
  ];
  const cardContent = (
    <>
      {title && (
        <h2
          className={`font-bold font-aktiv ${
            small ? "text-lg md:text-2xl" : "text-4xl"
          } pr-10`}
        >
          {title}
        </h2>
      )}
      {target && (
        <div
          className={`absolute right-8 ${
            small ? "top-8" : "bottom-8 flex items-center gap-4"
          }`}
        >
          {!small && <>Get in contact</>}
          <img src={ArrowSvg} className="w-8 h-8" />
        </div>
      )}
      <p className="mt-3 text-lg leading-6 mb-24 md:mb-12">{children}</p>
    </>
  );
  return (
    <div
      className={`flex-1 basis-0 ${
        small ? "lg:max-w-[384px] h-[220px] lg:h-[360px] " : ""
      }bg-tolo-green text-white p-5 lg:p-8 relative ${
        bgMapping[bg - 1]
      } ${className || ""}`}
    >
      {target ? <a href={target}>{cardContent}</a> : cardContent}
    </div>
  );
};

export default Card;
