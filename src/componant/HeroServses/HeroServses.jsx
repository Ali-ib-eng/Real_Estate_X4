import Title from "../Title/Title";
import HeroCard from "../HeroCard/HeroCard.jsx";
import React from "react";
import "./HeroServses.css";

function HeroServses() {
  const heroCards = [
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/shop.png",
      title: "Find Your Dream Home",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/property-value.png",
      title: "Unlock Property Value",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/buildings.png",
      title: "Effortless Property Management",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/sun.png",
      title: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <div className="HalaHeroServses">
      <Title
        title="Elevate Your Real Estate Experience"
        subTitle="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
      />

      <div className="cards-icon">
        {heroCards.map((heroCard) => (
          <HeroCard
            arrowIcon={heroCard.arrowIconLink}
            icon={heroCard.icon}
            title={heroCard.title}
          />
        ))}
        {/* <CardHero
          title="Find Your Dream Home"
          icon="/icons/homepage/hero/shop.png"
          arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
        />
        <CardHero
          title="Unlock Property Value "
          icon="/icons/homepage/hero/property-value.png"
          arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
        />
        <CardHero
          title="Effortless Property Management"
          icon="/icons/homepage/hero/buildings.png"
          arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
        />
        <CardHero
          title="Smart Investments, Informed Decisions"
          icon="/icons/homepage/hero/sun.png"
          arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
        /> */}
      </div>
    </div>
  );
}

export default HeroServses;
