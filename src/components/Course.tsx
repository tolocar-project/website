import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import GithubSlugger from "github-slugger";

interface Props {
  className?: string;
  course: {
    title: string;
    img: string;
    imgAlt?: string;
    items: { target: string; title: string }[] | null;
  };
}

const Course: React.FC<Props> = ({ className, course }) => {
  const slugger = new GithubSlugger();
  return (
    <div
      id={slugger.slug(course.title)}
      className={`border-b-[1px] border-black/10 ${className || ""}`}
    >
      <div className="relative">
        <img
          src={course.img}
          alt={course.imgAlt}
          className="w-full h-full object-cover outline outline-offset-[-2px] outline-2 outline-black/15 aspect-[12/5]"
        />

        <h2 className="absolute bottom-6 left-6 bg-black/80 leading-none text-white rounded-md px-2 py-[6px] text-[15px] font-semibold uppercase font-aktiv">
          {course.title}
        </h2>
      </div>
      {course?.items && (
        <div className="flex flex-col gap-8 mt-8 mb-16">
          {course.items.map((item, index) => (
            <a href={item.target} key={index}>
              <h3 className="flex items-center text-2xl font-semibold font-aktiv">
                {item.title}
                <ArrowIcon className="shrink-0 ml-4 text-tolo-green w-6 h-6" />
              </h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
