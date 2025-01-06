import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowIcon from "@assets/arrow.svg?react";
import DotIcon from "@assets/dot-icon.svg?react";

interface InterventionImageCarouselProps {
  images: Array<string>;
  className?: string;
  dark?: boolean;
  indicators?: boolean;
}

const InterventionImageCarousel: React.FC<InterventionImageCarouselProps> = ({
  images,
  className,
  dark,
  indicators = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // we sync api states to button states for triggering re-renders
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className={`pt-8 md:pt-6 pb-7 md:pb-4 not-prose ${className || ""}`}>
      {Boolean(images.length) && (
        <div className="flex flex-col justify-between items-center">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex flex-row h-full aspect-[1.91/1] shrink-0">
              {images.map((image, index) => {
                return (
                  <div className="h-full w-full flex-[0_0_100%]" key={index}>
                    <img
                      src={image}
                      className="h-full w-full object-cover"
                      alt="Photos"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            {indicators && (
              <div className="flex">
                {scrollSnaps.map((_, index) => (
                  <DotIndicator
                    dark={dark}
                    key={index}
                    isActive={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            )}
            <div className="flex gap-4">
              <button
                className={`py-3 rotate-180 transition-colors hover:text-tolo-green disabled:text-neutral-300 ${
                  dark ? "text-white" : "text-black"
                }`}
                disabled={!prevBtnEnabled}
                onClick={scrollPrev}
              >
                <ArrowIcon className="w-4 h-4" />
              </button>
              <button
                className={`py-3 transition-colors hover:text-tolo-green disabled:text-neutral-300 ${
                  dark ? "text-white" : "text-black"
                }`}
                disabled={!nextBtnEnabled}
                onClick={(scrollNext)}
              >
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InterventionImageCarousel;

const DotIndicator = ({
  isActive,
  onClick,
  dark,
}: {
  isActive?: boolean;
  onClick?: () => void;
  dark?: boolean;
}) => {
  return (
    <div
      className={`p-1 ${isActive ? "cursor-auto" : "cursor-pointer"}`}
      onClick={onClick}
    >
      <DotIcon
        className={`${
          isActive
            ? dark
              ? "text-white"
              : "text-neutral-800"
            : "text-neutral-300"
        }`}
      />
    </div>
  );
};
