import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import whatsapp from '../assets/WhatsApp.png';

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400 border-b">
      <img src={logo}
        onClick={() => navigate("/")}
        className='w-44 cursor-pointer rounded'
        alt='logo'
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
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

      <div className='flex text-center'>
        <img
            className="mr-3"
            src={whatsapp}
            alt="whatsapp logo"
          />
          <NavLink to="/book">
            <p className='mt-2 font-bold'>Book Appointment</p>
          </NavLink>
      </div>
    </div>
  )
}

export default Navbar