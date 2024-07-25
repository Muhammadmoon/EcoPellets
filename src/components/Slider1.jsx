'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';

const Slider1 = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                speed={1000}
                className="rounded-lg h-full"
            >
                <SwiperSlide className="flex justify-between items-center relative h-full animated-slide">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center text-black px-6 md:px-12 lg:px-24 gap-6 h-full animated-up-down">
                        <div className="flex flex-col items-start p-6 sm:p-8 md:p-12 mt-12 sm:mt-0 bg-white rounded-lg animated-content">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animated-text">
                                <span className="text-gradient bg-gradient-to-r from-yellow-600 to-red-200 bg-clip-text text-transparent">
                                    Innovation in Energy Solutions
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-4 animated-text">
                                Powering the Future with Sustainable Innovation
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Image
                                src="/images/logo/png3.png"
                                alt="Renewable Energy"
                                width={300}
                                height={200}
                                className="w-full max-w-sm sm:max-w-md md:max-w-lg animated-image"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-between items-center relative h-full animated-slide">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center text-black px-6 md:px-12 lg:px-24 gap-6 h-full animated-up-down">
                        <div className="flex flex-col items-start p-6 sm:p-8 md:p-12 mt-12 sm:mt-0 bg-white rounded-lg animated-content">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animated-text">
                                <span className="text-gradient bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                                    Commitment to Sustainability
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-4 animated-text">
                                Fueling Progress Towards a Greener Tomorrow
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Image
                                src="/images/logo/png2.png"
                                alt="Corporate Solutions"
                                width={300}
                                height={200}
                                className="w-full max-w-sm sm:max-w-md md:max-w-lg animated-image"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-between items-center relative h-full animated-slide">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center text-black px-6 md:px-12 lg:px-24 gap-6 h-full animated-up-down">
                        <div className="flex flex-col items-start p-6 sm:p-8 md:p-12 mt-12 sm:mt-0 bg-white rounded-lg animated-content">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animated-text">
                                <span className="text-gradient bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
                                    Community and Environmental Impact
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-4 animated-text">
                                Empowering Communities with Eco-Friendly Energy Solutions
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Image
                                src="/images/logo/png1.png"
                                alt="Innovative Technologies"
                                width={300}
                                height={200}
                                className="w-full max-w-sm sm:max-w-md md:max-w-lg animated-image"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <style jsx>{`
                .animated-slide {
                    animation: slide-in 1s ease-in-out;
                }

                .animated-content {
                    animation: content-fade-in 1.5s ease-in-out;
                }

                .animated-text {
                    animation: text-slide-up 1s ease-in-out;
                }

                .animated-image {
                    animation: image-fade-in 1.5s ease-in-out;
                }

                .animated-up-down {
                    animation: up-down 3s ease-in-out infinite alternate;
                }

                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes content-fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes text-slide-up {
                    from {
                        transform: translateY(50%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes image-fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes up-down {
                    from {
                        transform: translateY(0);
                    }
                    to {
                        transform: translateY(20px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Slider1;
