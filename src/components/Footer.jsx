// import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-flow-col gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src='' alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            Feel free to contact
          </p>
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
            <li>+1-212-34567-82</li>
            <li>Prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
