import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";
import DeutscheZusammenArbeitImg from "../assets/deutsche_zusammenarbeit.png";
import GizUkraineImg from "../assets/giz_ukraine.png";
import HiwwLogoImg from "../assets/hiww_logo.svg";
import type { IMenuItem } from "@interfaces/IMenu";

interface Props {
  className?: string;
  menu?: IMenuItem[];
}

const Footer: React.FC<Props> = ({ className, menu }: Props) => {
  return (
    <div
      className={`w-full lg:h-[368px] flex bg-white py-16 ${className || ""}`}
    >
      <div className="container-width flex flex-col justify-between text-black">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col gap-8 text-sm items-start">
            <div className="flex gap-4 items-center">
              <img className="h-12" src={TolocarLogoSvg} />
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
          <div className="flex-1 flex flex-col gap-8 lg:flex-row text-sm mt-8">
            <div className="flex-1 mt-10 lg:mt-0 flex items-center justify-center">
              <a className="w-full h-auto" href="https://www.hiww.de/">
                <img className="max-w-xs w-full h-auto" src={HiwwLogoImg} />
              </a>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 flex items-center justify-center">
              <a className="w-full h-auto" href="https://www.bmz.de/">
                <img
                  className="max-w-xs w-full h-auto"
                  src={DeutscheZusammenArbeitImg}
                />
              </a>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 flex items-center justify-center">
              <a className="w-full h-auto" href="https://www.giz.de/">
                <img className="max-w-xs w-full h-auto" src={GizUkraineImg} />
              </a>
            </div>
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
