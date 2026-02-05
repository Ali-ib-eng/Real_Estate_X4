import ExploreWorlds from "../componant/ExploreWorld/ExploreWorld.jsx";
import Title from "../componant/Title/Title.jsx";
import CardHero from "../componant/CardHero/CardHero.jsx";
import HeroCard from "../componant/HeroCard/HeroCard.jsx";
import LetConnect from "../componant/LetConnect/LetConnect";
import DiscoverOurOfficeLocations from "../componant/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations";
const ContactUs = () => {
  const accounts = [
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/shop.png",
      title: "info@estatein.com",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/property-value.png",
      title: "+1 (123) 456-7890",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/buildings.png",
      title: "Main Headquarters",
    },
    {
      arrowIconLink: "/icons/homepage/hero/arrow-right-up.svg",
      icon: "/icons/homepage/hero/sun.png",
      title: "Instagram LinkedIn Facebook",
    },
  ];
  return (
    <>
      <div className="HalaHeroServses">
        <div className="editdistancebyali">
          <Title
            title="Get in Touch with Estatein"
            subTitle=" Welcome to Estatein s Contact Us page. Were here to assist you with any inquiries, requests, or feedback you may have. Whether youre looking to buy or sell a property, explore investment opportunities, or simply want to connect, were
                  just a message away. Reach out to us, and lets start a conversation. "
          />
        </div>
        <div className="cards-icon">
          {accounts.map((account) => (
            <HeroCard
              arrowIcon={account.arrowIconLink}
              icon={account.icon}
              title={account.title}
            />
          ))}
        </div>
      </div>

      <LetConnect />
      <DiscoverOurOfficeLocations />
      <ExploreWorlds />
    </>
  );
};
export default ContactUs;
