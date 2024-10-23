import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../assets/blogsData';

const Blogs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.entries(categories).map(([categoryId, category]) => (
          <Link to={`/${categoryId}`} key={categoryId}>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
