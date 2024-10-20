import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing icons
import Card from './Card';

const Testimonials = (props) => {
    const reviews = props.reviews || [];
    const [index, setIndex] = useState(0);

    const rightShiftHandler = () => {
        setIndex((index + 1) % reviews.length);
    };

    const leftShiftHandler = () => {
        setIndex((index - 1 + reviews.length) % reviews.length);
    };

    const leftIndex = (index - 1 + reviews.length) % reviews.length;
    const rightIndex = (index + 1) % reviews.length;

    return (
        <>
            <h1 className='text-center text-4xl md:text-6xl my-8'>Testimonials</h1>
            <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center relative bg-antiquewhite overflow-hidden">
                {/* Left Blurred Testimonial */}
                <div className="absolute left-5 md:left-40 ml-5 md:ml-28 transform -translate-x-full opacity-50 blur-sm pointer-events-none">
                    <Card review={reviews[leftIndex]} />
                </div>

                {/* Left Arrow */}
                <AiOutlineLeft
                    className="cursor-pointer text-2xl md:text-3xl absolute left-5 md:left-40 text-gray-600 z-10"
                    onClick={leftShiftHandler}
                />

                {/* Center Testimonial */}
                <div className="z-20">
                    <Card review={reviews[index]} />
                </div>

                {/* Right Arrow */}
                <AiOutlineRight
                    className="cursor-pointer text-2xl md:text-3xl absolute right-5 md:right-40 text-gray-600 z-10"
                    onClick={rightShiftHandler}
                />

                {/* Right Blurred Testimonial */}
                <div className="absolute right-5 md:right-40 mr-5 md:mr-28 transform translate-x-full opacity-50 blur-sm pointer-events-none">
                    <Card review={reviews[rightIndex]} />
                </div>
            </div>
        </>
    );
};

export default Testimonials;
