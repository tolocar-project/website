import React from "react";
import TolocarLogoSvg from "../assets/tolocar_logo.svg";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={`w-full flex bg-tolo-dark-grey py-16 ${className || ""}`}>
      <div className="container-width flex text-white">
        <div className="flex-1">
          <img className="h-16 mb-4 text-sm" src={TolocarLogoSvg} />
          The Tolocar Project
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 text-sm">
            <h4 className="mb-5">Overview</h4>
            <ul>
              <li><a className="underline text-tolo-link-grey" href="#">Our misson</a></li>
              <li><a className="underline text-tolo-link-grey" href="#">What makes a Tolocar</a></li>
              <li><a className="underline text-tolo-link-grey" href="#">Community Ecosystem</a></li>
              <li><a className="underline text-tolo-link-grey" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h4>Operated By</h4>
          </div>
          <div className="flex-1">
            <h4>Initiated Through</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
