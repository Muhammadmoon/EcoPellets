import React from "react";
import Image from "next/image";

const Sustainable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center  text-black py-12 px-6 md:px-12 lg:px-24 gap-6">
        <div className="flex flex-col items-start space-y-6 p-6 md:p-12">
        <h1 className="text-6xl font-bold">
  <span className=" text-gradient
              bg-gradient-to-r
              from-green-800
              to-green-200
              bg-clip-text
              text-transparent">
    Get To Know Us
  </span>
</h1>

<p className="text-lg md:text-xl text-center">
    <strong>EcoPellets Energy</strong> is a pioneering renewable energy company focused on producing sustainable, eco-friendly pellet fuels. Our mission is to provide efficient alternatives to fossil fuels, reducing environmental impact and promoting a greener future. Through innovation and dedication, we aim to make renewable energy accessible to everyone. Join us in our journey towards a sustainable world.
</p>

        <a href="/aboutus">
        <button className="text-lg p-4 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-lg">
          View More
        </button>
        </a>
      </div>
      <div className="md:w-full flex justify-center">
        <img
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