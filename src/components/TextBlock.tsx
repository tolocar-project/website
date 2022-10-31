import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  big?: boolean;
}

const TextBlock: React.FC<Props> = ({ className, children, big }) => {
  return (
    <div
      className={`text-lg leading-6 custom-prose ${big ? "lg:leading-7 lg:text-2xl" : ""} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default TextBlock;
