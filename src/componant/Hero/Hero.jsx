import "./Hero.css";
import SecondaryButton from "../Button/SecondaryButton.jsx";
import PrimaryButton from "../Button/PrimaryButton.jsx";
import StatisticCard from "../StatisticCard/StatisticCard.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

export const Hero = ({ title, desc, firstButton, secButton, oneImg }) => {
  const statistics = [
    {
      title: "200+",
      brief: "Happy Customers",
    },
    {
      title: "10k+",
      brief: "Properties For Clients",
    },
    {
      title: "16+",
      brief: "Years of Experience",
    },
  ];

  const sectionInfo = {
    title: "Our Journey",
    brief:
      "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.",
  };
  return (
    <div className="hero">
      <div className="hero-element">
        {/* <h1>{title}</h1>
        <p>{desc}</p> */}
        <span className="mr-hero-heading">
          <h1 className="main-heading">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="body">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </span>
        <div className="buttons">
          <SecondaryButton buttonLabel={"Learn More"} />
          <PrimaryButton buttonLabel={"Browse Properties"} />
          {/* {firstButton && <button className="firstButton">{firstButton}</button>}
          {secButton && <button className="secButton">{secButton}</button>} */}
        </div>
        <div className="cards">
          {statistics.map((statistic) => (
            <StatisticCard
              cardTitle={statistic.title}
              cardBrief={statistic.brief}
            />
          ))}
          {/* <div className="card-item">
            <h2>200+</h2>
            <p>Happy Customers</p>
          </div> */}

          {/* <div className="card-item">
            <h2>10k+</h2>
            <p>Properties For Clients</p>
          </div> */}

          {/* <div className="card-item">
            <h2>16+</h2>
            <p>Years of Experience</p>
          </div> */}
        </div>
      </div>
      <div className="oneImg">
        <img src={oneImg} alt="one-img" />
      </div>
    </div>
  );
};
export default Hero;
