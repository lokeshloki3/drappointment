import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { assets } from "../assets/assets"; // Adjust this if you have an image to include

const BookAppointment = () => {
  return (
    <div>
      <div className="text-center mt-20 text-2xl pt-10 text-gray-500">
        <p>
          BOOK <span className="text-gray-700 font-semibold">AN APPOINTMENT</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-10 mb-28">
        {/* Uncomment and use if you have an image to display */}
        {/* <img
          className="w-full md:max-w-[360px]"
          src={assets.appointment_image}
          alt=""
        /> */}
        
        <div className="flex flex-col justify-center items-start gap-6 text-sm text-gray-600">
          <p className="font-semibold text-lg text-gray-600">CONTACT US</p>
          
          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Email:</strong> 
              <a href="mailto:cortihear@gmail.com" className="text-blue-600 hover:text-blue-500 hover:underline ml-1">cortihear@gmail.com</a>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Phone:</strong> 
              <a href="tel:+919999999999" className="text-blue-600 hover:text-blue-500 hover:underline ml-1">+91 99999 99999</a>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Office Address:</strong>
              <span className="text-gray-600"> GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020</span>
            </p>
          </div>

          <div className="flex justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-500 transition duration-200">
              <FaWhatsapp className="text-xl mr-2" />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
