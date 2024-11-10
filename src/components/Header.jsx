import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

const Header = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/book');
  };

  return (
    <div className="flex flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
        Empowering Communication and <br /> Hearing Health, All Online
        </p>
        <button
          onClick={handleBookAppointment}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 translate-all duration-300"
        >
          Consult with our Specialists{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </button>
      </div>

      <div className="md:w-1/2">
        <img
          className="w-full h-auto rounded-lg pt-6"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
