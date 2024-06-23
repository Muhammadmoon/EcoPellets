'use client'
import React from 'react';
import { FaBullseye, FaRocket } from 'react-icons/fa';

const VisionMission = () => {
    return (
        <div className="py-16 bg-white text-green-800 lg:px-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10 text-green-600">VISION & MISSION</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative flex flex-col items-center justify-center p-6 bg-white text-green-800 border border-green-600 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <FaBullseye size={60} className="mb-4" />
                            <h3 className="text-xl font-semibold">Our Vision</h3>
                            <p className="mt-4 text-gray-700">
                                To be the leading provider of innovative energy solutions that drive sustainable growth and improve the quality of life.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative flex flex-col items-center justify-center p-6 bg-white text-green-800 border border-green-600 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <FaRocket size={60} className="mb-4" />
                            <h3 className="text-xl font-semibold">Our Vision</h3>
                            <p className="mt-4 text-gray-700">
                                To be the leading provider of innovative energy solutions that drive sustainable growth and improve the quality of life.
                            </p>
                        </div>
                    </div>
                    {/* <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative flex flex-col items-center justify-center p-6 bg-white text-green-800 border border-green-600 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <FaRocket size={60} className="mb-4" />
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="mt-4 text-gray-700">
                                To deliver high-quality, sustainable energy solutions through innovation, commitment, and integrity, while fostering a culture of excellence and continuous improvement.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
