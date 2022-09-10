import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
  img: string;
}

const ImageCard: React.FC<Props> = ({
  children,
  img,
  title,
  className,
}: Props) => {
  return (
    <div className={`flex-1 flex flex-col ${className || ""}`}>
      <img src={img} />
      <h3 className="text-2xl leading-7 font-bold text-white mt-8">{title}</h3>
      <p className="mt-3 text-lg leading-6 text-tolo-link-grey">{children}</p>
    </div>
  );
};

export default ImageCard;
