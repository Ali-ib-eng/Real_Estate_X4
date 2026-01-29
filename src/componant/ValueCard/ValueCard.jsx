import React from "react";
import "./ValueCard.css";
import "../../typography_system.css";
import CirclIcon from "../CircleIcon/CircleIcon";

const ValueCard = ({ cardIcon, cardTitle, cardBrief }) => {
  return (
    // card title: icon + title
    <div className="mr-value-card">
      <span className="mr-value-card-header">
        {/* icon */}
        <CirclIcon iconLink={cardIcon} />
        {/* title */}
        <h5 className="subheading-2">{cardTitle}</h5>
      </span>
      {/* brief */}
      <p className="body">{cardBrief}</p>
    </div>
  );
};

export default ValueCard;
