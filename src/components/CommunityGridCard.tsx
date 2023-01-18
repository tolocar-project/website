import React from "react";

interface Props {
  className?: string;
  title?: string;
  text?: string;
  target?: string;
  url?: string;
}

const CommunityGridCard: React.FC<Props> = ({
  className,
  title,
  text,
  target,
  url,
}: Props) => {
  return (
    <div className={`col-span-1 bg-neutral-50 ${className}`}>
      <div className="flex w-full space-x-6 p-6">
        <div className="flex-1">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-medium text-neutral-900">{title}</h2>
            <p className="text-lg text-neutral-500 pb-3">{text}</p>
          </div>
          {target && (
            <a
              href={target}
              target={target && "_blank"}
              className="text-lg font-medium text-tolo-green"
            >
              {url}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityGridCard;
