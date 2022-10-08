import React from "react";

interface Props {
  className?: string;
}

const ArrowSvg: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 18H32" stroke="currentColor" strokeWidth="4" />
      <path d="M16 2L32 18L16 34" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};

export default ArrowSvg;
