import React from 'react';
import './Button.css';

const PrimaryButton = ({ buttonLabel, buttonType }) => {
    return (
        <button className='mr-primary-button' type={buttonType}>
           <span className='button'>{buttonLabel}
           </span>
        </button>
    );
};

export default PrimaryButton;