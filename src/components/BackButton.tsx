import React from "react";
import ArrowIcon from "@assets/arrow.svg?react";

interface Props {
  className?: string;
  target: string;
  children?: React.ReactNode;
}

const BackButton: React.FC<Props> = ({ className, children, target }: Props) => {
  return (
    <div className={`text-neutral-500 hover:text-tolo-black mt-14 mb-11 font-medium text-[18px] ${className || ""}`}>
      <a href={target} className="flex items-center">
        <ArrowIcon className="h-6 w-6 mr-4 rotate-180" />
        {children}
      </a>
    </div>
  );
};

export default BackButton;
