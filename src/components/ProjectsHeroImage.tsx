import React from "react";
import type { IProjectsFrontmatter } from "@interfaces/IProjects";

interface Props extends IProjectsFrontmatter {
  className?: string;
}

const ProjectsHeroImage: React.FC<Props> = ({
  className,
  title,
  teaser,
  img,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`relative w-full h-[308px] bg-blend-darken bg-black/40 overflow-hidden bg-cover bg-center ${
        className || ""
      }`}
    >
      <div className="px-6 pb-[29px] md:p-12 text-white absolute h-full flex flex-col items-start justify-end lg:justify-center gap-2 lg:gap-8">
        <h1 className="text-[32px] leading-10 lg:text-5xl font-semibold lg:leading-[52px] font-aktiv">
          {title}
        </h1>
        {teaser && (
          <p className="font-inter lg:font-aktiv text-base lg:text-2xl font-medium w-full md:w-2/5">
            {teaser}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsHeroImage;
