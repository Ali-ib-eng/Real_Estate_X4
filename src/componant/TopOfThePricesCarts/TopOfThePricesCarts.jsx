import BtnsSecondStyle from "../BtnsSecondStyle/BtnsSecondStyle";
import "./topOfThePricesCarts.css";
import SecondaryButton from "../Button/SecondaryButton.jsx";

const TopOfThePricesCarts = ({ title, children }) => {
  return (
    <div className="za-pricesCartsContainer">
      <div className="za-topPricesCart">
        <h4>{title}</h4>
        {/* <BtnsSecondStyle btnTitle="Learn More" /> */}
        <SecondaryButton buttonLabel={"Learn More"} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TopOfThePricesCarts;
