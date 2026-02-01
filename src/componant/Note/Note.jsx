import React from "react";
import "./Note.css";
import "../../typography_system.css";

const Note = ({ noteLabel }) => {
  return (
    <span className="mr-note">
      <p className="subheading-2 ">Note</p>
      <p className="body">{noteLabel}</p>
    </span>
  );
};

export default Note;
