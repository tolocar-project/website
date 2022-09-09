import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";

interface Props {
  className?: string;
}

const linkListItems = [
  {
    title: "Our mission",
    target: "#",
  },
  {
    title: "What makes a Tolocar",
    target: "#",
  },
  {
    title: "Community Ecosystem",
    target: "#",
  },
  {
    title: "Contact",
    target: "#",
  },
];

const Footer: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`w-full lg:h-[368px] flex bg-tolo-dark-grey py-16 ${
        className || ""
      }`}
    >
      <div className="container-width flex flex-col justify-between text-white">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col text-sm items-start">
            <img className="h-16 mb-4" src={TolocarLogoSvg} />
            The Tolocar Project
          </div>
          <div className="flex-1 flex flex-col lg:flex-row text-sm">
            <div className="flex-1 mt-10 lg:mt-0 ">
              <h4 className="mb-5">Overview</h4>
              <ul>
                {linkListItems.map((listItem) => (
                  <FooterLinkListItem target={listItem.target}>
                    {listItem.title}
                  </FooterLinkListItem>
                ))}
              </ul>
            </div>
            <div className="flex-1 mt-10 lg:mt-0">
              <h4 className="mb-5">Operated By</h4>
            </div>
            <div className="flex-1 mt-10 lg:mt-0">
              <h4 className="mb-5">Initiated Through</h4>
            </div>
          </div>
        </div>
        <div className="text-sm text-tolo-footer-grey flex flex-col lg:flex-row">
          <div>Imprint</div>
          <div className="hidden lg:block">&nbsp;—&nbsp;</div>
          <div>Privacy Policy</div>
          <div className="hidden lg:block">&nbsp;—&nbsp;</div>
          <div>© 2022 Tolocar Project Operators</div>
        </div>
      </div>
    </div>
  );
};

interface FooterLinkListItemProps {
  target: string;
  children?: React.ReactNode
}

const FooterLinkListItem: React.FC<FooterLinkListItemProps> = ({
  target,
  children,
}: FooterLinkListItemProps) => {
  return (
    <li>
      <a className="underline text-tolo-link-grey" href={target}>
        {children}
      </a>
    </li>
  );
};

export default Footer;
