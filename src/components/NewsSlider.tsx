import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import HeadlineUnderlined from "./HeadlineUnderlined";
import { ArrowSvg, FacebookIcon, InstagramIcon, NewsItem } from "@components";

interface Props {
  children: React.ReactNode;
  headline: string;
  id?: string;
}

const NewsSlider: React.FC<Props> = ({ children, headline, ...props }) => {
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
          >
            <ArrowSvg className="w-4 h-4" />
          </button>
          <button
            className={`p-3 transition-colors ${
              nextBtnEnabled ? "hover:text-tolo-green" : "text-neutral-300"
            }`}
            disabled={!nextBtnEnabled}
            onClick={() => emblaApi.scrollNext()}
          >
            <ArrowSvg className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden -mt-4" ref={emblaRef}>
        <div className="grid cursor-grab pt-4 active:cursor-grabbing grid-flow-col auto-cols-[80%] xl:auto-cols-[25%] md:auto-cols-[33%] sm:auto-cols-[40%] container-width">
          <NewsItem
            image="/images/news/fabrication-for-beginners.jpeg"
            href="https://www.instagram.com/p/CmO7AJ3Mqog/"
            isInstagram
          >
            School kids, veterans, and IDPs together learned digital fabrication
            for beginners.
          </NewsItem>
          <NewsItem
            image="/images/news/new-year-workshop.jpeg"
            href="https://www.instagram.com/p/CmJLcS8MKYl/"
            isInstagram
          >
            Tolocars held a workshop on new-year decoration in darkness the
            other day.
          </NewsItem>
          <NewsItem
            image="/images/news/tinkercad-workshop.jpeg"
            href="https://www.instagram.com/p/Cl1c101sWTq/"
            isInstagram
          >
            3-day workshop for veteran amputees and school students in
            Truskavets in Lviv region.
          </NewsItem>
          <NewsItem
            image="/images/news/desk-with-lionella.jpg"
            href="https://www.instagram.com/p/Clq2PEAsHpZ/"
            isInstagram
          >
            Operator Denis had made a desk together with Lionella.
          </NewsItem>
          <NewsItem
            image="/images/news/heating-mats.jpeg"
            href="https://www.instagram.com/p/ClidJzaM7S3/"
            isInstagram
          >
            Together with 11 participants in the electricity workshop, we made
            heating mats.
          </NewsItem>
          <NewsItem
            image="/images/news/hiww-tolocars.jpeg"
            href="https://www.instagram.com/p/ClYJLYFsmeG/"
            isInstagram
          >
            Two tolocars by HIWW, joined our fleet and drove on a tour in
            October.
          </NewsItem>
          <NewsItem
            image="/images/news/klub-dobrodiiv.jpeg"
            href="https://www.instagram.com/p/ClRNckcMjyp/"
            isInstagram
          >
            Klub Dobrodiiv invited TOLOCAR to run two electronic workshops in
            November.
          </NewsItem>
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
