import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
}

const Accordion: React.FC<Props> = ({
  className,
  open,
  children,
  title,
  subtitle,
  image,
  ...rest
}: Props) => {
  return (
    <details
      className={`py-6 [&_summary::after]:content-plus [&[open]_summary::after]:content-minus ${className || ""}`}
      open={open}
      {...rest}
    >
      <summary className="flex not-prose after:w-5 after:h-5 after:text-gray-500 after:cursor-pointer after:justify-self-end after:mt-1 after:duration-500 after:transition-all gap-4">
        <div className="w-16 h-16 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            alt={`Picture of ${title}`}
            src={image}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="font-aktiv font-semibold text-2xl">{title}</h4>
          <div>{subtitle}</div>
        </div>
      </summary>
      <div className="pt-6 pl-20">{children}</div>
    </details>
  );
};

export default Accordion;
