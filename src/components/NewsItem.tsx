import React from "react";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";

interface Props {
  children: React.ReactNode;
  href: string;
  image: string;
  isInstagram?: boolean;
}

const NewsItem: React.FC<Props> = ({ children, href, image, isInstagram }) => (
  <article className="block mr-3 -ml-5 pl-5 sm:-ml-8 sm:pl-8 sm:mr-6 lg:mr-8">
    <a
      href={href}
      target={isInstagram && "_blank"}
      rel={isInstagram && "noopener nofollow noreferer"}
      className="group flex flex-col h-full hover:-translate-y-4 transition-transform"
    >
      <div className="pb-[100%] h-0 w-full relative overflow-hidden">
        {isInstagram && (
          <InstagramIcon className="absolute top-4 left-4 z-10 text-white h-6 w-6" />
        )}
        <img
          src={image}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
        <ArrowIcon className="absolute bottom-4 right-4 z-10 text-white h-6 w-6" />
      </div>
      <div className="bg-white py-6 px-5 grow">
        <p className="line-clamp-3 text-lg">{children}</p>
      </div>
    </a>
  </article>
);

export default NewsItem;
