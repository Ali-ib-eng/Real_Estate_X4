import React from 'react';
import './Button.css';

const SecondaryButton = ({ buttonLabel,className=""}) => {
    return (
        <button className= {`mr-secondary-button ${className}`}>
            <span className='button'>{buttonLabel}
            </span>
        </button>
    );
};

export default SecondaryButton;