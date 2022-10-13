import React from "react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { TbMapPin } from "react-icons/tb";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#F6F6F6]">
      <div className="max-w-screen-xl mx-auto flex mdl:flex-row gap-8 mb-7 mt-4 border-b-[1px] border-b-[#434343]">
        <div className="w-full h-auto px-4 xl:px-0 flex flex-col xl:gap-6 xl:flex-row">
          <div className="w-full xl:w-1/4">
            <h3 className="w-full font-titleFont text-[15px] tracking-wide font-semibold uppercase text-[#434343] border-b-[1px] py-2 border-b-[#434343]">
              Quick links
            </h3>
            <div className="flex py-6 w-full justify-between text-[#434343]">
              <div className="w-1/2">
                <ul className="flex flex-col gap-2">
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Home
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Services
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Portfolio
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Enquiry
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Careers
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="flex flex-col gap-2">
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    About Us
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Clients
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Testimonials
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Customer Care
                  </li>
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-2/5">
            <h3 className="w-full font-titleFont text-[15px] tracking-wide font-semibold uppercase text-[#434343] border-b-[1px] py-2 border-b-[#434343]">
              Our Services
            </h3>
            <div className="flex flex-col lg:flex-row py-6 w-full justify-between text-[#434343]">
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-col gap-0 lg:gap-2">
                  <li className="footerli group">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Web Designing
                  </li>
                  <li className="footerli group mt-2 lg:mt-0">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Web & Email Hosting
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-col gap-0 lg:gap-2">
                  <li className="footerli group mt-2 lg:mt-0">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Search Engine Optimization
                  </li>
                  <li className="footerli group mt-2 lg:mt-0">
                    <span className="footerlispan group-hover:pl-6 transition-pl"></span>
                    Content Writing
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/3">
            <h3 className="w-full font-titleFont text-[15px] tracking-wide font-semibold uppercase text-[#434343] border-b-[1px] py-2 border-b-[#434343]">
              Contact Address
            </h3>
            <div className="flex py-6 w-full justify-between text-[#434343]">
              <ul className="flex flex-col gap-4">
                <li className="flex justify-start gap-1 text-[14px] font-bodyFont">
                  <span className="text-[25px] text-[#434343]">
                    <TbMapPin />
                  </span>
                  PB 1178, PC 114 Regus Business Centre 2nd Floor, Polyglot
                  Complex, Wattayah, Muscat, 114
                </li>
                <li className="flex justify-start items-center gap-1 text-[14px] font-bodyFont">
                  <span className="text-[25px] text-[#434343]">
                    <BsTelephone />
                  </span>
                  +968 97859628
                </li>
                <li className="flex justify-start items-center gap-1 text-[14px] font-bodyFont">
                  <span className="text-[25px] text-[#434343]">
                    <BsEnvelope />
                  </span>
                  unknown2832021@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-2 justify-between items-center">
        <div>
          <p className="font-bodyFont text-sm">
            © 2022 noormohammad.live All rights reserved.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center  mdl:justify-start gap-1 mdl:-mt-3 lg:-mt-0">
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
  );
};

export default Footer;
