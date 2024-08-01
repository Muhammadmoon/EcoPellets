// import React from 'react';

// export default function SDGS() {
//   return (
//     <div className="bg-gradient-to-b from-blue-500 to-green-500 min-h-screen flex flex-col items-center justify-center text-white">
//       <div className="text-center py-8">
//         <h1 className="text-4xl font-bold mb-4">Aligning with the  SDG's</h1>
//         <p className="mb-6 max-w-lg mx-auto">
//         Eco -Pellets Energy alligns with the SDG's, fostering good health, climate action, affordable energy, economic growth, and partnership for sustainable goals.
//         </p>
//         {/* <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded">
//           Learn More
//         </button> */}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
//         <div className="text-center">
//           <div className="text-6xl mb-2">40%</div>
//           <p className="text-xl">Up To 40% Cost Saving</p>
//         </div>
//         <div className="text-center">
//           <div className="text-6xl mb-2">🔥</div>
//           <p className="text-xl">Constant Heat & Pressure</p>
//         </div>
//         <div className="text-center">
//           <div className="text-6xl mb-2">🌡️</div>
//           <p className="text-xl">Max Heat</p>
//         </div>
//         <div className="text-center">
//           <div className="text-6xl mb-2">✔️</div>
//           <p className="text-xl">Reliability</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { FaHeartbeat, FaSolarPanel, FaBriefcase, FaTree } from 'react-icons/fa';
import { IoInfinite } from "react-icons/io5";

// Add your styles inside a <style jsx global> block
const styles = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}

.animate-slideIn {
  animation: slideIn 1s ease-in-out;
}

.animate-spin-slow {
  animation: spinSlow 5s linear infinite;
}
`;

export default function SDGS() {
  return (
    <>
      <style jsx global>{styles}</style>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-7xl bg-white p-8 w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 animate-fadeIn text-center">Aligning with the SDG's</h1>
          <div className="border-t-4 border-green-500 w-16 mb-6 animate-slideIn mx-auto"></div>
          <p className="text-lg text-gray-700 mb-6 animate-fadeIn text-center">
            Eco-Pellet Energy aligns with the SDGs, fostering good health, climate action, affordable energy,
            economic growth, and partnership for sustainable goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card
              icon={<FaHeartbeat size={50} className="text-green-500 mb-4 animate-pulse " />}
              title="Good Health and Well-Being"
              number="3"
              color="bg-green-100"
            />
            <Card
              icon={<FaSolarPanel size={50} className="text-yellow-500 mb-4 animate-bounce" />}
              title="Affordable and Clean Energy"
              number="7"
              color="bg-yellow-100"
            />
            <Card
              icon={<FaBriefcase size={50} className="text-red-500 mb-4 animate-pulse" />}
              title="Decent Work and Economic Growth"
              number="8"
              color="bg-red-100"
            />
            <Card
              icon={<FaTree size={50} className="text-green-800 mb-4 animate-pulse" />}
              title="Climate Action"
              number="13"
              color="bg-green-200"
            />
            <Card
              icon={< IoInfinite size={50} className="text-blue-500 mb-4 animate-spin-slow" />}
              title="Responsible Consumption and Production"
              number="12"
              color="bg-blue-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ icon, title, number, color }) {
  return (
    <div className={`flex flex-col items-center p-6 ${color} rounded-lg shadow hover:shadow-md transition-shadow duration-300 animate-fadeIn`}>
      {icon}
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <span className="text-green-500 font-bold text-2xl mt-2">{number}</span>
    </div>
  );
}
