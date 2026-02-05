import Title from '../Title/Title'
import CardHero from '../CardHero/CardHero'
import './HeroServses.css'
function HeroServses() {
    return (
        <div className='HalaHeroServses'>
            <div className="editdistancebyali">
                <Title 
                title='Elevate Your Real Estate Experience'
                subTitle='Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.'
            />
            </div>
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

    )
}

export default HeroServses