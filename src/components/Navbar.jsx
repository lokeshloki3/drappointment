import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { assets } from "../assets/assets";
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 left-2 md:left-16 lg:left-32 right-2 md:right-16 lg:right-32 z-10 flex items-center justify-between text-sm md:text-base py-4 mb-5 border-b border-b-gray-400 bg-white">
      {/* Logo */}
      <img 
        src={logo}
        onClick={() => navigate("/")}
        className='w-32 cursor-pointer'
        alt='logo'
      />

      {/* Menu (Centering the Menu) */}
      <ul className="hidden md:flex items-center gap-5 font-medium text-sm md:text-base mx-auto">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/blogs">
          <li className="py-1">BLOGS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about-us">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* WhatsApp Link and Book Appointment Button */}
      <div className="flex items-center md:mr-10">
        {/* WhatsApp Link */}
        <a 
          href="https://wa.me/918103712273" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-green-600 hover:text-green-500 transition duration-200"
        >
          <FaWhatsapp className="text-2xl md:text-3xl mr-3" />
        </a>

        {/* Book Appointment Button */}
        <span 
          className='font-bold cursor-pointer text-sm md:text-base' 
          onClick={() => setIsModalOpen(true)}  // Open modal when clicked
        >
          Book Appointment
        </span>
      </div>


      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu icon"
        />

        {/* Mobile Menu */}
        <div className={`${
            showMenu ? "fixed w-full " : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/blogs">
              <p className="px-4 py-2 rounded inline-block">BLOGS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about-us">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
