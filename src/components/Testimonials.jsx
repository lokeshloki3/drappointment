import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Card from './Card';

const Testimonials = (props) => {
    const reviews = props.reviews || [];
    const [index, setIndex] = useState(0);

    const rightShiftHandler = () => {
        setIndex((index + 2) % reviews.length);
    };

    const leftShiftHandler = () => {
        setIndex((index - 2 + reviews.length) % reviews.length);
    };

    const leftIndex = (index - 1 + reviews.length) % reviews.length;
    // const rightIndex = (index + 1) % reviews.length;

    return (
        <>
            <h1 className='text-center text-4xl my-2'>Testimonials</h1>
            <div className="w-full min-h-screen flex flex-col md:flex-row lg:flex-row items-center justify-center relative bg-antiquewhite overflow-hidden p-4">
                {/* Left Arrow */}
                <AiOutlineLeft
                    className="cursor-pointer text-2xl md:text-3xl lg:text-3xl absolute left-5 md:left-10 lg:left-10 text-gray-600"
                    onClick={leftShiftHandler}
                />

                {/* Center Testimonial Cards */}
                {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"> */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-4">
                    <Card review={reviews[leftIndex]} />
                    <Card review={reviews[index]} />
                </div>

                {/* Right Arrow */}
                <AiOutlineRight
                    className="cursor-pointer text-2xl md:text-3xl lg:text-3xl absolute right-5 md:right-10 lg:right-10 text-gray-600"
                    onClick={rightShiftHandler}
                />
            </div>
        </>
    );
};

export default Testimonials;
