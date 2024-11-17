import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../assets/blogsData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories[categoryId];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-3xl mb-6 text-center text-gray-700 font-semibold">{category.title}</h1>

      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/blogs")}
        >
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {category.items.map((item) => (
          <div 
            key={item.id} 
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] p-4 text-center"
          >
            <img className="rounded-lg mb-4" src={item.image} alt={item.title} />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700 mb-4 text-left">{item.summary}</p>
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={() => navigate(`/blogs/${categoryId}/${item.id}`)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
