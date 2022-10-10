import React from "react";
import { headerLogoImg } from "../assets";
import { headerData } from "../constants";

const Header = () => {
  return (
    <div className="w-full h-auto shadow-lg py-3">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <div>
          <img className="w-44" src={headerLogoImg} alt="headerLogoImg" />
        </div>
        <div className="flex items-center gap-4">
          {headerData.map((item) => (
            <div key={item.id}>
              <h4 className="relative px-2 font-sans text-[14px] uppercase font-semibold group cursor-pointer">
                {item.title}
                <span className="w-full h-[2px] -bottom-1 left-0 bg-red-800 absolute hidden group-hover:inline-block transform duration-300 ease-in-out  bg-gradient-to-r from-green-[#E80566] to-blue-[#1C75BC]"></span>
                {/* bg-[linear-gradient(95.68deg, #E80566 0.05%, #1C75BC 102.79%] */}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
