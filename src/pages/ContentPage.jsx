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
    <div className="container mx-auto p-6 mt-24">
      
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
      <div className="border border-blue-200 rounded-xl overflow-hidden p-4 mb-8 shadow-md">
        <img className="rounded-lg mb-4" src={selectedContent.image} alt={selectedContent.title} />

        <h1 className="text-3xl font-bold mb-6 text-center">{selectedContent.title}</h1>

        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Introduction</h2>
          <p className="text-gray-600 mt-2">{selectedContent.introduction}</p>
        </section>

        {/* The Impact of Hearing Loss on Child Development Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">The Impact of Hearing Loss on Child Development</h2>
          <p className="text-gray-600 mt-2">{selectedContent.impact}</p>
        </section>

        {/* Screening Methods and Protocols Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Screening Methods and Protocols</h2>
          <p className="text-gray-600 mt-2">{selectedContent.screeningMethods}</p>
        </section>

        {/* Research on Early Screening Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Research on Early Screening</h2>
          <p className="text-gray-600 mt-2">{selectedContent.research}</p>
        </section>

        {/* Why Early Intervention is Crucial Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Why Early Intervention is Crucial</h2>
          <p className="text-gray-600 mt-2">{selectedContent.whyEarlyIntervention}</p>
        </section>

        {/* Conclusion Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">Conclusion</h2>
          <p className="text-gray-600 mt-2">{selectedContent.conclusion}</p>
        </section>
      </div>
    </div>
  );
};

export default ContentPage;
