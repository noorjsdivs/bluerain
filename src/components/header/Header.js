import React from "react";
import { headerLogoImg } from "../../assets";
import { headerData } from "../../constants";

const Header = () => {
  return (
    <div className="w-full h-auto shadow-lg py-3 sticky top-0 z-50 bg-white">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <div>
          <img className="w-44" src={headerLogoImg} alt="headerLogoImg" />
        </div>
        <div className="flex items-center gap-4">
          {headerData.map((item) => (
            <div key={item.id}>
              <h4 className="relative px-2 font-titleFont text-[16px] bg-clip-text hover:bg-gradient-to-r from hover:bg-pink-400 to text-black uppercase font-semibold group cursor-pointer hover:text-pink-700 duration-300">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
