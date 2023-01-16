import React from "react";
import { ReactComponent as TolocarHero } from "@assets/tolocar_hero.svg";

interface Props {
  className?: string;
}

const HeroImage: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className="container-width mt-8 sm:mt-20">
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
