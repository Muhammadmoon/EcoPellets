'use client'
import React from 'react';
import { FaMicroscope, FaHandshake, FaUsers, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';
import '../app/CoreValues.css'

const coreValues = [
    {
        title: 'INNOVATION',
        description: 'Catching market trends to innovate energy solutions.',
        icon: <FaMicroscope size={40} />,
    },
    {
        title: 'COMMITMENT',
        description: 'Pledging stability, sustainable value, and cost optimization.',
        icon: <FaHandshake size={40} />,
    },
    {
        title: 'SHARING',
        description: 'Share knowledge, train strong human resources.',
        icon: <FaUsers size={40} />,
    },
    {
        title: 'INTEGRITY',
        description: 'Building customer trust through honesty.',
        icon: <FaBalanceScale size={40} />,
    },
    {
        title: 'DEDICATION',
        description: 'Dedicated to research and development of products and services.',
        icon: <FaHeartbeat size={40} />,
    },
];

const CoreValues = () => {
    return (
        <div className="py-16 bg-gradient-to-r  text-black overflow-hidden mb-20">
             <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-gradient
              bg-gradient-to-r
              from-green-800
              to-green-200
              bg-clip-text
              text-transparent">Core Values</h3>
            <p className="mt-4 text-lg text-gray-600">
              
            </p>
          </div>
            <div className="container mx-auto px-4 mb-20 py-10">
                <h2 className="text-3xl font-bold text-center mb-10 mt-20"></h2>
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-full flex space-x-10 animate-marquee">
                        {coreValues.map((value, index) => (
                            <div key={index} className="flex flex-col items-center justify-center min-w-[200px] space-y-4">
                                <div className="bg-green-600 text-white p-4 rounded-full">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{value.title}</h3>
                                <p className="text-center text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
