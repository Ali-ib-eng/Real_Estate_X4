import React from "react";
import { useNavigate } from "react-router-dom";
import './Button.css';

const PrimaryButton = ({ buttonLabel, buttonType, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className="mr-primary-button"
      type={buttonType}
      onClick={handleClick}
    >
      <span className="button">{buttonLabel}</span>
    </button>
  );
};

export default PrimaryButton;

// import React from 'react';
// import './Button.css';

// const PrimaryButton = ({ buttonLabel, buttonType }) => {
//     return (
//         <button className='mr-primary-button' type={buttonType}>
//            <span className='button'>{buttonLabel}
//            </span>
//         </button>
//     );
// };

// export default PrimaryButton;
