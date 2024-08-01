'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
    {
        title: 'Domestic Levels Stove',
        description: 'Our domestic stoves provide efficient and eco-friendly heating solutions for homes, combining sleek design with high performance.',
        image: '/images/logo/png1.png',
        price: 'RS: 6500',
    },
    {
        title: 'Commercial Levels Stove',
        description: 'Designed for businesses, our commercial stoves offer robust, reliable, and sustainable heating options, perfect for various commercial spaces.',
        image: '/images/logo/ru22.png',
        price: 'RS: 45000',
    },
    {
        title: 'Industrial Levels Stove',
        description: 'Built to meet the demands of large-scale operations, our industrial stoves deliver powerful and efficient energy solutions for industrial environments.',
        image: '/images/logo/stove.jpeg',
        price: 'RS: 80000',
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const ProductsAndSolutions = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="py-4 px-4 mt-20" ref={ref}>
            <div className="flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 animate-fadeIn text-center">Products And Solutions</h1>
            <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="w-full p-4"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={itemVariants}
                        >
                            <div className="relative object-cover bg-white rounded-lg shadow-md overflow-hidden h-120 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                <img
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-64 object-cover pl-4" 
                                    width={600} 
                                    height={400} 
                                />
                                <div className="p-4 pb-10">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                                    <p className="mt-4 text-gray-600">{product.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 pb-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-4 mt-20">
                                        <h3 className="text-xl font-bold">{product.title}</h3>
                                        <p className="text-lg font-semibold">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsAndSolutions;
