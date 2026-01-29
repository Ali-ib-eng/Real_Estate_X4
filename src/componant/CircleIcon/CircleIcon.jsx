import React from 'react';
import "./CircleIcon.css"

const CircleIcon = ({ iconLink }) => {
    return (
        <span className='mr-circle-icon'>
            <img className='mr-icon' src={iconLink} />
        </span>
    );
};

export default CircleIcon;