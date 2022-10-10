import React from "react";
import { primeBannerImg } from "../../assets";
import CallbackBtn from "../buttons/CallbackBtn";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="max-w-screen-xl h-auto mx-auto px-6 mt-2 flex justify-between items-center">
        <div className="w-1/2">
          <img
            className="w-auto h-auto object-contain"
            src={primeBannerImg}
            alt="primeBannerImg"
          />
        </div>
        <div className="w-1/2">
          <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-600 via-pink-700 to-indigo-600 font-titleFont">
            Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. <br /> Lorem
            ipsum dolor sit amet!
          </h1>
          <p className="font-bodyFont text-[16px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            vitae cupiditate, totam quasi laborum praesentium velit.
          </p>
          <div className="mt-4">
            <CallbackBtn />
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div>
              <BsTelephone className="text-[#f5066c]" size={50} />
            </div>
            <div className="font-bodyFont flex flex-col">
              <p className="text-xl font-semibold">(+968) 97859628</p>
              <p className="text-lg text-gray-500">Call for enquiry</p>
            </div>
            <div className="flex gap-1">
              <FaFacebookSquare
                size={30}
                className="fill-gray-700 hover:fill-[#4267B2] cursor-pointer transform ease-in-out duration-300"
              />
              <FaTwitterSquare
                size={30}
                className="fill-gray-700 hover:fill-[#1DA1F2] cursor-pointer transform ease-in-out duration-300"
              />
              <FaInstagramSquare
                size={30}
                className="fill-gray-700 hover:fill-[#b8278b] cursor-pointer transform ease-in-out duration-300"
              />
              <FaGithubSquare
                size={30}
                className="fill-gray-700 hover:fill-gray-600 cursor-pointer transform ease-in-out duration-300"
              />
              <FaLinkedin
                size={30}
                className="fill-gray-700 hover:fill-[#0e76a8] cursor-pointer transform ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;