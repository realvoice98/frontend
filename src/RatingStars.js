import React from 'react';
import { BsStarFill } from 'react-icons/bs';

export const RatingStars = item => {
    const totalFilled = Math.ceil(item);
    return [...Array(totalFilled).keys()].map(key => (
        <BsStarFill
            key={key}
            isFilled={key < totalFilled}
            color="#FFD85C"
            size="17"
        />
    ));
};