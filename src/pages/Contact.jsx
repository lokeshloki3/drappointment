import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-3xl pt-10 text-gray-500 mt-16">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm md:text-base">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg md:text-xl text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500 text-base md:text-lg">
            ABC, XYZ <br />
            Delhi - 110039
          </p>

          <p className="text-gray-500 text-base md:text-lg">
            Tel: <a href="tel:+919999999999" className="text-blue-600 hover:text-blue-500 hover:underline">+91 99999 99999</a><br />
            Email: <a href="mailto:xyz@example.com" className="text-blue-600 hover:text-blue-500 hover:underline">xyz@example.com</a>
          </p>

          <p className="text-gray-500 text-base md:text-lg">
            <strong>Working Hours:</strong><br />
            Monday to Saturday: 6 AM - 10 PM IST<br />
            Sunday: Closed
          </p>          

          <div className="flex justify-center">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-500 transition duration-200">
              <FaWhatsapp className="text-xl mr-2" />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
