"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Sustainable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 items-center text-black py-12 px-4 sm:px-6 md:px-12 lg:px-24 gap-6"
      ref={ref}
    >
      <motion.div
        className="w-full flex justify-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <img
          src="/images/logo/ru2.jpg"
          alt="Thuan Hai Corporation Building"
          width={1000}
          height={800}
          className="rounded-lg object-cover"
        />
      </motion.div>
      <motion.div
        className="flex flex-col items-start space-y-6 p-6 sm:p-8 md:p-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 animate-fadeIn text-start">
          Sustainable Development
        </h1>
        <div className="border-t-4 border-green-500 w-16 animate-slideIn"></div>
        <p className="text-base sm:text-lg md:text-xl text-justify">
          Sustainable development is an important goal that{" "}
          <strong>EcoPellets Energy</strong> focuses on. Responsibility towards
          the environment, people and society is always emphasized and
          associated with the strategy of promoting business, production and
          trade.
        </p>
        <a href="/sustainability1">
          <button className="text-base sm:text-lg md:text-xl p-2 sm:p-3 md:p-4 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-lg">
            View More
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Sustainable;
