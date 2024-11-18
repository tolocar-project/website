import React from "react";

interface IllustrationBgContainerProps {
  className?: string;
  children: React.ReactNode;
}

const IllustrationBgContainer: React.FC<IllustrationBgContainerProps> = ({ className, children }) => {
  return (
    <div className={`relative w-full flex ${className || ""}`}>
      {children}
      <div className="absolute -z-10 bottom-0 w-full h-3/4 lg:h-72 bg-neutral-800 bg-illustration-wide bg-no-repeat bg-cover fill-white" />
    </div>
  );
};

export default IllustrationBgContainer;
