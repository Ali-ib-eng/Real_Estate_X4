import React from 'react';
import './Button.css';

const PrimaryButton = ({ buttonLabel }) => {
    return (
        <button className='mr-primary-button'>
           <span className='button'>{buttonLabel}
           </span>
        </button>
    );
};

export default PrimaryButton;