import React from 'react';

const Card = ({ review, isTruncated, setIsTruncated }) => {
    const wordLimit = 40;
    // Function to truncate text to the first `wordLimit` words
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ');
    };

    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-sm mx-auto">
            <img 
                src={review.image} 
                alt={review.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2" 
            />
            
            <div>
                <p className="text-sm sm:text-lg font-semibold">{review.name}</p>
                <p className="text-sm sm:text-sm font-semibold">{review.patient}</p>
            </div>

            <p className="text-gray-800 text-xs sm:text-base mt-2 px-1 inline">
                {isTruncated ? truncateText(review.text, wordLimit) : review.text}
                <span 
                    onClick={() => setIsTruncated(!isTruncated)} // Toggle truncated text
                    className="text-blue-600 cursor-pointer ml-1"
                >
                    {isTruncated ? '...read more' : ' Show less'}
                </span>
            </p>
        </div>
    );
};

export default Card;
