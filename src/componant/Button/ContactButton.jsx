import React from "react";
import "./Button.css";

const ContactButton = ({ buttonLabel }) => {
  return (
    <button className="mr-contact-button">
      <span className="button">{buttonLabel}</span>
    </button>
  );
};

export default ContactButton;
