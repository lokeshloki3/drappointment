import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

const Blogs = () => {

  return (
    <div>
      <p className="text-gray-600">Browse through Blogs</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className='py-3 px-3 border rounded text-sm transition-all sm:hidden'
        >
          Filters
        </button>
        <div
          className='flex-col gap-4 text-sm text-gray-600'
        >
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '
          >
            General Physician
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Gynecologist
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Dermatologist
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Pediatricians
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Neurologist
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
              Hello
        </div>
      </div>
    </div>
  );
};

export default Blogs;
