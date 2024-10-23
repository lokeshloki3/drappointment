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
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">{category.title}</h1>

      <button
        className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition mb-4"
        onClick={() => navigate("/blogs")}>
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {category.items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 text-center">
            <img className="rounded-lg mb-4" src={item.image} alt={item.title} />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700 mb-4 text-left">{item.summary}</p>
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={() => navigate(`/${categoryId}/${item.id}`)} // Adjust to match your structure
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
