import FeaturedProperties from "../componant/FeaturedProperties/FeaturedProperties"
import Testimonials from "../componant/Testimonials/Testimonials.jsx";
import FAQ from "../componant/FAQ/FAQ"
import Hero from "../componant/Hero/Hero"
import CardHero from "../componant/CardHero/CardHero"
import './Home.css'
import OurClientsSay from "../componant/OurClientsSay/OurClientsSay.jsx";
const Home = () => {
  return (
    <>
      <div className="hero-cards-section">
        <Hero
          title="Discover Your Dream Property with Estatein"
          desc="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
          firstButton="learn more"
          secButton="Browse Properties"
          oneImg="/Real_Estate_X4//assets/img/Home-Poperty/Container.png"
        />
        <div className="cards-icon">
          <CardHero
            title="Find Your Dream Home"
            icon="/Real_Estate_X4//icons/homepage/hero/shop.png"
            arrowIcon="/Real_Estate_X4//icons/homepage/hero/arrow-right-up.svg"
          />
          <CardHero
            title="Unlock Property Value "
            icon="/Real_Estate_X4//icons/homepage/hero/property-value.png"
            arrowIcon="/Real_Estate_X4//icons/homepage/hero/arrow-right-up.svg"
          />
          <CardHero
            title="Effortless Property Management"
            icon="/Real_Estate_X4//icons/homepage/hero/buildings.png"
            arrowIcon="/Real_Estate_X4//icons/homepage/hero/arrow-right-up.svg"
          />
          <CardHero
            title="Smart Investments, Informed Decisions"
            icon="/Real_Estate_X4//icons/homepage/hero/sun.png"
            arrowIcon="/Real_Estate_X4//icons/homepage/hero/arrow-right-up.svg"
          />
        </div>
      </div>

      {/* Mahmoud Riya: i stopped the FeaturedPropertiesSection cause Lama will redesign it due to responsivity issues */}
      {/* <FeaturedPropertiesSection /> */}

      <FeaturedProperties/>
      <OurClientsSay/>
      <FAQ/>
    </>
  )
}


export default Home
