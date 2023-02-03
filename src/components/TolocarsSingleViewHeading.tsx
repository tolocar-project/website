import React from "react";
import type { ITolocarsFrontmatter } from "@interfaces/ITolocars";

interface Props extends ITolocarsFrontmatter {
  className?: string;
}

const TolocarsSingleViewHeading: React.FC<Props> = ({
  className,
  title,
  subtitle,
  img,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-start md:items-center md:justify-center w-full mt-12 pt-24 mb-10 ${
        className || ""
      }`}
    >
      {title && (
        <h1 className="flex flex-col items-start md:items-center text-[32px] leading-10 md:text-5xl md:leading-[54px] font-semibold gap-5 font-aktiv lg:w-2/3">
          {title}
          {subtitle && (
            <span className="text-start md:text-center text-lg leading-6 text-neutral-500 font-normal mb-12">
              {subtitle}
            </span>
          )}
        </h1>
      )}

      <img
        src={img}
        alt="Tolocar"
        className="object-cover h-[527px] aspect-[1.91/1]"
      />
    </div>
  );
};

export default TolocarsSingleViewHeading;
