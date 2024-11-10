import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-300">
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-flow-col gap-14 my-10 mt-10 text-sm">
          <div>
            <img className="mb-5 w-40" src='' alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">
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
              <li>
                <Link to="/" className="hover:text-gray-800">Home</Link> {/* Link to Home */}
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-800">About Us</Link> {/* Link to About Us */}
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-800">Contact</Link> {/* Link to Contact */}
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-800">Privacy Policy</Link> {/* Link to Privacy Policy */}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="tel:+918103712273" className="hover:text-gray-800">+91 81037 12273</a> {/* Clickable phone number */}
              </li>
              <li>
                <a href="mailto:cortihear@gmail.com" className="hover:text-gray-800">cortihear@gmail.com</a> {/* Clickable email */}
              </li>
              <li>GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020</li> {/* Address remains plain text */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
