import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const statistics = [
    { value: 500000000, label: 'Deforestation' },
    { value: 300000000, label: 'Carbon Emissions' },
    { value: 420000000, label: 'Air Pollution' },
    { value: 160000000, label: 'Energy Inefficiency' },
];

const formatNumber = (num) => {
    if (num >= 1e6 && num < 1e9) {
        const formatted = (num / 1e6).toFixed(1);
        return formatted.replace(/\.0$/, '') + 'M';
    }
    if (num >= 1e3 && num < 1e6) {
        const formatted = (num / 1e3).toFixed(1);
        return formatted.replace(/\.0$/, '') + 'K';
    }
    return num;
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const StatisticsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // Trigger when 50% of the element is in view
    });

    return (
        <div className="w-full py-10 bg-white" ref={ref}>
            <div className="container mx-auto px-12 sm:px-4 lg:px-8 flex flex-wrap justify-around gap-12">
                {statistics.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col mt-8 items-center text-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={itemVariants}
                    >
                        <CountUp
                            start={inView ? 0 : null} // Start counting when inView is true
                            end={stat.value}
                            duration={4.75}
                            redraw={true} // Redraw on props change (like start)
                            formattingFn={(value) => formatNumber(value)} // Format number using custom function
                            className="text-4xl text-green-600 font-bold"
                        />
                        <div className="text-sm text-gray-700 mt-2">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatisticsSection;
