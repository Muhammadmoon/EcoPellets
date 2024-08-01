'use client'
import React from 'react';
import { FaMicroscope, FaHandshake, FaUsers, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';
import { FaHandHoldingHeart } from "react-icons/fa";


const coreValues = [
    {
        title: 'INNOVATION',
        description: 'Pushing the boundaries of renewable energy through innovation',
        icon: <FaMicroscope size={60} />,
    },
    {
        title: 'COMMUNITY',
        description: 'Supporting and engaging with our local communities to drive collective progress',
        icon: <FaHandshake size={60} />,
    },
    {
        title: 'SUSTAINABILITY',
        description: 'To promoting environmental stewardship through sustainable practices',
        icon: <FaHandHoldingHeart size={60} />,
    },
    {
        title: 'QUALITY',
        description: 'Ensure the highest standards in every aspect of our operations, from production to customer service',
        icon: <FaBalanceScale size={60} />,
    },
    ];

const CoreValues = () => {
    return (
        <div className="py-16 bg-gradient-to-r text-black overflow-hidden  mt-10">
            <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 animate-fadeIn text-center">Core Values</h1>
            <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto"></div>
            </div>
            <div className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-4">
                            <div className="bg-green-600 text-white p-4 rounded-full">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center">{value.title}</h3>
                            <p className="text-center text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
