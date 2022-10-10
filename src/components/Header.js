import React from "react";
import { headerLogoImg } from "../assets";
import { headerData } from "../constants";

const Header = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto">
      <div>
        <img className="w-44" src={headerLogoImg} alt="headerLogoImg" />
      </div>
      <div className="flex items-center">
        {headerData.map((item) => (
          <div key={item.id}>
            <h4 className="px-4 font-sans text-[14px] uppercase font-semibold">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
