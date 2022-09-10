import React from "react";
interface Props {
  className?: string;
  images?: Array<string>;
  caption?: string;
  subCaption?: string;
}

const defaultImages = [
  "https://picsum.photos/id/1047/1920/1080",
  "https://picsum.photos/id/1048/1920/1080",
  "https://picsum.photos/id/1045/1920/1080",
  "https://picsum.photos/id/1042/1920/1080",
];

const ImageGrid: React.FC<Props> = ({
  images = defaultImages,
  className,
  caption,
  subCaption,
}: Props) => {
  const imgClasses = "w-full h-full object-cover";
  return (
    <>
      <div
        className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-[342px] z-10 ${
          className || ""
        }`}
      >
        <div className="flex-[2] flex gap-4 lg:gap-6">
          <div className="flex-[2]">
            <img className={imgClasses} src={images[0]} />
          </div>
          <div className="flex-1">
            <img className={imgClasses} src={images[1]} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:gap-6">
          <div className="flex-1 overflow-hidden">
            <img className={imgClasses} src={images[2]} />
          </div>
          <div className="flex-1 overflow-hidden">
            <img className={imgClasses} src={images[3]} />
          </div>
        </div>
      </div>
      {caption && (
        <div className="flex flex-col items-end text-tolo-link-grey z-10 mt-4 text-lg leading-6">
          {caption}
          {subCaption && (
            <>
              <br />
              <span className="text-tolo-footer-grey">{subCaption}</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGrid;
