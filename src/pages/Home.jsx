
import FAQ from "../componant/FAQ/FAQ"
import NavBar from "../componant/NavBar/NavBar"
import NavBar from "../componant/NavBar/NavBar"
import Hero from "../componant/Hero/Hero"
import CardHero from "../componant/CardHero/CardHero"
import './Home.css'
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="hero-cards-section">
      <Hero
        title= "Discover Your Dream Property with Estatein"
        desc= "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
        firstButton= "learn more"
        secButton= "Browse Properties"
        oneImg = "/assets/img/Home-Poperty/Container.png"
      />
      <div className="cards-icon">
      <CardHero
      title="Find Your Dream Home"
      icon="/icons/homepage/hero/shop.svg"
      arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
      />
      <CardHero
      title="Unlock Property Value "
      icon="/icons/homepage/hero/property-value.svg"
      arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
      />
      <CardHero
      title="Effortless Property Management"
      icon="/icons/homepage/hero/buildings.svg"
      arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
      />
      <CardHero
      title="Smart Investments, Informed Decisions"
      icon="/icons/homepage/hero/sun.svg"
      arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
      />
</div>
</div>
</>
)
}

export default Home
