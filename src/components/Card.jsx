import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    const review = props.review;

    return (
        <div className="bg-white p-2 md:p-3 rounded-lg shadow-lg flex flex-col items-center text-center w-4/5 md:w-1/3 mx-auto"> {/* Updated width here */}
            <img src={review.image} alt={review.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2" />
            
            <div>
                <p className="text-lg md:text-md font-semibold">{review.name}</p>
                <p className="text-gray-500 text-xs md:text-xs">{review.job}</p>
            </div>

            <p className="text-gray-700 text-xs md:text-xs mt-2 px-1 md:px-2">{review.text}</p>
        </div>
    );
};

export default Card;
