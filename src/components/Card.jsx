import React from 'react';

const Card = ({ review, isTruncated, setIsTruncated }) => {
    const wordLimit = 40;
    // Truncate text to the first `wordLimit` words
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
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-1"
            />
            
            <div>
                <p className="text-base sm:text-lg font-semibold">{review.name}</p>
                <p className="text-sm sm:text-base font-semibold">{review.patient}</p>
            </div>

            <p className="text-gray-800 text-sm sm:text-base mt-2 px-1 inline">
                {isTruncated ? truncateText(review.text, wordLimit) : review.text}
                <span 
                    onClick={() => setIsTruncated(!isTruncated)}
                    className="text-blue-600 cursor-pointer ml-1"
                >
                    {isTruncated ? '...Read More' : 'Show less'}
                </span>
            </p>
        </div>
    );
};

export default Card;
