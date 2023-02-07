import React from "react";
import type { IProjectsFrontmatter } from "@interfaces/IProjects";
import { ReactComponent as ArrowUpIcon } from "@assets/arrow-up.svg";
import { LinkWrapper } from "@components";

interface Props extends IProjectsFrontmatter {
  className?: string;
  href?: string;
}

const ProjectCard: React.FC<Props> = ({
  className,
  title,
  img,
  teaser,
  href,
}) => {
  return (
    <LinkWrapper
      condition={Boolean(href)}
      wrapper={(children) => <a href={href}>{children}</a>}
    >
      <div className={`h-[406px] relative ${className || ""}`}>
        <img
          className="h-full w-full object-cover aspect-[200/203]"
          src={img}
          alt="Project photo"
        />
        <div className="h-full w-full absolute top-0 projects-gradient" />
        <div className="absolute bottom-0 flex flex-col gap-2 w-full h-full p-8 text-white items-start justify-end">
          {title && (
            <h1 className="font-semibold text-2xl leading-7 font-aktiv">
              {title}
              <ArrowUpIcon className="h-3.5 w-3.5 ml-4 inline-block" />
            </h1>
          )}
          {teaser && <p className="font-medium text-lg leading-7">{teaser}</p>}
        </div>
      </div>
    </LinkWrapper>
  );
};

export default ProjectCard;
