import React from "react";
import TolocarHero from "../assets/tolocar_hero.svg";

interface Props {
  className?: string;
}

const HeroImage: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className="container-width">
      <div
        className={`grayscale flex p-8 bg-center justify-center w-full h-full items-center bg-[url('/src/assets/Header.jpg')] ${
          className || ""
        }`}
      >
        <img className="h-[251px]" src={TolocarHero} />
      </div>
    </div>
  );
};

export default HeroImage;
