import React from "react";
import ArrowIcon from "@assets/arrow.svg?react";
import InstagramIcon from "@assets/instagram.svg?react";
import { ConditionalWrapper } from "@components";

type ItemType = "cta" | "instagram" | "fullImage";

interface NewsItemProps {
  href: string;
  image?: string;
  title?: string;
  description?: string;
  type?: ItemType;
  newTab?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({
  href,
  image,
  title,
  description,
  type = "instagram",
  newTab,
}) => {
  const containerClasses: Record<ItemType | "common", string> = {
    common:
      "group relative flex flex-col h-full hover:-translate-y-4 duration-200 transition",
    cta: "bg-tolo-green hover:bg-tolo-dark-green text-white bg-[position:bottom_-16px_left_-16px] bg-[url('/bulb-cog.svg')] hover:bg-[url('/bulb-cog-dark.svg')] bg-no-repeat",
    instagram: "bg-white text-black",
    fullImage: "",
  };

  const contentComponent: Record<ItemType, React.ReactElement> = {
    cta: <NewsItemContentCta title={title} description={description} />,
    instagram: (
      <NewsItemContentSocial image={image} description={description} />
    ),
    fullImage: <NewsItemFullImage fullImage={image} alt={description} />,
  };

  return (
    <article className="block mr-3 -ml-5 pl-5 sm:-ml-8 sm:pl-8 sm:mr-6 lg:mr-8">
      <div className={containerClasses.common + " " + containerClasses[type]}>
        <ConditionalWrapper
          condition={Boolean(href)}
          wrapper={(children) => (
            <a
              href={href}
              {...(newTab
                ? { target: "_blank", rel: "noopener nofollow noreferer" }
                : {})}
              className=""
            >
              {children}
            </a>
          )}
        >
          <>{contentComponent[type]}</>
        </ConditionalWrapper>
      </div>
    </article>
  );
};

export default NewsItem;

interface NewsItemContentSocialProps {
  showIcon?: boolean;
  image?: string;
  description?: string;
}
const NewsItemContentSocial: React.FC<NewsItemContentSocialProps> = ({
  image,
  showIcon = true,
  description,
}) => {
  return (
    <>
      <div className={`pb-[100%] h-0 w-full relative overflow-hidden`}>
        {showIcon && (
          <InstagramIcon className="absolute top-4 left-4 z-10 text-white h-6 w-6" />
        )}
        {image && (
          <img
            src={image}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
        )}
        <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
      </div>
      <div className={`px-5 py-6 grow`}>
        {description && (
          <p className={`text-lg/6 line-clamp-3`}>{description}</p>
        )}
      </div>
    </>
  );
};

interface NewsItemContentCtaProps {
  title?: string;
  description?: string;
}
const NewsItemContentCta: React.FC<NewsItemContentCtaProps> = ({
  title,
  description,
}) => {
  return (
    <>
      {title && (
        <h1 className="font-aktiv font-semibold px-5 pt-6 text-[2.5rem]/[1.1]">
          {title}
        </h1>
      )}
      <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
      <div className={`px-5 py-6 grow`}>
        {description && <p className={`text-lg/6`}>{description}</p>}
      </div>
    </>
  );
};

interface NewsItemContentCtaProps {
  fullImage?: string;
  alt?: string;
}
const NewsItemFullImage: React.FC<NewsItemContentCtaProps> = ({
  fullImage,
  alt,
}) => {
  return (
    <>
      {fullImage && (
        <img
          src={fullImage}
          {...(alt ? { alt } : {})}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      )}
      <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
    </>
  );
};
