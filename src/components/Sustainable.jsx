import React from "react";
import Image from "next/image";

const Sustainable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center  text-black py-12 px-6 md:px-12 lg:px-24 gap-6">
        <div className="flex flex-col items-start space-y-6 p-6 md:p-12">
        <h1 className="text-3xl font-bold">
  <span className=" text-gradient
              bg-gradient-to-r
              from-green-800
              to-green-200
              bg-clip-text
              text-transparent">
    THUAN HAI CORPORATION
  </span>
</h1>

        <p className="text-lg md:text-xl">
          Established in 2010, <strong>Thuan Hai</strong> has made great
          strides, becoming the leading Group in Steam-Heat-Electricity energy
          solutions in Vietnam. We provide a variety of energy solutions,
          offering fuels such as coal, biomass, waste, and effective logistics
          solutions surrounding a closed supply chain.
        </p>
        <button className="text-lg p-4 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-lg">
          View More
        </button>
      </div>
      <div className="md:w-full flex justify-center">
        <Image
          src="/images/logo/2.jpg" // Ensure this path matches your image
          alt="Thuan Hai Corporation Building"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      
    </div>
  );
};

export default Sustainable;
