import { assets } from "../assets/assets";
import "../index.css";

const Header = ({ setIsModalOpen }) => {

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-[#39868E]"
      // style={{
      //   backgroundImage: `url(${assets.backgroundImage})`, // Replace with the actual image path bg-[#5F6FFF]
      //   backgroundSize: 'cover',
      //   // backgroundPosition: 'center',
      //   // backgroundAttachment: 'fixed', // Optional: Adds a parallax effect
      // }}
    >
      {/* <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]"> */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 py-8 m-auto md:py-[10vw]">
        <p className="text-3xl md:text-4xl text-white font-semibold">
          Empowering Communication and <br /> Hearing Health, All Online
        </p>
        <button
          onClick={handleBookAppointment}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-lg hover:scale-105 duration-300"
        >
          Consult with our Specialists{" "}
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

      <div className="md:w-1/2 rounded-lg flex flex-col justify-center items-center">
        <img
          // className="w-[70%] h-auto rounded-lg pt-6 animate-left-right"
          className="w-[70%] h-auto rounded-lg pt-6"
          src={assets.header_img}
          alt="Header"
        />


        {/* <p className="text-center text-white mt-4 text-sm md:text-base">
          BASLP, AYJNISHD, Noida, Masters in Audiology, AIISH, Mysore
        </p>
        <p className="text-center text-white mt-1 text-sm md:text-base">
          EX-Audiologist AIIMS, Delhi
        </p> */}
        <div
          className="text-center text-white rounded-lg "
          // style={{
          //   backgroundColor: '#8376A1',
          // }}
        >
          <p className='text-xl font-semibold'>Lokesh</p>
          <p className="text-sm md:text-[15px]">BASLP, AYJNISHD, Noida, Masters in Audiology, AIISH, Mysore</p>
          <p className="text-sm md:text-[15px]">EX-Audiologist AIIMS, Delhi</p>
        </div>

        <div className="flex justify-center gap-4 mb-2 mt-2">
          <img className="w-11 h-11 rounded-full object-cover" src={assets.expe1} alt="expe 1" />
          <img className="w-11 h-11 rounded-full object-cover" src={assets.expe2} alt="expe 2" />
          <img className="w-11 h-11 rounded-full object-cover" src={assets.expe3} alt="expe 3" />
          <img className="w-11 h-11 rounded-full object-cover" src={assets.expe4} alt="expe 4" />
        </div>
      </div>
    </div>
  );
};

export default Header;