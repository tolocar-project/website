import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";

interface Props {
  className?: string;
  target?: string;
}

const Navigation: React.FC<Props> = ({ target = "/", className }: Props) => {
  const Image = <img className={`h-8 sm:h-10`} src={TolocarLogoSvg} />;
  return (
    <div
      className={`w-full bg-white h-20 fixed flex items-center justify-center top-0 z-20 ${
        className || ""
      }`}
    >
      <div className="container-width flex justify-between">
        {target ? <a href={target}>{Image}</a> : Image}
        <nav>
          <ul className="flex gap-2 text-neutral-500 font-medium font-aktiv text-[15px]">
            <MenuListItem target="#top">Home</MenuListItem>
            <MenuListItem target="#motivation">Motivation</MenuListItem>
            <MenuListItem target="#what-is-a-tolocar">What is a Tolocar?</MenuListItem>
            <MenuListItem target="#projects-community">Community</MenuListItem>
            <MenuListItem target="academy">Makerspace Academy</MenuListItem>
          </ul>
        </nav>
      </div>
    </div>
  );
};

interface MenuListItemProps {
  target: string;
  className?: string;
  children: React.ReactNode;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  target,
  className,
  children,
}: MenuListItemProps) => (
  <li className={`rounded-md overflow-hidden ${className || ""}`}>
    <a href={target} className=" hover:text-neutral-800">
      <div className="px-3 py-2 hover:bg-tolo-neutral-50">{children}</div>
    </a>
  </li>
);

export default Navigation;
