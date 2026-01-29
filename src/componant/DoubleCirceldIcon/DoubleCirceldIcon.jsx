import React from 'react';
import "./DoubleCirceldIcon.css"

const DoubleCirceldIcon = ({ iconLink }) => {
    return (
        <span className='mr-outer-border'>
            <span className='mr-inner-border'>
                <img className='mr-icon' src={iconLink} />
            </span>
        </span>
    );
};

export default DoubleCirceldIcon;