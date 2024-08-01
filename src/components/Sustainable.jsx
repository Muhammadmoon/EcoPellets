import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } }
};

const Sustainable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen bg-white flex items-center justify-center ">
      <div className="max-w-7xl bg-white  w-full">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 items-center text-black py-12 px-4 sm:px-6 md:px-12 lg:px-10 gap-6">
          <motion.div
            className="flex flex-col items-start space-y-6 p-4 sm:p-6 md:p-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
             <h1 className="text-3xl font-bold  text-gray-900 animate-fadeIn text-center">Get to Know Us</h1>
             <div className="border-t-4 border-green-500 w-16  animate-slideIn "></div>
            <p className="text-base sm:text-lg md:text-xl text-justify">
              <strong>EcoPellets Energy</strong> is a pioneering renewable energy company focused on producing sustainable, eco-friendly pellet fuels. Our mission is to provide efficient alternatives to fossil fuels, reducing environmental impact and promoting a greener future. Through innovation and dedication, we aim to make renewable energy accessible to everyone. Join us in our journey towards a sustainable world.
            </p>
            <a href="/aboutus">
              <button className="text-base sm:text-lg md:text-xl p-2 sm:p-4 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-lg">
                View More
              </button>
            </a>
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
          >
            <img
              src="/images/logo/ru3.jpg"
              alt="Thuan Hai Corporation Building"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sustainable;
