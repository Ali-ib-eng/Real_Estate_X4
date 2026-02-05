import "./Hero.css";
import SecondaryButton from "../Button/SecondaryButton.jsx";
import PrimaryButton from "../Button/PrimaryButton.jsx";
import StatisticCard from "../StatisticCard/StatisticCard.jsx";

export const Hero = ({
  Sparkles,
  title,
  desc,
  firstButton,
  secButton,
  oneImg,
}) => {
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
  return (
    <div className="hero">
      <div className="hero-element">
        {Sparkles && <div>{Sparkles}</div>}
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="buttons">
          <SecondaryButton buttonLabel={"Learn More"}  to="/properties" />
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
