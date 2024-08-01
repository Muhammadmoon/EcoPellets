'use client';
import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } }
};

const SecondSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    // Function to handle play/pause
    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="py-10 px-4 sm:px-6 md:px-12 lg:px-10" ref={ref}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={textVariants}
                >
                    {/* <div className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-4xl font-bold pb-6 md:pb-10 whitespace-nowrap overflow-hidden text-ellipsis mt-10 md:mt-20">
                        Why Us?
                    </div> */}

<h1 className="text-3xl font-bold mb-6 text-gray-900 animate-fadeIn text-start">Why Us</h1>
<div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn "></div>
                    <div className="text-base sm:text-lg mb-8 text-justify">
                        At EcoPellets Energy, we're revolutionizing the renewable energy landscape with our sustainable and efficient solutions. Our commitment to the environment and cutting-edge technology sets us apart. Watch the video below to discover how we’re making a difference and why EcoPellets Energy is the right choice for your energy needs.
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-2/5 relative"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={videoVariants}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover rounded-3xl"
                        loop
                        onClick={handlePlayPause}
                    >
                        <source src="/content/eco.mp4" type="video/mp4" />
                    </video>

                    <div
                        onClick={handlePlayPause}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg cursor-pointer bg-green-500 bg-opacity-50"
                    >
                        {isPlaying ? <BsFillPauseFill size={24} /> : <BsFillPlayFill size={24} />}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SecondSection;
