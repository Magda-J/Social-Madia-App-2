'use client'

import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, setRating, totalStars = 5, size }) => {
    const getStarColor = (ratingValue) => {
        switch (ratingValue) {
            case 1:
                return '#FFA500'; // Orange
            case 2:
                return '#FFA500'; // Orange
            case 3:
                return '#FFA500'; // Orange
            case 4:
                return '#FFA500'; // Orange
            case 5:
                return '#FFA500'; // Orange
            default:
                return '#fff'; // Default color for no rating
        }
    };

    return (
        <div  className='flex flex-row'>
            {[...Array(totalStars)].map((_, index) => {
                const currentRate = index + 1;
                
                return (
                    <div> <label key={index}>
                    <input 
                        type="radio" 
                        name="rate" 
                        value={currentRate}
                        onClick={() => setRating(currentRate)}
                        style={{ display: 'none'}} // Hide the radio button
                    />
                    <FaStar 
                        color={currentRate <= rating ? getStarColor(currentRate) : 'white'}
                        size={size}
                    />
                </label> </div>

                );
            })}
        </div>
    );
};

export default StarRating;