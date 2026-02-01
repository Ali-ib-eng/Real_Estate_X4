import React from "react";
import "./Badge.css";
import "../../typography_system.css";

const Badge = ({ badgeLabel }) => {
  return (
    <span className="badge">
      <span className="body">{badgeLabel}</span>
    </span>
  );
};

export default Badge;
