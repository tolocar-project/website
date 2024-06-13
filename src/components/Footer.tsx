import React from "react";
import TolocarLogoSvg from "@assets/tolocar_logo.svg?react";
import GizLogoSvgEN from "@assets/giz_logo_en.svg?react";
import GizLogoSvgUA from "@assets/giz_logo_ua.svg?react";
import GizZusammenarbeitSvg from "@assets/giz_zusammenarbeit.svg?react";
import AtStakeLogoSvg from "@assets/at_stake_logo.svg?react";
import InstagramIcon from "@assets/instagram.svg?react";
import FacebookIcon from "@assets/facebook.svg?react";
import type { IMenuItem } from "@interfaces/IMenu";

interface Props {
  className?: string;
  menu?: IMenuItem[];
  locale?: string;
}

const Footer: React.FC<Props> = ({ className, menu, locale }: Props) => {
  return (
    <div
      className={`w-full flex bg-white py-16 ${className || ""}`}
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
              <div className="mt-8 flex items-center gap-5">
                <a
                  href="https://www.instagram.com/tolocar.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-tolo-green transition-colors"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085541444754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-tolo-green transition-colors"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:gap-[10%] sm:flex-row mt-10 lg:mt-0 gap-0 text-sm sm:h-64">
            <a
                className={'mt-10 sm:mt-0 h-full flex-shrink'}
                href="https://www.giz.de"
                target="_blank">
              <GizZusammenarbeitSvg className={'h-full w-full'} />
            </a>
            <a
                className={'-mt-12 sm:mt-0 h-full flex-shrink'}
                href="https://www.giz.de"
                target="_blank">
              {locale === "ua" ? <GizLogoSvgUA className={'h-full w-full'} /> : <GizLogoSvgEN className={'h-full w-full'} />}
            </a>
            <a
                className={'h-full flex-shrink'}
                href="https://www.at-stake.org/"
                target="_blank">
              <AtStakeLogoSvg className={'h-full w-full px-2'}/>
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
