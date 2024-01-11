'use client'

import React from "react";

import Rating from 'react-star-rating-component';
import { useState } from "react";
import './components.css'

// sky-500 to gray-300
const StarRating = () => {
    const [rating, setRating] = useState(0);
    
    
    const handleStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
}

const getStarColor = (rating) => {
    switch (rating) {
        case 1:
            return '#8B0000'; // Dark Red
        case 2:
            return '#FFA500'; // Orange
        case 3:
            return '#FFFF00'; // Yellow
        case 4:
            return '#9ACD32'; // Yellow Green
        case 5:
            return '#008000'; // Green
        default:
            return '#ccc'; // Default color for no rating
    }
};

    return(
        <div>
            <Rating 

            name="star-sizing"
            value={rating}
            onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)} 
            starCount={5}
            starColor={getStarColor(rating)}
            emptyStarColor={'#fff'}
            />
        </div>
    )
}

export default StarRating; 
