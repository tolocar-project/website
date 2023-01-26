import React from "react";

const Tag = ({ title }: { title: string }) => {
  return (
    <span className="inline-block bg-tolo-green rounded-full px-4 py-1 text-lg leading-6 font-medium text-white mr-2 mb-2">
      {title}
    </span>
  );
};

export default Tag;
