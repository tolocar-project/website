import React, { useState, useEffect } from "react";
import { ReactComponent as TolocarLogoSvg } from "@assets/tolocar_logo.svg";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";
import LanguageUtils from "@util/LanguageUtils";
import type { IMenuItem } from "@interfaces/IMenu";

interface Props {
  className?: string;
  baseUrl?: string;
  path?: string;
  menu?: IMenuItem[];
  locale: string;
  dark?: boolean;
}

const Navigation: React.FC<Props> = ({
  menu,
  baseUrl = "/",
  className,
  path,
  locale,
  dark,
}: Props) => {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);
  const scrollThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowOverlayMenu(!showOverlayMenu);
  };

  // Changing the language requires only to change the locale in the URL
  // The rest (slug) will be handled by redirect logic
  const changeLanguage = (newLanguage: string) => {
    LanguageUtils.setLanguage(newLanguage);
    const pathWithoutBaseUrl = path
      ?.replace(baseUrl, "")
      ?.split("/")
      .filter(Boolean)
      .slice(1)
      .join("/");
    const newLocation = `${baseUrl}${newLanguage}/${pathWithoutBaseUrl}`;

    window.location.pathname = newLocation;
  };

  const Image = (
    <div
      className={`transition-height duration-500 ease-in-out ${
        scrollTop < scrollThreshold ? "h-8 lg:h-12" : "h-8"
      }`}
    >
      <TolocarLogoSvg className="h-full w-auto" />
    </div>
  );

  return (
    <div
      className={`transition-height duration-500 ease-in-out w-full ${
        dark ? "bg-neutral-50" : "bg-white"
      } ${
        scrollTop < scrollThreshold ? "h-20 lg:h-32" : "h-20"
      } fixed flex items-center justify-center top-0 z-30 ${className || ""}`}
    >
      <div className="container-width justify-between flex">
        {baseUrl ? (
          <a className="z-20" href={baseUrl}>
            {Image}
          </a>
        ) : (
          Image
        )}
        <nav className="hidden lg:flex">
          <ul className="items-center flex gap-2 text-neutral-500 font-medium font-aktiv text-[15px]">
            {menu?.map(
              (item) =>
                !item.hideInHeader && (
                  <MenuListItem key={item.title} target={item.target}>
                    {item.title}
                  </MenuListItem>
                )
            )}
            <ul className="flex items-center">
              <LanguageSwitcherItem
                onClick={() => {
                  changeLanguage("ua");
                }}
                isSelected={locale === "ua"}
              >
                UA
              </LanguageSwitcherItem>
              <span className="text-base">/</span>
              <LanguageSwitcherItem
                onClick={() => {
                  changeLanguage("en");
                }}
                isSelected={locale === "en"}
              >
                EN
              </LanguageSwitcherItem>
            </ul>
          </ul>
        </nav>
        <div className="flex items-center lg:hidden bg-white box-border z-20">
          <HamburgerButton onClick={toggleMenu} isOpen={showOverlayMenu} />
        </div>
        <OverlayMenu
          show={showOverlayMenu}
          toggleMenu={toggleMenu}
          menu={menu}
        />
        {showOverlayMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/60" />
        )}
      </div>
    </div>
  );
};

interface HamburgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  isOpen,
}) => {
  return (
    <button
      type="button"
      className="p-2 inline-flex items-center justify-center text-neutral-400"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Toggle main menu</span>
      {isOpen ? (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

interface MenuListItemProps {
  target: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  target,
  onClick,
  className,
  children,
}: MenuListItemProps) => (
  <li
    className={`flex-shrink-0 md:rounded-md overflow-hidden ${className || ""}`}
  >
    <a href={target} onClick={onClick} className="md:hover:text-neutral-800">
      <div className="font-inter text-[15px] flex items-center md:text-base md:font-medium px-0 md:px-3 py-2 md:hover:bg-neutral-50 text-2xl font-bold">
        {children}
        <ArrowIcon className="md:hidden shrink-0 ml-4 text-tolo-green w-6 h-6" />
      </div>
    </a>
  </li>
);

interface OverlayMenuProps {
  show: boolean;
  toggleMenu: () => void;
  menu?: IMenuItem[];
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({
  menu,
  show,
  toggleMenu,
}) => {
  return (
    <div
      className={`fixed z-10 top-0 inset-x-0 transition transform origin-top-right${
        show ? "" : " hidden"
      }`}
    >
      <div className="bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="mt-16 py-10 px-5">
          <ul className="flex flex-col gap-2 md:gap-5">
            {menu?.map((item) => (
              <MenuListItem
                key={item.title}
                target={item.target}
                onClick={toggleMenu}
              >
                {item.title}
              </MenuListItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface LanguageSwitcherItemProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isSelected?: boolean;
}
const LanguageSwitcherItem: React.FC<LanguageSwitcherItemProps> = ({
  className,
  onClick,
  children,
  isSelected,
}) => {
  return (
    <li
      className={`flex-shrink-0 md:rounded-md overflow-hidden ${
        className || ""
      }`}
    >
      <a
        onClick={isSelected ? undefined : onClick}
        className={`md:hover:text-neutral-800 ${
          isSelected ? "text-neutral-800 " : "cursor-pointer "
        }`}
      >
        <div className="flex text-[15px] font-inter items-center md:text-base md:font-medium md:px-1 lg:px-3 md:py-2 text-2xl font-bold">
          {children}
          <ArrowIcon className="md:hidden shrink-0 ml-4 text-tolo-green w-6 h-6" />
        </div>
      </a>
    </li>
  );
};

export default Navigation;
