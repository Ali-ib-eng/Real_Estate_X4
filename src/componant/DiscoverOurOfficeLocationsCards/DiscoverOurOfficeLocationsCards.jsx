import "./discoverOurOfficeLocationsCards.css";
import PrimaryButton from "../Button/PrimaryButton.jsx";
import Topic from "../Topic/Topic.jsx";

const DiscoverOurOfficeLocationsCards = ({
  head,
  title,
  description,
  emailInfo,
  phoneNum,
  location,
}) => {
  return (
    <div className="za-discoverOurOfficeLocationsCard">
      <h6>{head}</h6>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="za-discoverOurOfficeLocationsCardsInfo">
        
        <Topic
          topicIcon="./assets/icons/contactpage/discover/email.svg"
          topicLabel={emailInfo}
        />

        <Topic
          topicIcon="./assets/icons/contactpage/discover/phone.svg"
          topicLabel={phoneNum}
        />

        <Topic
          topicIcon="./assets/icons/contactpage/discover/location.svg"
          topicLabel={location}
        />


        {/* <div className="za-discoverLocationsCard">
          <img src="./assets/icons/contactpage/discover/email.svg" alt="" />
          <span>{emailInfo}</span>
        </div>

        <div className="za-discoverLocationsCard">
          <img src="./assets/icons/contactpage/discover/phone.svg" alt="" />
          <span>{phoneNum}</span>
        </div>

        <div className="za-discoverLocationsCard">
          <img src="./assets/icons/contactpage/discover/location.svg" alt="" />
          <span>{location}</span>
        </div> */}
      </div>
      <PrimaryButton buttonLabel="Get Direction" />
      {/* <button className="za-getDirectionBtn">Get Direction</button> */}
    </div>
  );
};
/*
 */
export default DiscoverOurOfficeLocationsCards;
