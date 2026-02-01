import React from 'react';
import './Stars.css';

const Stars = ({ }) => {
    return (
        <span className='mr-section-header-stars'>
            <img src='/assets/icons/sparkling-dark.svg' className='mr-star-bg'></img>
            <img src='/assets/icons/sparkling-grey.svg' className='mr-star-md'></img>
            <img src='/assets/icons/sparkling-grey.svg' className='mr-star-sm'></img>
        </span>
    );
};

export default Stars;