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
          <ul className="flex gap-2 text-tolo-footer-grey font-medium font-aktiv text-[15px]">
            <MenuListItem target="/#top">Home</MenuListItem>
            <MenuListItem target="/#top">Interventions</MenuListItem>
            <MenuListItem target="/#top">Community</MenuListItem>
            <MenuListItem target="/#top">Makerspace Academy</MenuListItem>
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
    <a href={target} className=" hover:text-tolo-dark-grey">
      <div className="px-3 py-2 hover:bg-tolo-light-grey">{children}</div>
    </a>
  </li>
);

export default Navigation;
