"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          
        
            <a  href="/" className="flex items-center space-x-2">
              <Image src="/images/logo/eco.jpeg" alt="Logo" width={180} height={180} />
              {/* <span className="text-black font-bold text-2xl">MyWebsite</span> */}
            </a>
    
          {/* <span className="text-black font-bold text-2xl">MyWebsite</span> */}
        </div>
        <button className="lg:hidden text-black" onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-black hover:text-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-black hover:text-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Blog
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
            <button className="mb-4 text-black" onClick={toggleSidebar}>
              <FaTimes className="h-6 w-6" />
            </button>
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="flex items-center space-x-3 text-black hover:text-blue-500"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center space-x-3 text-black hover:text-green-500"
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center space-x-3 text-black hover:text-green-500"
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-3 text-black hover:text-green-500"
                >
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center space-x-3 text-black hover:text-green-500"
                >
                  <span>Blog</span>
                </Link>
              </li>
            </ul>

            <div className="flex items-center mt-10">
            <a  href="/" className="flex items-center space-x-2">
    <Image src="/images/logo/eco.jpeg" alt="Logo" width={180} height={180} className="lg:w-40 lg:h-40" />
    </a>
    {/* <span className="text-black font-bold text-2xl">MyWebsite</span> */}
  </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
