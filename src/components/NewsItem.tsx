import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";

interface Props {
  href: string;
  image?: string;
  isInstagram?: boolean;
  green?: boolean;
  title?: string;
  description?: string;
}

const NewsItem: React.FC<Props> = ({
  href,
  image,
  isInstagram,
  green,
  title,
  description,
}) => (
  <article className="block mr-3 -ml-5 pl-5 sm:-ml-8 sm:pl-8 sm:mr-6 lg:mr-8">
    <div
      className={`group relative flex flex-col h-full hover:-translate-y-4 duration-200 transition ${
        green
          ? "bg-tolo-green hover:bg-tolo-dark-green text-white bg-[position:bottom_-16px_left_-16px] bg-[url('/bulb-cog.svg')] hover:bg-[url('/bulb-cog-dark.svg')] bg-no-repeat"
          : "bg-white text-black"
      }`}
    >
      {href && (
        <a
          href={href}
          {...(isInstagram
            ? { target: "_blank", rel: "noopener nofollow noreferer" }
            : {})}
          className=""
        >
          {green ? (
            <>
              <h1 className="font-aktiv font-semibold px-5 pt-6 text-[2.5rem]/[1.1]">{title}</h1>
              <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
            </>
          ) : (
            <div className={`pb-[100%] h-0 w-full relative overflow-hidden`}>
              {isInstagram && (
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
          )}
          <div className={`px-5 py-6 grow`}>
            <p className={`text-lg/6 ${green ? "" : "line-clamp-3"}`}>
              {description}
            </p>
          </div>
        </a>
      )}
    </div>
  </article>
);

export default NewsItem;
