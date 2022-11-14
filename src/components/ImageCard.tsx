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
      <img src={img} className="w-full aspect-[96/71] object-cover"/>
      <h3 className="text-2xl leading-7 font-semibold text-white mt-8 font-aktiv">{title}</h3>
      <p className="mt-3 text-lg leading-6 text-neutral-300">{children}</p>
    </div>
  );
};

export default ImageCard;
