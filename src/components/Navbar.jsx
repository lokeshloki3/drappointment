import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import whatsapp from '../assets/WhatsApp.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="relative flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400 border-b">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 focus:outline-none mr-4"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Logo */}
      <img 
        src={logo}
        onClick={() => navigate("/")}
        className='w-44 cursor-pointer rounded'
        alt='logo'
      />

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 bg-white shadow-lg z-10">
          <ul className="flex flex-col items-start gap-2 p-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <li className="py-1">HOME</li>
            </NavLink>
            <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
              <li className="py-1">BLOGS</li>
            </NavLink>
            <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
              <li className="py-1">ABOUT</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <li className="py-1">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      )}

      {/* Navigation Links (Desktop View) */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
          <li className="py-1">BLOGS</li>
        </NavLink>
        <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex text-center'>
        <img className="mr-3" src={whatsapp} alt="whatsapp logo" />
        <NavLink to="/book">
          <p className='mt-2 font-bold'>Book Appointment</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
