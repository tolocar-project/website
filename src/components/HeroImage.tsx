import React from "react";
import TolocarHero from "../assets/tolocar_hero.svg";

const HeroImage = ({ className }) => {
  return (
    <div className="container-width">
      <div
        className={`flex p-8 bg-center justify-center w-full h-full items-center bg-[url('/src/assets/workshop.png')] ${
          className || ""
        }`}
      >
        <img className="h-[251px]" src={TolocarHero} />
      </div>
    </div>
  );
};

export default HeroImage;
