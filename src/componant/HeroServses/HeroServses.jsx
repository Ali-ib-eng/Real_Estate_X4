import Title from '../Title/Title'
import CardHero from '../CardHero/CardHero'
import React from 'react'
import './HeroServses.css'

function HeroServses() {
    return (
        <div className='HalaHeroServses'>
            <Title
                title='Elevate Your Real Estate Experience'
                subTitle='Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.'
            />

            <div className="cards-icon">
                <CardHero
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
                />
            </div>
        
        </div>

    )
}

export default HeroServses