'use client'
import React from 'react';
import Image from 'next/image';

const products = [
    {
        title: 'Domestic Levels',
        description: 'Thuan Hai is a leading unit in providing comprehensive energy solutions for businesses.',
        image: '/images/logo/3.jpg',
        price: 'RS: 500',
    },
    {
        title: 'Industrial Levels',
        description: 'Thuan Hai invests, installs, and operates boiler systems. A pioneer in steam, heat, and electricity solutions.',
        image: '/images/logo/2.jpg',
        price: 'RS: 1000',
    },
    {
        title: 'Commercial Levels',
        description: 'Thuan Hai owns a closed supply chain with a large warehouse system, stretching from North to South.',
        image: '/images/logo/1.jpg',
        price: 'RS: 1500',
    },
];

const ProductsAndSolutions = () => {
    return (
        <div className="py-4 px-4 mt-20">
            <div className=" flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-10 mt-10">
                    PRODUCTS & SOLUTIONS
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="w-full p-4">
                            <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-120 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                <Image 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-64 object-cover" 
                                    width={600} 
                                    height={400} 
                                />
                                <div className="p-4 pb-10">
                                    <h3 className="text-lg font-semibold text-gray-900 mn">{product.title}</h3>
                                    <p className="mt-4  text-gray-600">{product.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 pb-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-4 mt-20">
                                        <h3 className="text-xl font-bold ">{product.title}</h3>
                                        {/* <p className="mb-4">{product.description}</p> */}
                                        <p className="text-lg font-semibold">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsAndSolutions;
