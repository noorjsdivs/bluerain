import React from "react";
import { motion } from "framer-motion";
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
      <div className="max-w-screen-xl h-auto mx-auto px-6 mt-2 flex flex-col mdl:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="w-auto h-auto object-contain"
            src={primeBannerImg}
            alt="primeBannerImg"
          />
        </div>
        <div className="w-full mdl:w-1/2">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="font-extrabold text-transparent text-2xl mdl:text-3xl lg:text-5xl mt-2 lg:mt-0 text-center mdl:text-left bg-clip-text bg-gradient-to-r from-pink-600 via-pink-700 to-indigo-600 font-titleFont"
          >
            Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet!
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="font-bodyFont text-[16px] mdl:text-[14px] mt-3 text-center mdl:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            vitae cupiditate, totam quasi laborum praesentium velit.
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="mt-4 flex justify-center mdl:justify-start"
          >
            <CallbackBtn />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="flex flex-col lg:flex-row justify-center w-full mdl:justify-start items-center gap-4 mt-4"
          >
            <div className="w-full lg:flex gap-4">
              <div className="w-full mdl:w-auto flex items-center justify-center mdl:justify-start">
                <BsTelephone className="text-[#f5066c] text-[30px] lg:text-[50px]" />
              </div>
              <div className="font-bodyFont w-full flex flex-col items-center">
                <p className="text-xl font-semibold w-auto mdl:w-full">
                  (+968) 97859628
                </p>
                <p className="text-lg text-gray-500 w-auto mdl:w-full">
                  Call for enquiry
                </p>
              </div>
            </div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
