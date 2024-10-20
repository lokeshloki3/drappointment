import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    const review = props.review;

    return (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-sm md:max-w-lg">
            <img src={review.image} alt={review.name} className="w-24 h-24 md:w-36 md:h-36 rounded-full mb-4" />
            
            <div>
                <p className="text-lg md:text-xl font-semibold">{review.name}</p>
                <p className="text-gray-500 text-xs md:text-sm">{review.job}</p>
            </div>

            <p className="text-gray-700 text-xs md:text-sm mt-4 px-2 md:px-4">{review.text}</p>
        </div>
    );
};

export default Card;
