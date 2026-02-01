import React from "react";
import "./AchievementCard.css";
import "../../typography_system.css";

const AchievementCard = ({ cardTitle, cardBrief }) => {
  return (
    <div className="hala-achievement-card">
      {/* title */}
      <h5 className="subheading-2">{cardTitle}</h5>
      {/* brief */}
      <p className="body">{cardBrief}</p>
    </div>
  );
};

export default AchievementCard;
