import PropertyValuation from "../componant/PropertyValuation/PropertyValuation.jsx";
import HeroServses from "../componant/HeroServses/HeroServses.jsx";
import SmartInvestmentsSection from "../componant/SmartInvestmentsSection/SmartInvestmentsSection.jsx";
const Services = () => {
  const propertyValues = [
    {
      iconLink: "/assets/icons/servicepage/unlock/network.svg",
      title: "Valuation Mastery",
      brief:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      iconLink: "assets/icons/servicepage/unlock/strategic.svg",
      title: "Strategic Marketing",
      brief:
        "Selling a property requires more than just a listing; it demands a strategic marketing.",
    },
    {
      iconLink: "/assets/public/icons/servicepage/unlock/strategic.svg",
      title: "Negotiation Wizardry",
      brief:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      iconLink: "/assets/public/icons/servicepage/unlock/speaker.svg",
      title: "Closing Success",
      brief:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];

  const managementCards = [
    {
      title: "Tenant Harmony",
      brief: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
      iconLink: "/assets/icons/servicepage/effortless/tenant.svg",
    },
    {
      title: "Maintenance Ease",
      brief: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
      iconLink: "/assets/icons/servicepage/effortless/maintenance.svg",
    },
    {
      title: "Financial Peace of Mind",
      brief: "Managing property finances can be complex. Our financial experts take care of rent collection",
      iconLink: "/assets/icons/servicepage/effortless/financial.svg",
    },
    {
      title: "Legal Guardian",
      brief: "Stay compliant with property laws and regulations effortlessly.",
      iconLink: "/assets/icons/servicepage/effortless/sun.svg",
    },
  ];

  return (
    <div>
      <HeroServses />
      <div>
        <PropertyValuation
          mainHeading="Unlock Property Value"
          mainDesc="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          cards={propertyValues}
          ctaTitle="Unlock the Value of Your Property Today"
          ctaDesc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
        />

        <PropertyValuation
          mainHeading="Effortless Property Management"
          mainDesc="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          cards={managementCards}
          ctaTitle="Experience Effortless Property Management"
          ctaDesc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />

        <SmartInvestmentsSection />
      </div>
    </div>
  );
};

export default Services;
