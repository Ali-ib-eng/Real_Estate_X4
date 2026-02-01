import "./PropertyValuation.css";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import SecondaryButton from "../Button/SecondaryButton.jsx";
import InvestmentCard from "../InvestmentCard/InvestmentCard.jsx";

const PropertyValuation = ({
  mainHeading,
  mainDesc,
  cards,
  ctaTitle,
  ctaDesc,
}) => {
  const sectionInfo = {
    title: "Unlock Property Value",
    brief:
      "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey.",
  };
  return (
    <section className="LS-valuation-container">
      {/*  القسم الأول: العنوان والوصف */}
      {/* <div className="LS-valuation-intro"> */}
      {/* <h2 className="main-heading">{mainHeading}</h2> */}
      {/* <p className="body ">{mainDesc}</p> */}
      {/* </div> */}

      <SectionHeader sectionTitle={mainHeading} sectionBrief={mainDesc} />

      {/* القسم الثاني: يحتوي على الكروت ولوحة الـ Unlock */}
      <div className="LS-valuation-content-grid">
        {/* صف الكروت الثلاثة الأولى */}
        {/* <div className="LS-top-cards-row">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className="LS-valuation-card">
              <div className="LS-card-header">
                <div className="LS-icon-circle-container">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="LS-card-icon"
                  />
                </div>
                <h3 className="subheading-2">{card.title}</h3>
              </div>
              <p className="body">{card.desc}</p>
            </div>
          ))}
        </div> */}
        <div className="LS-top-cards-row">
          {cards.slice(0, 3).map((card) => (
            <InvestmentCard
              cardIcon={card.iconLink}
              cardTitle={card.title}
              cardBrief={card.brief}
            />
          ))}
        </div>

        {/* الصف السفلي: الكرت الرابع + لوحة الـ Unlock */}
        <div className="LS-bottom-content-row">
          {cards[3] && (
            <InvestmentCard
              iconLink={cards[3].iconLink}
              cardTitle={cards[3].title}
              cardBrief={cards[3].brief}
            />
          )}

          {/*  لوحة الـ Unlock */}
          <div className="LS-unlock-cta-box">
            {/* Div للعنوان والزر معاً في سطر واحد */}
            <div className="LS-cta-header-row">
              <h3 className="sub-heading">{ctaTitle}</h3>
              {/* <button className="LS-learn-more-btn">Learn More</button> */}
              <SecondaryButton buttonLabel={"Learn More"} />
            </div>

            {/* Div منفصل للوصف تحتهم */}
            <div className="LS-cta-description-row">
              <p className="body"> {ctaDesc} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyValuation;
