import React from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiSend, FiSearch, FiPenTool } from "react-icons/fi";

const Whatwedo = () => {
  return (
    <div className="w-full h-auto py-6">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="font-bold font-bodyFont text-center text-transparent text-4xl bg-clip-text bg-gradient-to-t from-pink-600 to-blue-600 "
      >
        Who We Do
      </motion.h2>
      <div className="max-w-screen-xl mx-auto flex flex-col md:px-10 lg:flex-row gap-10 lg:gap-0 xl:gap-10 px-2 xl:px-0 py-16">
        <motion.div className="flex flex-col gap-3 px-10 md:px-20 lg:px-4 xl:px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-105 xl:hover:scale-110 transition ease-in-out duration-500 rounded-xl">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FiGlobe className="text-[50px] text-pink-800 to-blue-800" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#434343]"
          >
            Web Designing
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            When there is a huge requirement to entice clients and customers
            from different parts of the globe to ensure smooth functioning and
            sustain the growth of your company, there is a great need of having
            a business website...
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FiSend className="text-[50px] text-pink-800 to-blue-800" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#434343]"
          >
            Web Designing
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            When there is a huge requirement to entice clients and customers
            from different parts of the globe to ensure smooth functioning and
            sustain the growth of your company, there is a great need of having
            a business website...
          </motion.p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FiSearch className="text-[50px] text-pink-800 to-blue-800" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#434343]"
          >
            Web Designing
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            When there is a huge requirement to entice clients and customers
            from different parts of the globe to ensure smooth functioning and
            sustain the growth of your company, there is a great need of having
            a business website...
          </motion.p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FiPenTool className="text-[50px] text-pink-800 to-blue-800" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#434343]"
          >
            Web Designing
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            When there is a huge requirement to entice clients and customers
            from different parts of the globe to ensure smooth functioning and
            sustain the growth of your company, there is a great need of having
            a business website...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
