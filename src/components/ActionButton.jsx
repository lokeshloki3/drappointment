const ActionButton = ({ onClick, label }) => {
    return (
      <div className="flex justify-center mb-8 md:mb-20 md:mt-16">
        <button 
          onClick={onClick} 
        //   className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg text-base md:text-xl font-medium hover:bg-blue-500 transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#388E3C] focus:ring-offset-2">
          className="bg-[#39868E] text-white px-6 py-3 rounded-lg text-sm md:text-2xl font-semibold hover:bg-[#5F6FFF] transition duration-200">
          {label}
        </button>
      </div>
    );
  };
  
  export default ActionButton;
  