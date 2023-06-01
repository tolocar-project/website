import React from "react";
import { HeadlineUnderlined } from "@components";

interface Props {
  className?: string;
  title?: string;
  text?: string;
}

const ProjectsHeader: React.FC<Props> = ({ className, title, text }: Props) => {
  return (
    <div
      className={`w-full h-full md:h-[614px] bg-illustration-projects bg-no-repeat bg-[right_bottom_0] sm:bg-[right_top_100px] bg-neutral-50 mt-10 md:mt-20 pt-16 lg:pt-20 lg:pb-16 ${
        className || ""
      }`}
    >
      <div className="container-width flex flex-col gap-y-5 lg:gap-y-6 items-start sm:mb-16 mb-64 flex-1">
        <HeadlineUnderlined large variant={8}>
          {title}
        </HeadlineUnderlined>
        <div className="pb-16 md:pb-24 md:w-[60%] h-full items-start text-base leading-6 lg:text-lg lg:leading-7 text-neutral-500 font-normal">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
