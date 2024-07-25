'use client';
import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';

const faqData = [
  {
    question: "1. What are EcoPellets made of?",
    answer: "EcoPellets are made from agricultural waste and other biodegradable materials, making them an environmentally friendly fuel option."
  },
  {
    question: "2. Are there any harmful emissions when burning EcoPellets?",
    answer: "No, EcoPellets produce no harmful gases when burned, ensuring a cleaner and safer environment."
  },
  {
    question: "3. How much ash do EcoPellets produce?",
    answer: "EcoPellets produce significantly lower ash compared to traditional fuel alternatives, reducing the need for frequent cleaning and maintenance."
  },
  {
    question: "4. Do EcoPellets produce a lot of smoke?",
    answer: "No, EcoPellets produce minimal smoke, making them a cleaner option for both indoor and outdoor use."
  },
  {
    question: "5. How do EcoPellets compare to other fuel alternatives?",
    answer: "EcoPellets are more efficient, produce less ash and smoke, and are made from renewable, biodegradable materials or Sawdust, making them superior to many traditional fuel options."
  },
  {
    question: "6. Can EcoPellets be used in any type of stove?",
    answer: "EcoPellets can be used in any pellet stove or boiler. However, it is recommended to check your stove’s compatibility with EcoPellets. Additionally, we offer the EcoPellets stove, which is efficiently designed for pellets and has a lifespan of 10 years."
  },
  {
    question: "7. How should EcoPellets be stored?",
    answer: "EcoPellets should be stored in a dry place to prevent moisture absorption, which can affect their performance."
  },
  {
    question: "8. Are EcoPellets cost-effective?",
    answer: "Yes, EcoPellets are cost-effective due to their high efficiency and reduced maintenance costs."
  },
  {
    question: "9. Where can I purchase EcoPellets?",
    answer: "EcoPellets can be purchased through our website or at authorized retailers. Please visit our website or social media platform for more details."
  },
  {
    question: "10. How can I order an EcoPellets stove?",
    answer: "You can order an EcoPellets stove directly from our website. Visit our online store to see the available models and make a purchase."
  },
  {
    question: "11. What makes EcoPellets environmentally friendly?",
    answer: "EcoPellets are made from renewable resources, produce low emissions, and help reduce waste by utilizing agricultural byproducts."
  },
  {
    question: "12. Can I use EcoPellets in a traditional wood stove?",
    answer: "EcoPellets are specifically designed for pellet stoves. Using them in a traditional wood stove is not recommended as it may not burn efficiently."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useSpring({
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0,
    overflow: 'hidden'
  });

  return (
    <div className="mb-4 border-b-2 border-gray-200 pb-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer transition-all duration-300"
      >
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">{question}</h2>
        <span className="text-gray-500">{isOpen ? '-' : '+'}</span>
      </div>
      <a.div style={animation} className="mt-2 text-gray-600">
        {answer}
      </a.div>
    </div>
  );
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } }
};

const Sustainability1 = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 mb-6 mt-6">
        <motion.div
          className="relative flex justify-center items-center mb-4 mt-10 sm:mt-30 overflow-hidden h-20 sm:h-48 rounded-lg"
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? 'visible' : 'hidden'}
          variants={headingVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-300 animate-gradient"></div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold z-10 animate-text px-4 text-center">
            Frequently Asked Questions
          </h1>
        </motion.div>

        <motion.section
          className="relative flex items-center justify-center py-12"
          ref={faqRef}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          <div className="absolute inset-0 bg-white"></div>
          <div className="relative z-10 max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-lg">
            <div className="max-w-2xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </motion.section>
      </section>

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
