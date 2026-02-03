import './PropertyValuation.css';

const PropertyValuation = ({ mainHeading, mainDesc, cards, ctaTitle, ctaDesc }) => {
  return (
  <section className="LS-valuation-container za-spacing">
    <div className="LS-valuation-intro">
      <h2 className="main-heading">{mainHeading}</h2>
      <p className="body ">{mainDesc}</p>
    </div>
    
    <div className="LS-valuation-content-grid">
      <div className="LS-top-cards-row">
        {cards.slice(0, 3).map((card, index) => (
          <div key={index} className="LS-valuation-card">
            <div className="LS-card-header">
              <div className='LS-icon-circle-container'>
                <img src={card.icon} alt={card.title} className="LS-card-icon" />
              </div>
              <h3 className="subheading-2">{card.title}</h3>
            </div>
            <p className="body">{card.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="LS-bottom-content-row">
        {cards[3] && (
        <div className="LS-valuation-card">
          <div className="LS-card-header">
            <div className='LS-icon-circle-container'>
              <img src={cards[3].icon} alt={cards[3].title} className="LS-card-icon" />
            </div>
            <h3 className="subheading-2">{cards[3].title}</h3>
          </div>
          <p className="body">{cards[3].desc}</p>
        </div>
        )}

        <div className="LS-unlock-cta-box">
          <div className="LS-cta-header-row">
            <h3 className="sub-heading">{ctaTitle}</h3>
            <button className="LS-learn-more-btn">Learn More</button>
          </div>
          
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