import React from "react";
import { motion } from "framer-motion";
import { primeFactsImg } from "../../assets";
import ReadmoreBtn from "../buttons/ReadmoreBtn";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-14 mb-20">
      <div className="w-full lg:w-1/2 px-6 lg:px-0">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-full h-[400px] lg:h-[500px] object-cover rounded-md lg:rounded-none lg:rounded-r-3xl"
          src={primeFactsImg}
          alt="primeFactsImg"
        />
      </div>
      <div className="w-full lg:w-1/2 px-6 lg:px-0 flex items-center">
        <div className="w-full lg:w-2/3 flex font-bodyFont flex-col gap-4 justify-start">
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-extrabold text-[#434343]"
          >
            Some Facts About Us
          </motion.h3>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
            className="text-base text-justify leading-6 text-[#434343]"
          >
            We are having 450+ existing clients in world wide who are enjoying
            professional web services from our team. Pinky Bell as a
            professional web designing company in Oman, we offer an extensive
            range of technical services that includes website development,
            domain registration, web& email hosting, search engine optimization,
            social media management, content writing, online brand management,
            e-commerce websites...
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
            }}
          >
            <ReadmoreBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
