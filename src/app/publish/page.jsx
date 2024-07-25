'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center mt-20">
      <div className="w-full max-w-6xl p-8">

      <h1 className="text-3xl font-bold mb-2 text-gray-900 animate-fadeIn text-center">The Role of Renewable Energy Sources in Sustainable Development</h1>
      <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto "></div>
        
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <Image src="/images/logo/bg3.jpeg" alt="Energy Image" width={500} height={300} className="rounded shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            
            <p className="text-lg text-gray-700 text-justify ">
            Economic benefits include job creation, enhanced energy security, and reduced energy costs due to technological advancements. Socially, renewable energy improves energy accessibility, particularly in underserved communities, and offers health benefits by decreasing pollution-related illnesses.
            Challenges such as technological limitations, financial barriers, and regulatory issues must be addressed through continuous investment in research and development, supportive policies, and public awareness campaigns. Governments, businesses, and individuals must collaborate to embrace renewable energy, ensuring a sustainable and prosperous future for all.
            </p>
          </motion.div>
        </section>

        
        
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <p className="text-lg text-gray-700 text-justify">
            Renewable energy also supports rural development by providing access to power, enhancing agricultural productivity, and improving living standards in remote areas. Economic benefits include job creation, enhanced energy security, and reduced energy costs due to technological advancements. Socially, renewable energy improves energy accessibility, particularly in underserved communities, and offers health benefits by decreasing pollution-related illnesses.

            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <Image src="/images/logo/bg2.jpeg" alt="Heat Energy" width={500} height={300} className="rounded shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </section>


        <h1 className="text-3xl font-bold mb-2 text-gray-900 animate-fadeIn text-center">Green Warriors: Youth-Led Initiatives That Are Changing the World</h1>
      <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto "></div>
        
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <Image src="/images/logo/bg4.jpeg" alt="Energy Image" width={500} height={300} className="rounded shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
             
            <p className="text-lg text-gray-700 text-justify">
            In a world grappling with environmental crises, the emergence of youth-led initiatives is a beacon of hope and innovation. These Green Warriors, driven by passion and creativity, are spearheading transformative projects that are reshaping our approach to sustainability. From urban gardens and zero-waste campaigns to clean energy startups and environmental advocacy, these young leaders are proving that age is no barrier to making a substantial impact. By harnessing the power of technology, community engagement, and bold thinking, they are not only addressing pressing environmental challenges but also inspiring a global movement towards a greener, more sustainable future.
            </p>
          </motion.div>
        </section>

        <h1 className="text-3xl font-bold mb-2 text-gray-900 animate-fadeIn text-center">The Rise of Sustainable Fashion Among Gen Z
        </h1>
      <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto "></div>
        
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <Image src="/images/logo/bg6.jpeg" alt="Energy Image" width={500} height={300} className="rounded shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            
            <p className="text-lg text-gray-700 text-justify">
            As environmental consciousness grows, Gen Z is leading the charge in transforming the fashion industry towards sustainability. This generation, deeply aware of the ecological impact of fast fashion, is championing a shift towards eco-friendly practices and ethical consumption. Embracing second-hand shopping, upcycling, and supporting brands with transparent supply chains, Gen Z is redefining fashion norms with a focus on longevity and environmental responsibility. Their preference for quality over quantity, coupled with a demand for innovative, sustainable materials, is driving a new wave of fashion that prioritizes both style and planet.


            </p>
          </motion.div>
        </section>


        <h1 className="text-3xl font-bold mb-2 text-gray-900 animate-fadeIn text-center">A Day in the Life with Zero Waste: Is It Possible?

        </h1>
      <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto "></div>
        
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            <Image src="/images/logo/bg1.jpeg" alt="Energy Image" width={500} height={300} className="rounded shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}>
            
            <p className="text-lg text-gray-700 text-justify" >
            Embarking on a zero-waste lifestyle can seem daunting, but experiencing a day in this eco-conscious journey reveals its remarkable feasibility and rewards. From the moment you wake up, every choice, from reusable coffee cups to compostable toiletries, contributes to a minimal waste footprint. Morning routines shift towards sustainable products and packaging-free goods, while meals are prepared with local, bulk, or homemade ingredients, avoiding single-use plastics. Daily activities include mindful consumption and innovative recycling, making waste reduction a seamless part of life. 

            </p>
          </motion.div>
        </section>

        
        
       
       
        
      </div>
    </div>
  );
}
