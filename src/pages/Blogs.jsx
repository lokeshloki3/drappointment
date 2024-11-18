import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../assets/blogsData';

const Blogs = () => {
  return (
    <div className='mb-10'>
      <div className="text-center mt-16 text-3xl pt-10 text-gray-500 mb-7">
        <p>
          <span className="text-gray-700 font-medium">BLOGS</span>
        </p>
      </div>
      <p className="text-gray-600 text-center text-lg sm:text-xl">Browse through our blog categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Object.entries(categories).map(([categoryId, category]) => (
          <Link to={`/blogs/${categoryId}`} key={categoryId} className="block">
            <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] h-full">
              <div className="bg-white p-4 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">{category.title}</h3>
                  <p className="text-gray-500 mt-2">{category.description || "Explore this category!"}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
