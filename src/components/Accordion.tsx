import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
  light?: boolean;
}

const Accordion: React.FC<Props> = ({
  className,
  open,
  children,
  title,
  subtitle,
  image,
  light,
  ...rest
}: Props) => {
  return (
    <details
      className={`py-6 ${
        light
          ? "[&_summary::after]:content-plus-white [&[open]_summary::after]:content-minus-white"
          : "[&_summary::after]:content-plus-green [&[open]_summary::after]:content-minus-green"
      } ${className || ""}`}
      open={open}
      {...rest}
    >
      <summary className="flex not-prose after:w-5 after:h-5 after:text-gray-500 after:cursor-pointer after:justify-self-end after:mt-1 gap-4">
        <div className="w-16 h-16 overflow-hidden cursor-pointer">
          <img
            className="object-cover w-full h-full"
            alt={`Picture of ${title}`}
            src={image}
          />
        </div>
        <div className="flex-1 flex flex-col cursor-pointer">
          <h4 className="font-aktiv font-semibold text-2xl">{title}</h4>
          <div>{subtitle}</div>
        </div>
      </summary>
      <div className="pt-6 pl-20">{children}</div>
    </details>
  );
};

export default Accordion;
