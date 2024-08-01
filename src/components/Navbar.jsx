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
    <nav className="fixed top-0 left-0 w-full bg-white p-2 px-10 border-b rounded-sm shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <img
              src="/images/logo/eco.jpeg"
              alt="Logo"
              width={180}
              height={180}
            />
          </Link>
        </div>
        <button className="lg:hidden text-black" onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" passHref className="nav-link">
            Home
          </Link>

          <div className="vertical-line"></div>

          <Link href="/aboutus" passHref className="nav-link">
            About
          </Link>

          <div className="vertical-line"></div>

          <Link href="/sustainability1" passHref className="nav-link">
            Sustainability
          </Link>
          <div className="vertical-line"></div>

          <Link href="/faq" passHref className="nav-link">
            FAQ
          </Link>

          <div className="vertical-line"></div>

          <Link href="/publish" passHref className="nav-link">
            Blog
          </Link>

          <div className="vertical-line"></div>

          <Link href="/contact" passHref className="nav-link">
            Contact
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 z-50">
            <button className="mb-4 text-black" onClick={toggleSidebar}>
              <FaTimes className="h-6 w-6" />
            </button>
            <ul className="space-y-6">
              <li>
                <Link href="/" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/sustainability1" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/faq" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/publish" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref className="mobile-nav-link" onClick={toggleSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <style jsx>{`
        .nav-link {
          position: relative;
          color: black;
          transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #22c55e;
          transition: width 0.4s ease, background-color 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
          left: 0;
          background: #16a34a;
        }

        .vertical-line {
          height: 24px;
          width: 1px;
          background-color: #e5e7eb;
          margin: 0 12px;
        }

        .mobile-nav-link {
          color: black;
          position: relative;
          display: block;
          margin: 10px 0;
          padding: 10px;
          transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .mobile-nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #22c55e;
          transition: width 0.4s ease, background-color 0.3s ease;
        }

        .mobile-nav-link:hover::after {
          width: 100%;
          left: 0;
          background: #16a34a;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
