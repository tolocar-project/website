import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import HeadlineUnderlined from "./HeadlineUnderlined";
import { NewsItem } from "@components";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "@assets/facebook.svg";
import { INewsItem } from "@interfaces/INews";

interface Props {
  news: Array<INewsItem>;
  headline: string;
  id?: string;
}

const NewsSlider: React.FC<Props> = ({ news, headline, ...props }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });

  // we sync api states to button states for triggering re-renders
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-12" {...props}>
      <div className="container-width mb-12 md:mb-16 flex justify-between items-center">
        <HeadlineUnderlined large variant={3}>
          {headline}
        </HeadlineUnderlined>
        <div>
          <button
            className={`p-3 rotate-180 transition-colors ${
              prevBtnEnabled ? "hover:text-tolo-green" : "text-neutral-300"
            }`}
            disabled={!prevBtnEnabled}
            onClick={() => emblaApi.scrollPrev()}
            type="button"
          >
            <ArrowIcon className="w-4 h-4" />
          </button>
          <button
            className={`p-3 transition-colors ${
              nextBtnEnabled ? "hover:text-tolo-green" : "text-neutral-300"
            }`}
            disabled={!nextBtnEnabled}
            onClick={() => emblaApi.scrollNext()}
            type="button"
          >
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden -mt-4" ref={emblaRef}>
        <div className="grid cursor-grab pt-4 active:cursor-grabbing grid-flow-col auto-cols-[80%] xl:auto-cols-[25%] md:auto-cols-[33%] sm:auto-cols-[40%] container-width">
          {news && news.map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              href={item.target}
              isInstagram={item.instagram}
            >
              {item.title}
            </NewsItem>
          ))}
        </div>
      </div>
      <div className="container-width mt-12 flex items-center justify-end">
        <span className="text-tolo-green mr-5 text-lg">Find all news on</span>
        <a
          href="https://www.instagram.com/tolocar.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-tolo-green mr-5 transition-colors"
        >
          <InstagramIcon className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085541444754"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-tolo-green mr-5 transition-colors"
        >
          <FacebookIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default NewsSlider;
