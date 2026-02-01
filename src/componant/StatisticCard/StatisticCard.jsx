import React from "react";
import "./StatisticCard.css";
import "../../typography_system.css";

const StatisticCard = ({ cardTitle, cardBrief }) => {
  return (
    <div className="mr-statistic-card">
      {/* title */}
      <h5 className="subheading-1">{cardTitle}</h5>

      {/* brief */}
      <p className="body">{cardBrief}</p>
    </div>
  );
};

export default StatisticCard;
