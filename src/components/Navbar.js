import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import Arrow from '../Ui/Arrow.js'
import Search from '../Ui/Search.js';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#133009]"> {/* Add sticky and top-0 classes here */}
      <div className="max-w-6xl mx-auto ">
        <div className="flex h-16">
          {/* logo */}
          <div className="flex basis-1/2 items-center">
            <a href="#" className="flex items-center space-x-2 text-white">
              <img src={logo} alt="Logo" className="h-12 mr-3" />
              <span className="font-bold text-3xl">DeCarbonn</span>
            </a>
          </div>

          {/* primary nav */}
          <div className="hidden basis-1/2 justify-end md:flex items-center flex-row ">
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Carbon Calculator</a>
            <a href="#" className=" flex flex-row py-5 px-3 text-white hover:text-gray-300">Projects<Arrow/></a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">About</a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">Team</a>
            <div className=""><Search/></div>
          </div>

          {/* secondary nav */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="py-2 px-3 text-white hover:text-gray-300">
              {/* Icon or search bar */}
            </a>
          </div>

          {/* mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button text-white hover:text-gray-300" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Carbon Calculator</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Projects</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">About</a>
        <a href="#" className="block py-2 px-4 text-sm text-white">Team</a>
      </div>
    </nav>
  );
};

export default Navbar;
