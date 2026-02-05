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
  return (
    <section className="LS-valuation-container za-spacing">
      <SectionHeader sectionTitle={mainHeading} sectionBrief={mainDesc} />

      <div className="LS-valuation-content-grid">
        
        <div className="LS-top-cards-row">
          {cards.slice(0, 3).map((card, index) => (
            <InvestmentCard
              key={index}
              cardIcon={card.iconLink}
              cardTitle={card.title}
              cardBrief={card.brief || card.desc} 
            />
          ))}
        </div>

        <div className="LS-bottom-content-row">
          {cards[3] && (
            <InvestmentCard
              cardIcon={cards[3].iconLink}
              cardTitle={cards[3].title}
              cardBrief={cards[3].brief || cards[3].desc}
            />
          )}

          <div className="LS-unlock-cta-box">
            <div className="LS-cta-header-row">
              <h3 className="sub-heading">{ctaTitle}</h3>
              <SecondaryButton buttonLabel={"Learn More"} />
            </div>

            <div className="LS-cta-description-row">
              <p className="body">{ctaDesc}</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PropertyValuation;