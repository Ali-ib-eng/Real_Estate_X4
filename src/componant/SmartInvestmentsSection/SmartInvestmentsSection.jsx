// import needed files
import "./SmartInvestmentsSection.css";
import "../../typography_system.css";
import InvestmentCard from "./../InvestmentCard/InvestmentCard.jsx";
import SectionHeader from "./../SectionHeader/SectionHeader.jsx";
import Modal from "./../Modal/Modal.jsx";

const SmartInvestmentsSection = () => {
  const investments = [
    {
      iconLink:
        "/assets/icons/servicepage/smart/network.svg",
      investmentTitle: "Market Insight",
      investmentBrief:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions  ",
    },
    {
      iconLink: "/assets/icons/servicepage/smart/fire.svg",
      investmentTitle: "ROI Assessment",
      investmentBrief:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      iconLink: "/assets/icons/servicepage/smart/bulb.svg",
      investmentTitle: "Customized Strategies",
      investmentBrief:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      iconLink: "/assets/icons/servicepage/smart/sun.svg",
      investmentTitle: "Diversification Mastery",
      investmentBrief:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ];

  const sectionInfo = {
    title: "Smart Investments, Informed Decisions",
    brief:
      "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
  };
  return (
    <section className="mr-smart-investments-section za-spacing">
      {/* first column: section header + popup */}
      <div className="mr-column">
        <SectionHeader
          sectionTitle={sectionInfo.title}
          sectionBrief={sectionInfo.brief}
        />

        <Modal
          modalTitle="Unlock Your Investment Potential"
          modalBrief="Explore our Property Management Service
                    categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />
      </div>

      {/* second column or cards grid */}
      <div className="mr-cards-grid">
        {investments.map((property) => (
          <InvestmentCard
            cardIcon={property.iconLink}
            cardTitle={property.investmentTitle}
            cardBrief={property.investmentBrief}
          />
        ))}
      </div>
    </section>
  );
};

export default SmartInvestmentsSection;
