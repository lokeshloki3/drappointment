import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { assets } from "../assets/assets"; // Ensure you have the correct image path

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 mt-24">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            GM-13, D.D. Nagar, <br />
            Kushwah Market, Gwalior - 474020
          </p>
          <p className="text-gray-500">
            Tel: <a href="tel:+919999999999" className="text-blue-600 hover:text-blue-500 hover:underline">+91 99999 99999</a><br />
            Email: <a href="mailto:cortihear@gmail.com" className="text-blue-600 hover:text-blue-500 hover:underline">cortihear@gmail.com</a>
          </p>

          <div className="flex justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-500 transition duration-200">
              <FaWhatsapp className="text-xl mr-2" />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
          </div>

          {/* Uncomment if you want to include careers section */}
          {/* <p className="font-semibold text-lg text-gray-600">CAREERS AT PRESCRIPTO</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
