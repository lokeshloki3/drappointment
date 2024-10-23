import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../assets/blogsData';

const ContentPage = () => {
  const { categoryId, contentId } = useParams();
  const navigate = useNavigate();

  const category = categories[categoryId];
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const selectedContent = category.items.find(item => item.id === parseInt(contentId));

  if (!selectedContent) {
    return <div>Content not found</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">{selectedContent.title}</h1>
      <img className="rounded-lg mb-4" src={selectedContent.image} alt={selectedContent.title} />
      <p className="text-gray-700 mb-4 text-left">{selectedContent.fullCaseStudy}</p>
      <button
        className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition"
        onClick={() => navigate(`/${categoryId}`)}
      >
        Back
      </button>
    </div>
  );
};

export default ContentPage;
