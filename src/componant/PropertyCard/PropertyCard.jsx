import React from "react";
import "../../typography_system.css";
import "./PropertyCard.css";
import Topic from "../Topic/Topic.jsx";
import PrimaryButton from "../Button/PrimaryButton.jsx";

const PropertyCard = ({
  cardImage,
  cardTitle,
  cardBrief,
  bedrooms,
  bathrooms,
  price,
}) => {
  const topicsContent = [
    {
      label: { bedrooms },
      icon: "/assets/icons/homepage/featured/bedroom.svg",
    },
    {
      label: { bathrooms },
      icon: "/assets/icons/homepage/featured/bathroom.svg",
    },
    {
      label: "Villa",
      icon: "/assets/icons/homepage/featured/villa.svg",
    },
  ];
  return (
    /* card container */
    <div className="mr-property-card">
      {/* card image */}
      <img src={cardImage} alt={cardTitle} className="mr-property-card-image" />
      <div className="mr-property-card-info">
        {/* card brief */}
        <span className="mr-property-card-brief">
          <h5 className="subheading-2">{cardTitle}</h5>
          <p className="body">{cardBrief}</p>
        </span>

        {/* property topics */}
        <span className="mr-property-card-topics">
          {/* {topicsContent.map((content) => (
            <Topic topicLabel={content.label} topicIcon={content.icon} />
          ))} */}
          <Topic
            topicLabel={bedrooms}
            topicIcon="/assets/icons/homepage/featured/bedroom.svg"
          />
          <Topic
            topicLabel={bathrooms}
            topicIcon="/assets/icons/homepage/featured/bathroom.svg"
          />
          <Topic
            topicLabel="Villa"
            topicIcon="/assets/icons/homepage/featured/villa.svg"
          />
        </span>

        {/* property footer */}
        <span className="mr-property-card-footer">
          {/* property price */}
          <span className="mr-property-card-price">
            <p className="body">Price</p>
            <h5 className="subheading-2">{price}</h5>
          </span>

          {/* card primary button */}
          <PrimaryButton buttonLabel="View Property Details" />
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
