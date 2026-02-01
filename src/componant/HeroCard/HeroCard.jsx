import "./HeroCard.css";
import DoubleCircledIcon from "../DoubleCirceldIcon/DoubleCirceldIcon.jsx";
import "../../typography_system.css";

export const HeroCard = ({ title, icon, arrowIcon }) => {
  return (
    <div className="ha-hero-card">
      {/* arrow icon */}
      {/* <span className="arrow-wrapper"> */}
      <img src={arrowIcon} alt="arrow" className="ha-arrow-icon" />
      {/* </span> */}

      {/* icon */}
      <DoubleCircledIcon iconLink={icon} />

      {/* title */}
      <h3 className="subheading-3">{title}</h3>
    </div>
  );
};

export default HeroCard;
