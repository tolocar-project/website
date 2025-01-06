import React from "react";

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return title ? (
    <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mr-2 mb-2">
      {title}
    </span>
  ) : null;
};

export default Tag;
