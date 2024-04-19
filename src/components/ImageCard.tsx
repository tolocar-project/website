import React from "react";
import PlayIcon from "@assets/icons/play.svg?react";

export interface ImageCardProps {
  children: React.ReactNode;
  className?: string;
  imgClassName?: string;
  title: string;
  img: string;
  aspect?: string;
  onImageClick?: () => void;
  playIcon?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  children,
  img,
  title,
  className,
  aspect,
  imgClassName,
  onImageClick,
  playIcon,
}) => {
  return (
    <div className={`flex-1 flex flex-col pb-16 ${className || ""}`}>
      <div className="relative overflow-hidden rounded-md">
        <img
          src={img}
          className={`w-full aspect-[96/71] object-cover ${
            imgClassName || ""
          }`}
          {...(aspect ? { style: { aspectRatio: aspect } } : {})}
          onClick={onImageClick}
        />
        {playIcon && (
          <PlayIcon className="text-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-24 h-24 shadow-sm" />
        )}
      </div>
      <h3 className="text-2xl leading-7 font-semibold text-white mt-8 font-aktiv">
        {title}
      </h3>
      <p className="mt-3 text-lg leading-6 text-neutral-300">{children}</p>
    </div>
  );
};

export default ImageCard;
