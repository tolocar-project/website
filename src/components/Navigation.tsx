import React, { useState, useEffect } from "react";
import TolocarLogoSvg from "@assets/tolocar_logo.svg?react";
import ChevronIcon from "@assets/chevron.svg?react";
import type { IMenuItem } from "@interfaces/IMenu";
import { LanguageSwitcher } from "@components";
import useCurrentWidth from "@util/useCurrentWidth";
import ArrowTopRightOnSquare from "@assets/icons/arrow-top-right-on-square.svg?react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

interface NavigationProps {
  className?: string;
  baseUrl?: string;
  path?: string;
  locale: string;
  menu?: IMenuItem[];
  dark?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  menu,
  baseUrl = "/",
  path,
  locale,
  className,
  dark,
}) => {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);
  const scrollThreshold = 10;

  const [hasWhiteBackground, setHasWhiteBackground] = useState(false);

  const width = useCurrentWidth();

  useEffect(() => {
    if (width > 768) {
      setShowOverlayMenu(false);
    }
  }, [width]);

  useEffect(() => {
    //@ts-expect-error
    const changeBackgroundColor = (e) => {
      setHasWhiteBackground(e.target.scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", changeBackgroundColor, true);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [scrollTop]);

  useEffect(() => {
    //@ts-expect-error
    const handleScroll = (e) => {
      setScrollTop(e.target.scrollTop);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  const toggleMenu = () => {
    setShowOverlayMenu(!showOverlayMenu);
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
        dark ? (hasWhiteBackground ? "bg-white" : "bg-neutral-50") : "bg-white"
      } ${
        scrollTop < scrollThreshold ? "h-20 lg:h-32" : "h-20"
      } fixed flex items-center justify-center top-0 z-30 ${className || ""}`}
    >
      <div className="container-width justify-between flex items-center">
        {baseUrl ? (
          <a className="z-20" href={baseUrl}>
            {Image}
          </a>
        ) : (
          Image
        )}
        <nav>
          <PopoverGroup className="hidden md:flex gap-6" as="ul">
            {menu?.map((menuItem) => {
              const itemClasses =
                "font-aktiv md:font-inter flex items-center md:text-base md:font-medium px-0 md:px-3 py-2 md:hover:bg-neutral-50 text-2xl font-bold gap-2 md:rounded-md";
              return (
                <Popover
                  className="relative group"
                  key={menuItem.title}
                  as="li"
                >
                  {menuItem.children?.length ? (
                    <PopoverButton
                      className={itemClasses + " focus-visible:outline-none"}
                    >
                      <span>{menuItem?.title}</span>
                      {menuItem.children?.length && (
                        <ChevronIcon
                          className={`w-4 h-4 transition-all transform group-data-[open]:rotate-180`}
                        />
                      )}
                    </PopoverButton>
                  ) : (
                    <a
                      key={menuItem.title}
                      href={menuItem.target}
                      {...(menuItem.newTab ? { target: "_blank" } : {})}
                      className={itemClasses}
                    >
                      {menuItem.title}
                    </a>
                  )}

                  {menuItem.children?.length && (
                    <PopoverPanel
                      transition
                      className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="w-56 shrink bg-white p-4 text-sm/6 font-semibold text-neutral-500 shadow-lg ring-1 ring-neutral-50">
                        {menuItem.children?.map((subMenuItem) => (
                          <a
                            key={subMenuItem.title}
                            href={subMenuItem.target}
                            {...(subMenuItem.newTab
                              ? { target: "_blank" }
                              : {})}
                            className="flex gap-2 items-center p-2 hover:text-tolo-black"
                          >
                            {subMenuItem.title}
                            {subMenuItem.newTab && (
                              <ArrowTopRightOnSquare className="size-4" />
                            )}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  )}
                </Popover>
              );
            })}
            <LanguageSwitcher
              path={path}
              locale={locale}
              className="gap-2 lg:pl-[38px]"
              baseUrl={baseUrl}
            />
          </PopoverGroup>
        </nav>
        <div className="flex items-center md:hidden bg-white box-border z-20 px-1">
          {showOverlayMenu && (
            <LanguageSwitcher
              path={path}
              locale={locale}
              baseUrl={baseUrl}
              className="gap-3 text-neutral-500 font-medium mr-4"
            />
          )}

          <HamburgerButton onClick={toggleMenu} isOpen={showOverlayMenu} />
        </div>
        <OverlayMenu show={showOverlayMenu} menu={menu} />
        {showOverlayMenu && (
          <div
            onClick={() => {
              setShowOverlayMenu(false);
            }}
            className="fixed top-0 left-0 w-full h-full md:hidden bg-black/60"
          />
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
      className="inline-flex items-center justify-center text-neutral-400"
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
  target?: string;
  className?: string;
  children?: React.ReactNode;
  title: string;
  newTab?: boolean;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  target,
  className,
  title,
  children,
  newTab,
}: MenuListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("MENULISTITEM NEW TAB", newTab);
  return (
    <li
      className={`flex-shrink-0 md:rounded-md overflow-hidden ${
        className || ""
      }`}
    >
      <a
        href={target}
        onClick={() => children && setIsOpen((oldState) => !oldState)}
        className="md:hover:text-neutral-800 flex gap-2 items-center cursor-pointer"
        {...(newTab ? { target: "_blank" } : {})}
      >
        <div className="font-aktiv md:font-inter text-[15px] flex items-center md:text-base md:font-medium px-0 md:px-3 py-2 md:hover:bg-neutral-50 text-2xl font-bold">
          {title}
        </div>{" "}
        {children && (
          <ChevronIcon className={`size-4 transition-all transform`} />
        )}
        {newTab && <ArrowTopRightOnSquare className="size-4" />}
      </a>
      {children && isOpen && <ul className="ml-4">{children}</ul>}
    </li>
  );
};

interface OverlayMenuProps {
  show: boolean;
  menu?: IMenuItem[];
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ menu, show }) => {
  console.log("MENU", menu);
  return (
    <div
      className={`fixed z-10 top-0 inset-x-0 transition transform origin-top-right${
        show ? " md:hidden" : " hidden"
      }`}
    >
      <div className="bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="mt-16 py-10 px-5">
          <ul className="flex flex-col gap-2 md:gap-5">
            {menu?.map(
              (menuItem) =>
                !menuItem.hideInHeader && (
                  <MenuListItem
                    key={menuItem.title}
                    target={menuItem.target}
                    title={menuItem.title}
                    newTab={menuItem.newTab}
                  >
                    {menuItem.children?.map((subMenuItem) => {
                      return (
                        <MenuListItem
                          key={subMenuItem.title}
                          target={subMenuItem.target}
                          title={subMenuItem.title}
                          newTab={subMenuItem.newTab}
                        />
                      );
                    })}
                  </MenuListItem>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
