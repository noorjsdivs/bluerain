import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { headerLogoImg } from "../../assets";
import { headerData } from "../../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-auto shadow-lg py-3 sticky top-0 z-50 bg-white px-2">
      <div className="flex justify-between relative max-w-screen-xl mx-auto">
        <div>
          <img
            className="w-60 object-contain hover:shadow-2xl rounded-xl duration-300 cursor-pointer"
            src={headerLogoImg}
            alt="headerLogoImg"
          />
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {headerData.map((item) => (
            <ul key={item.id} className="relative py-2 group">
              <li className="px-0 xl:px-1 font-titleFont text-[13px] xl:text-[14px] text-[#434343] bg-clip-text hover:bg-gradient-to-r from hover:bg-pink-400 to uppercase font-medium group cursor-pointer hover:text-pink-700 duration-300">
                {item.title}
              </li>
              <span className="absolute w-full transform scale-0 group-hover:scale-100 duration-500 h-[3px] bottom-0 bg-gradient-to-r from-pink-600 via-pink-700 to-indigo-600 inline-block"></span>
            </ul>
          ))}
        </div>
        <div className="inline-flex items-center justify-end lg:hidden">
          {showMenu ? (
            <CgClose
              onClick={() => setShowMenu(!showMenu)}
              className="text-[35px] text-pink-600 cursor-pointer hover:text-[#4267B2]"
            />
          ) : (
            <BiMenuAltRight
              onClick={() => setShowMenu(!showMenu)}
              className="hover:fill-[#4267B2] fill-pink-600 cursor-pointer  ease-in-out duration-300"
              size={40}
            />
          )}
          <div
            className={`absolute w-48 opacity-70 hover:opacity-100 z-40 h-auto px-4 top-16 -right-2 bg-white drop-shadow-2xl rounded-md ${
              showMenu ? "py-4" : "py-0"
            }`}
          >
            {showMenu ? (
              <div className="flex flex-col gap-[2px]">
                {headerData.map((item) => (
                  <ul key={item.id} className="relative py-2 group">
                    <li className="font-titleFont text-[14px] text-center px-2 text-[#434343] bg-clip-text hover:bg-gradient-to-r from hover:bg-pink-400 to uppercase font-medium group cursor-pointer hover:text-pink-700 duration-300">
                      {item.title}
                    </li>
                    <span className="absolute w-full transform scale-0 group-hover:scale-100 duration-500 h-[3px] bottom-0 bg-gradient-to-r from-pink-600 via-pink-700 to-indigo-600 inline-block"></span>
                  </ul>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
