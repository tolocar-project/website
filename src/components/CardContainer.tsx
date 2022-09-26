import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const CardContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`container-width flex flex-col lg:flex-row lg:justify-between gap-8 mt-16 mb-24 lg:mt-24 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
