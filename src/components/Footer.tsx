import React from "react";
import { ReactComponent as TolocarLogoSvg } from "@assets/tolocar_logo.svg";
import { ReactComponent as GizLogoSvgEN } from "@assets/giz_logo_en.svg";
import { ReactComponent as GizLogoSvgUA } from "@assets/giz_logo_ua.svg";
import { ReactComponent as GizZusammenarbeitSvg } from "@assets/giz_zusammenarbeit.svg";
import { ReactComponent as HiwwLogoSvg } from "@assets/hiww_logo.svg";
import type { IMenuItem } from "@interfaces/IMenu";

interface Props {
  className?: string;
  menu?: IMenuItem[];
  locale?: string;
}

const Footer: React.FC<Props> = ({ className, menu, locale }: Props) => {
  return (
    <div
      className={`w-full lg:h-[368px] flex bg-white py-16 ${className || ""}`}
    >
      <div className="container-width flex flex-col justify-between text-black">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col gap-8 text-sm items-start">
            <div className="flex gap-4 items-center">
              <TolocarLogoSvg className="h-12" />
              The Tolocar Project
            </div>
            <div className="mt-10 lg:mt-0 ">
              <ul>
                {menu?.map(
                  (listItem) =>
                    !listItem.hideInFooter && (
                      <FooterLinkListItem
                        target={listItem.target}
                        key={listItem.title}
                      >
                        {listItem.title}
                      </FooterLinkListItem>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:gap-[10%] sm:flex-row gap-0 text-sm">
            <a
              className="mt-10 sm:mt-0 flex items-center justify-center"
              href="https://www.giz.de"
              target="_blank"
            >
              <GizZusammenarbeitSvg />
            </a>
            <a
              className="-mt-12 sm:mt-0 flex items-center justify-center"
              href="https://www.giz.de"
              target="_blank"
            >
              {locale === "ua" ? <GizLogoSvgUA /> : <GizLogoSvgEN />}
            </a>
            <a
              className="-mt-60 sm:mt-0 flex items-center justify-center"
              href="https://www.hiww.de"
              target="_blank"
            >
              <HiwwLogoSvg />
            </a>
          </div>
        </div>
        <div className="text-sm text-neutral-500 flex flex-col lg:flex-row gap-2 lg:gap-0 mt-8">
          <div>
            <a href="en/legal">Legal Notice</a>
          </div>
          <div className="hidden lg:block">&nbsp;—&nbsp;</div>
          <div>
            <a href="en/privacy">Privacy Notice</a>
          </div>
          <div className="hidden lg:block">&nbsp;—&nbsp;</div>
          <div>© 2022 Tolocar Project Operators</div>
        </div>
      </div>
    </div>
  );
};

interface FooterLinkListItemProps {
  target: string;
  children?: React.ReactNode;
}

const FooterLinkListItem: React.FC<FooterLinkListItemProps> = ({
  target,
  children,
}: FooterLinkListItemProps) => {
  return (
    <li>
      <a className="underline text-neutral-500" href={target}>
        {children}
      </a>
    </li>
  );
};

export default Footer;
