import React from "react";

interface SideBySideProps {
  children: React.ReactNode;
  className?: string;
}

const SideBySide: React.FC<SideBySideProps> = ({ children, className }) => {
  return (
    <div
      className={`container-width flex flex-col sm:flex-row sm:gap-16 sm:pr-16 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default SideBySide;
