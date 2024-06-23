'use client'
import React from 'react';
import CountUp from 'react-countup';

const statistics = [
    { value: 2700, label: 'Employees' },
    { value: 1000, label: 'Member Companies' },
    { value: 1500, label: 'Years of operation' },
    { value: 1350, label: 'Projects' },
];

const StatisticsSection = () => {
    return (
        <div className="w-full py-10 bg-white">
            <div className="container mx-auto px-12 sm:px-4 lg:px-8 flex flex-wrap justify-around gap-12">
                {statistics.map((stat, index) => (
                    <div key={index} className="flex flex-col mt-8 items-center text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4">
                        <CountUp
                            start={0}
                            end={stat.value}
                            duration={2.75}
                            className="text-4xl text-green-600 font-bold"
                        />
                        <div className="text-sm text-gray-700 mt-2">{stat.label}</div>

                        {stat.subLabel && <div className="text-sm text-gray-500 mt-1">{stat.subLabel}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatisticsSection;
