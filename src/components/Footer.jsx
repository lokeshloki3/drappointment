// import { assets } from "../assets/assets";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-300">
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-flow-col gap-14 my-10 mt-10 text-sm">
          <div>
            <img className="mb-5 w-40" src='' alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
              Feel free to contact
            </p>
            <div className="flex space-x-4 mt-3">
              <FaInstagram className="text-gray-600 hover:text-gray-800" />
              <FaTwitter className="text-gray-600 hover:text-gray-800" />
              <FaLinkedin className="text-gray-600 hover:text-gray-800" />
            </div>
          </div>

          <div className="mr-20">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>9999999999</li>
              <li>cortihear@gmail.com</li>
              <li>GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
