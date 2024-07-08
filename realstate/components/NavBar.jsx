'use client';
import React, { useState } from 'react';
import Image from "next/image";
import logo from "../public/logo.png";

export const Navbar = ({ links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sticky top-0 w-full bg-black  ${isOpen ? '' : 'h-20'}`}>
      <div className=" sticky top-0 max-w-7xl p-2 z-10  bg-black mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex justify-center p-2 align-middle hover:scale-110 transition-transform duration-200">
              <Image src={logo} alt="logo" width={400} height={400} className="w-10 h-12"></Image>
              <a href="/" className="text-white ml-2 text-2xl font-bold">
                <p className='text-xl  text-orange-400 text-center'>LORENA HUCK</p>
                <p className='text-xs w-full text-zinc-400 text-center'>I N M O B I L I A R I A</p>
              </a>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <a key={index} href={link.url} className="text-gray-300 transition-all duration-200 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{link.text}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <a href='/login' type="button" className="bg-black mx-1 inline-flex transition-all duration-200 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                Login
              </a>
              <button type="button" className="bg-black mx-1 inline-flex transition-all duration-200 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                User
                <Image src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1" alt="image of user" width={100} height={100} className="w-8 h-8 rounded-full ml-2"></Image>
              </button>
            </div>
          </div>
          

          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-black inline-flex transition-all duration-100 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all z-1 bg-black duration-300 ${isOpen ? 'block' : 'translate-y-[-150%]'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.text}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;