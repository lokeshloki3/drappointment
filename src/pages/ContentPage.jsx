import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../assets/blogsData';

const ContentPage = () => {
  const { categoryId, contentId } = useParams();
  const navigate = useNavigate();
  const category = categories[categoryId];
  const selectedContent = category?.items.find(item => item.id === parseInt(contentId));

  // Handle content not found
  if (!category || !selectedContent) {
    return <div className="container mx-auto p-6 mt-24">Content not found</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-20">
      
      {/* Back Button */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={() => navigate(`/blogs/${categoryId}`)}
        >
          Back
        </button>
      </div>

      {/* Blog Content */}
      <div className="border border-blue-200 rounded-xl overflow-hidden p-4 md:p-10 mb-8 shadow-md">
        <img className="rounded-lg mb-4" src={selectedContent.image} alt={selectedContent.title} />

        <h1 className="text-3xl font-semibold mb-6 text-center">{selectedContent.title}</h1>

        {/* Dynamically Render Sections */}
        {selectedContent.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold text-gray-700 mt-8">{section.heading}</h2>
            <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: section.content || '' }}></p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
