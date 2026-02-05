import React from "react";
import { useNavigate } from "react-router-dom";
import './Button.css';

const SecondaryButton = ({ buttonLabel, buttonType, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className="mr-secondary-button"
      type={buttonType}
      onClick={handleClick}
    >
      <span className="button">{buttonLabel}</span>
    </button>
  );
};

export default SecondaryButton;