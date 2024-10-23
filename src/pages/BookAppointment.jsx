import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BookAppointment = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-semibold text-center mb-4">Book an Appointment</h2>
      
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:cortihear@gmail.com" className="text-blue-600 hover:underline">cortihear@gmail.com</a></p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700"><strong>Phone:</strong> <a href="tel:+919999999999" className="text-blue-600 hover:underline">tel:+919999999999</a></p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700"><strong>Office Address:</strong> GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020</p>
      </div>
      
      <div className="flex items-center">
        <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
          <FaWhatsapp className="mr-2" />
          WhatsApp Us
        </a>
      </div>
    </div>
  );
};

export default BookAppointment;


// href="https://wa.me/1234567890"