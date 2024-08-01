'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-12">
                PRODUCTS & SOLUTIONS
            </h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={1000}
                className="rounded-lg shadow-lg"
            >
                <SwiperSlide className="flex justify-center">
                    <img
                        src="/images/logo/slide1.jpg" 
                        width={1200} 
                        height={700} 
                        className="rounded-lg object-cover" 
                        alt="Plate 2"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <img 
                        src="/images/logo/slide2.jpg" 
                        width={1200} 
                        height={700} 
                        className="rounded-lg object-cover" 
                        alt="Plate 2"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <img 
                        src="/images/logo/slide3.jpg" 
                        width={1200} 
                        height={700} 
                        className="rounded-lg object-cover" 
                        alt="Plate 2"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
