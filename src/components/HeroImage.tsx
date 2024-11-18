import React from "react";
import TolocarHero from "@assets/tolocar_hero.svg?react";

interface HeroImageProps {
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ className }) => {
  return (
    <div className="container-width mt-20 md:mt-32" id="top">
      <div
        className={`grayscale flex p-8 bg-center justify-center w-full h-full items-center bg-[url('/src/assets/Header.jpg')] ${
          className || ""
        }`}
      >
        <TolocarHero className="h-[251px]" />
      </div>
    </div>
  );
};

export default HeroImage;
