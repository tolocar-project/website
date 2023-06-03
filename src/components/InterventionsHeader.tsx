import React from "react";
import { HeadlineUnderlined } from "@components";

interface Props {
  className?: string;
  title?: string;
  text?: string;
}

const InterventionsHeader: React.FC<Props> = ({
  className,
  title,
  text,
}: Props) => {
  return (
    <div className={`w-full lg:pt-16 mt-32 ${className || ""}`}>
      <div className="container-width">
        <HeadlineUnderlined large variant={10}>
          {title}
        </HeadlineUnderlined>
        <div className="flex justify-center pt-8 pb-16 lg:pb-24 lg:w-[696px] h-full items-start text-lg text-neutral-400">
          {text}
        </div>
      </div>
    </div>
  );
};

export default InterventionsHeader;
