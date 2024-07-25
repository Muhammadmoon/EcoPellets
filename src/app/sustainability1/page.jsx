'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SDGS from '@/components/SDGS';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }
};

const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } }
};



const Sustainability1 = () => {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: imageRef1, inView: imageInView1 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: imageRef2, inView: imageInView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: imageRef3, inView: imageInView3 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <>
            <section className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 mb-6 mt-6">
                {/* Animated Heading Section */}
                <motion.div
                    className="relative flex justify-center items-center mb-4 mt-10 sm:mt-30 overflow-hidden h-20 sm:h-48 rounded-lg"
                    ref={headingRef}
                    initial="hidden"
                    animate={headingInView ? 'visible' : 'hidden'}
                    variants={headingVariants}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-300 animate-gradient"></div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold z-10 animate-text px-4 text-center">
                        Sustainable Development
                    </h1>
                </motion.div>

                {/* Header Section */}
                <header className="py-10 text-center">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        ref={imageRef1}
                        initial="hidden"
                        animate={imageInView1 ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <img
                            src="/images/logo/hmm.png"
                            alt="Cover Image"
                            className="w-full h-auto max-h-96 object-cover mx-auto rounded-lg"
                        />
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto my-8"
                        ref={imageRef2}
                        initial="hidden"
                        animate={imageInView2 ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <img
                            src="/images/logo/hmm1.png"
                            alt="Cover Image"
                            className="w-full h-auto max-h-96 object-cover mx-auto rounded-lg"
                        />
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        ref={imageRef3}
                        initial="hidden"
                        animate={imageInView3 ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <img
                            src="/images/logo/hmm2.png"
                            alt="Cover Image"
                            className="w-full h-auto max-h-96 object-cover mx-auto rounded-lg"
                        />
                    </motion.div>
                </header>
            </section>

            <SDGS/>

            <style jsx>{`
                .animate-gradient {
                    background: linear-gradient(270deg, #ccffcc, #b3ffb3, #99ff99, #b3ffb3, #ccffcc);
                    background-size: 800% 800%;
                    animation: gradient 10s ease infinite;
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes text-flicker {
                    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
                        opacity: 0.99;
                    }
                    20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
                        opacity: 0.4;
                    }
                }

                .animate-text {
                    animation: text-flicker 3s linear infinite;
                }
            `}</style>
        </>
    );
};

export default Sustainability1;
