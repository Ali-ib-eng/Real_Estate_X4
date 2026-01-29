import React from 'react';
import './Button.css';

const SecondaryButton = ({ buttonLabel }) => {
    return (
        <button className='mr-secondary-button'>
            <span className='button'>{buttonLabel}
            </span>
        </button>
    );
};

export default SecondaryButton;