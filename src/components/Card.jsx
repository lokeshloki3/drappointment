import React from 'react';

const Card = (props) => {
    const review = props.review;

    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-xs mx-auto">
            <img src={review.image} alt={review.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2" />
            
            <div>
                <p className="text-sm sm:text-lg font-semibold">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.job}</p>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm mt-2 px-1">{review.text}</p>
        </div>
    );
};

export default Card;
