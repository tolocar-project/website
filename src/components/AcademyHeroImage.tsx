import React from "react";

interface Props {
  className?: string;
  title: string;
  teaser?: string;
  category?: string;
  img: string;
}

const AcademyHeroImage: React.FC<Props> = ({
  className,
  title,
  teaser,
  category,
  img,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`relative w-full h-[382px] bg-blend-darken bg-black/40 overflow-hidden bg-cover bg-center ${
        className || ""
      }`}
    >
      <div className="p-12 text-white absolute h-full flex flex-col items-start">
        {category && (
          <h2 className="bg-black/30 backdrop-blur-sm text-white rounded-md px-2 py-[6px] leading-none text-[15px] font-bold uppercase">
            {category}
          </h2>
        )}

        <h1 className="mt-4 text-5xl font-bold">{title}</h1>
        {teaser && (
          <p className="mt-8 text-2xl font-medium w-full md:w-2/5">{teaser}</p>
        )}
      </div>
    </div>
  );
};

export default AcademyHeroImage;
