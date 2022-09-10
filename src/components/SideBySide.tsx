import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SideBySide: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div
      className={`container-width flex flex-col sm:flex-row gap-6 sm:gap-16 sm:pr-16 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideBySide;
