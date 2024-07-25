'use client'
import React, { useState, useEffect } from 'react';
import FirstSection from '@/components/FirstSection';
import Navbar from '@/components/Navbar';
import SecondSection from '@/components/SecondSection';
import StatisticsSection from '@/components/StatisticsSection';
import Sustainable from '@/components/Sustainable';
import Contact from '@/components/Contact';
import Slider from '@/components/Slider';
import Products from '@/components/Products';
import Hand from '@/components/Hand';
import VisionMission from '@/components/VisionMission';
import Blog from '@/components/Blog';
import Loader from '@/components/Loader';
import Slider1 from '@/components/Slider1';


function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
      {/* <FirstSection/> */}


      <Slider1/>
      <StatisticsSection/>
      <Sustainable/> 
      
      <Products/>
      <SecondSection/>
      
      
      <Hand/>
     
      {/* <VisionMission/> */}
        </>
      )}
    </div>
  );
}

export default Page;
