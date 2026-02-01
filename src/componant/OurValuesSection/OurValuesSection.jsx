// import needed files
import "./OurValuesSection.css";
import "../../typography_system.css";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import ValueCard from "../ValueCard/ValueCard.jsx";

const OurValuesSection = () => {
  const values = [
    {
      cardIcon: "/assets/icons/aboutpage/value/star.svg",
      cardTitle: "Trust",
      cardBrief:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      cardIcon: "/assets/icons/aboutpage/value/star.svg",
      cardTitle: "Trust",
      cardBrief:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      cardIcon: "/assets/icons/aboutpage/value/star.svg",
      cardTitle: "Trust",
      cardBrief:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      cardIcon: "/assets/icons/aboutpage/value/star.svg",
      cardTitle: "Trust",
      cardBrief:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
  ];

  const sectionInfo = {
    title: "Our Values",
    brief:
      "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
  };

  return (
    <section className="mr-our-values-section">
      <SectionHeader
        sectionTitle={sectionInfo.title}
        sectionBrief={sectionInfo.brief}
      />
      <div className="mr-cards-container">
        <div className="mr-cards-row">
          <ValueCard
            cardIcon="/assets/icons/aboutpage/value/star.svg"
            cardTitle="Trust"
            cardBrief="Trust is the cornerstone of every successful real estate transaction."
          />

          <div className="mr-v-divider" />
          <ValueCard
            cardIcon="/assets/icons/aboutpage/value/education.svg"
            cardTitle="Excellence"
            cardBrief="We set the bar high for ourselves. From the properties we list to the services we provide."
          />
        </div>
        <hr className="mr-h-divider" />
        <div className="mr-cards-row">
          <ValueCard
            cardIcon="/assets/icons/aboutpage/value/clients.svg"
            cardTitle="Client-Centric"
            cardBrief="Your dreams and needs are at the center of our universe. We listen, understand."
          />
          <div className="mr-v-divider" />
          <ValueCard
            cardIcon="/assets/icons/aboutpage/value/star.svg"
            cardTitle="Our Commitment"
            cardBrief="We are dedicated to providing you with the highest level of service, professionalism"
          />
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
