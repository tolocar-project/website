import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";

interface Props {
  className?: string;
}

const ImageGrid: React.FC<Props> = ({ className }: Props) => {
  const imgClasses = "w-full h-full object-cover";
  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-[342px] z-10 ${
        className || ""
      }`}
    >
      <div className="flex-[2] flex gap-4 lg:gap-6">
        <div className="flex-[2]">
          <img
            className={imgClasses}
            src="https://picsum.photos/id/1047/1920/1080"
          />
        </div>
        <div className="flex-1">
          <img
            className={imgClasses}
            src="https://picsum.photos/id/1048/1920/1080"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 lg:gap-6">
        <div className="flex-1 overflow-hidden">
          <img
            className={imgClasses}
            src="https://picsum.photos/id/1045/1920/1080"
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <img
            className={imgClasses}
            src="https://picsum.photos/id/1042/1920/1080"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
