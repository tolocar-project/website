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
  return (
    <>
      <ImageGridWrapper className={className}>
        {images.length === 4 && <FourPictureGrid images={images} />}
        {images.length === 2 && <TwoPictureGrid images={images} />}
      </ImageGridWrapper>
      {caption && (
        <div className="flex flex-col items-end text-neutral-300 z-10 mt-4 text-lg leading-6">
          {caption}
          {subCaption && (
            <>
              <br />
              <span className="text-neutral-500">{subCaption}</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

interface ImageGridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ImageGridWrapper: React.FC<ImageGridWrapperProps> = ({
  children,
  className,
}: ImageGridWrapperProps) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-[342px] z-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

interface PictureGridProps {
  images: string[];
}

const FourPictureGrid: React.FC<PictureGridProps> = ({
  images,
}: PictureGridProps) => {
  const imgClasses = "w-full h-full object-cover";
  return (
    <>
      <div className="lg:flex-[77] flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-[46]">
          <img className={imgClasses} src={images[0]} />
        </div>
        <div className="lg:flex-[28] flex flex-col gap-4 lg:gap-6">
          <div className="flex-1 overflow-hidden">
            <img className={imgClasses} src={images[1]} />
          </div>
          <div className="flex-1 overflow-hidden">
            <img className={imgClasses} src={images[2]} />
          </div>
        </div>
      </div>
      <div className="lg:flex-[21] h-72 lg:h-auto">
        <img className={imgClasses} src={images[3]} />
      </div>
    </>
  );
};

const TwoPictureGrid: React.FC<PictureGridProps> = ({
  images,
}: PictureGridProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 z-10">
      <img
        className="flex-1 lg:w-[525px] h-full object-cover"
        src={images[0]}
      />
      <img
        className="flex-1 lg:w-[525px] h-full object-cover"
        src={images[1]}
      />
    </div>
  );
};

export default ImageGrid;
