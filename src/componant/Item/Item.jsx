import React from "react";
import "./Item.css";
import "../../typography_system.css";

const Item = ({ itemLabel, itemIcon }) => {
  return (
    <span className="mr-item">
      <img className="mr-item-icon" src={itemIcon} />
      <p className="body">{itemLabel}</p>
    </span>
  );
};

export default Item;
