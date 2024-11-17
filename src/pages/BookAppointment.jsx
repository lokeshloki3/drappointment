import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import { assets } from "../assets/assets";

const BookAppointment = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-3xl pt-10 text-gray-500 mt-16">
        <p>
          BOOK <span className="text-gray-700 font-semibold">AN APPOINTMENT</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm md:text-base">
        {/* Appointment Image - Uncomment if you have an image */}
        {/* <img
          className="w-full max-w-[360px]"
          src={assets.appointment_image}
          alt="Appointment"
        /> */}

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg md:text-xl text-gray-600">CONTACT US</p>
          
          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Email:</strong> 
              <a href="mailto:xyz@example.com" className="text-blue-600 hover:text-blue-500 hover:underline ml-1">xyz@example.com</a>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Phone:</strong> 
              <a href="tel:+9199999999999" className="text-blue-600 hover:text-blue-500 hover:underline ml-1">+91 99999 99999</a>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Office Address:</strong>
              <span className="text-gray-600"> ABC, XYZ, Delhi - 110039</span>
            </p>
          </div>

          <div className="mb-2">
            <p className="text-gray-700 flex justify-evenly">
              <strong>Working Hours:</strong>
              <div>
                <span className='ml-3'>Monday to Saturday: 6 AM - 10 PM IST</span><br />
                <span className='ml-3'>Sunday: Closed</span>
              </div>
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Click on 'Book Appointment' above to schedule your online appointment.</strong>
            </p>
          </div>

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

export default BookAppointment;
