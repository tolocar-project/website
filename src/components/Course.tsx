import React from "react";
import { ArrowSvg } from "@components";

interface Props {
  className?: string;
  course: {
    title: string;
    img: string;
    imgAlt?: string;
    items: [{ target: string; title: string }];
  };
}

const Course: React.FC<Props> = ({ className, course, imgAlt }) => {
  return (
    <div className={`border-b-[1px] border-black/10 ${className || ""}`}>
      <div className="relative">
        <img
          src={course.img}
          alt={imgAlt}
          className="w-full h-full object-fit aspect-[12/5]"
        />
        <h2 className="absolute bottom-6 left-6 bg-black bg-opacity-80 text-white rounded-md px-2 py-[6px] text-[15px] font-bold uppercase">
          {course.title}
        </h2>
      </div>
      {course?.items && (
        <div className="flex flex-col gap-8 mt-8 mb-16">
          {course.items.map((item, index) => (
            <a href={item.target}>
              <h3 key={index} className="flex items-center text-2xl font-bold">
                {item.title}
                <ArrowSvg className="ml-4 text-tolo-green w-6 h-6" />
              </h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
