import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  variant?: "dark" | "white";
}

const bgColorMapping = {
  dark: "bg-neutral-800",
  white: "bg-white",
  default: "bg-neutral-50",
};

const ContentSection: React.FC<Props> = ({
  className,
  children,
  id,
  variant,
}) => {
  return (
    <section
      className={`w-full ${
        bgColorMapping[variant] || bgColorMapping["default"]
      } relative ${className || ""}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default ContentSection;
