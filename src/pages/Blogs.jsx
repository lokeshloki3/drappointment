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
            All Blogs
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Aphasia
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Autism
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Case Study
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'
          >
            Occupational Therapy
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'          >
            Speech Delay
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'          >
            Speech Therapy
          </p>
          <p
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'          >
            Success Stories
          </p>
        </div>
        {/* <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
              Hello
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
