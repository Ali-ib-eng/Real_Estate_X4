// import needed files
import React from "react";
import "./ClientCard.css";
import "../../typography_system.css";
import SecondaryButton from "../Button/SecondaryButton.jsx";

const ClientCard = ({
  cardDate,
  cardTitle,
  cardDomain,
  cardCategory,
  testimony,
}) => {
  return (
    /* card container */
    <div className="mr-client-card">
      {/* card header */}
      <span className="mr-client-card-header">
        <span className="mr-client-info-i">
          <p className="mr-client-card-minititle">{cardDate}</p>
          <h4 className="subheading-1">{cardTitle}</h4>
        </span>
        <SecondaryButton buttonLabel={"Visit Website"} />
      </span>

      {/* card info */}
      <span className="mr-client-card-info">
        {/* card domain */}
        <span className="mr-client-info-ii">
          <span className="mr-client-info-title">
            <img
              className="mr-client-icon"
              src="../../../public/assets/icons/aboutpage/clients/domain.svg"
            />
            <p className="mr-client-card-minititle">Domain</p>
          </span>
          <h6 className="subheading-3">{cardDomain}</h6>
        </span>

        {/* card category */}
        <span className="mr-client-info-ii">
          <span className="mr-client-info-title">
            <img
              className="mr-client-icon"
              src="../../../public/assets/icons/aboutpage/clients/lightning.svg"
            />
            <p className="mr-client-card-minititle">Categoory</p>
          </span>
          <h6 className="subheading-3">{cardCategory}</h6>
        </span>
      </span>

      {/* card footer */}
      <span className="mr-client-card-footer">
        <p className="mr-client-card-minititle">What They Said 🤗</p>
        <p className="body">{testimony}</p>
      </span>
    </div>
  );
};

export default ClientCard;
