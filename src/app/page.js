import FirstSection from '@/components/FirstSection'
import Navbar from '@/components/Navbar'
import SecondSection from '@/components/SecondSection'
import StatisticsSection from '@/components/StatisticsSection'
import Sustainable from '@/components/Sustainable'

import React from 'react'
import Contact from '@/components/Contact'
import Slider from '@/components/Slider'
import Products from '@/components/Products'
import Hand from '@/components/Hand'
import CoreValues from '@/components/CoreValues'
import VisionMission from '@/components/VisionMission'
import Blog from '@/components/Blog'

function page() {
  return (
    <div>
      
      <FirstSection/>
      <StatisticsSection/>
      <SecondSection/>
      <Sustainable/>
      <Slider/>
      <Products/>
      <Hand/>
      <CoreValues/>
      <VisionMission/>

     
     
     
      
    </div>
  )
}

export default page