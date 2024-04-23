import React, { useState } from "react";
import ImageCard from "./ImageCard";
import type { ImageCardProps } from "./ImageCard";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface VideoCardProps extends ImageCardProps {
  videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  children,
  videoId,
  title,
  ...rest
}) => {
  const [showVideoLightbox, setShowVideoLightbox] = useState(false);
  return (
    <>
      <ImageCard
        {...rest}
        onImageClick={() => {
          setShowVideoLightbox(true);
        }}
        className="cursor-pointer"
        playIcon={true}
        imgClassName="hover:scale-110 duration-200 transition object-top"
        title={title}
      >
        {children}
      </ImageCard>
      {showVideoLightbox && (
        <div className="fixed inset-0 bg-black/60 flex flex-col gap-4 items-center justify-center p-8 sm:p-32 xl:p-96 z-50" id="lightbox-video">
          <button
            aria-label="Close Video Overlay"
            className="self-end text-white"
            onClick={() => {
              setShowVideoLightbox(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <LiteYouTubeEmbed
            title={title}
            poster="maxresdefault"
            id={videoId}
            wrapperClass="yt-lite w-full"
          />
        </div>
      )}
    </>
  );
};

export default VideoCard;
