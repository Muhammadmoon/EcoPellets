"use client";

import React from "react";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="">
      <div className="md:flex md:flex-row flex-col items-center justify-center pb-10 px-6 md:px-12 lg:px-24 gap-6">
        <div className="p-5 justify-center">
          <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-4xl font-bold pb-6 md:pb-10 whitespace-nowrap overflow-hidden text-ellipsis mt-20">
            How to Use Pellets
          </div>
          <div className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            in natus dolorum ex nihil laudantium id cupiditate repudiandae
            ipsum, ratione iusto soluta voluptatibus voluptate laboriosam
            pariatur voluptatum accusantium dignissimos quasi.
          </div>
        </div>

        <video
          className="rounded-xl w-full md:w-2/5 mx-auto md:ml-10 mt-10 md:mt-20 p-4 md:p-0"
          autoPlay
          muted
          loop
        >
          <source src="/content/pellets.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default SecondSection;
