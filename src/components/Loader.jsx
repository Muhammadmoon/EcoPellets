'use client'
// src/app/components/Loader.jsx

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="logo-container">
        <img src="/images/logo/eco.jpeg" alt="Eco Pellets Logo" className="logo" />
      </div>
      <style jsx>{`

      
        
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: bounce 0.8s infinite,  infinite;
        }
       
       
      
      `}</style>
    </div>
  );
};

export default Loader;
