import { specialityData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SpecialityMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >

      <p className="sm:w-1/3 text-center text-lg sm:text-xl">
        Click to book your online appointment
      </p>
      <div className="flex flex-wrap sm:justify-center gap-4 pt-5 w-full">
        {specialityData.map((item, index) => (
          <p
            onClick={() => navigate("/book")}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 w-[calc(20%-16px)]"
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2 border rounded-full" src={item.image} alt="" />
            <span className="text-center text-xs sm:text-base">{item.speciality}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
