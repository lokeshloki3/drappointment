import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Card from './Card';

const Testimonials = (props) => {
    const reviews = props.reviews || [];
    const [index, setIndex] = useState(0);
    const [isTruncated, setIsTruncated] = useState([true, true]); // Array to hold truncation state for each card

    const rightShiftHandler = () => {
        setIndex((index + 2) % reviews.length);
        setIsTruncated([true, true]); // Reset truncation for both cards
    };

    const leftShiftHandler = () => {
        setIndex((index - 2 + reviews.length) % reviews.length);
        setIsTruncated([true, true]); // Reset truncation for both cards
    };

    const leftIndex = (index - 1 + reviews.length) % reviews.length;

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
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-4">
                    <Card review={reviews[leftIndex]} isTruncated={isTruncated[0]} setIsTruncated={(state) => {
                        const newTruncatedState = [...isTruncated];
                        newTruncatedState[0] = state;
                        setIsTruncated(newTruncatedState);
                    }} />
                    <Card review={reviews[index]} isTruncated={isTruncated[1]} setIsTruncated={(state) => {
                        const newTruncatedState = [...isTruncated];
                        newTruncatedState[1] = state;
                        setIsTruncated(newTruncatedState);
                    }} />
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
