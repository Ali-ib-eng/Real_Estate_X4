
import ExploreWorlds from '../componant/ExploreWorld/ExploreWorld.jsx';
import Title from '../componant/Title/Title.jsx';
import CardHero from '../componant/CardHero/CardHero.jsx';
import LetConnect  from '../componant/LetConnect/LetConnect'
import DiscoverOurOfficeLocations from "../componant/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
const ContactUs = () => {
  return (
    <>
          <div className='HalaHeroServses'>
            <Title
              title='Get in Touch with Estatein'
              subTitle=' Welcome to Estatein s Contact Us page. Were here to assist you with any inquiries, requests, or feedback you may have. Whether youre looking to buy or sell a property, explore investment opportunities, or simply want to connect, were
                  just a message away. Reach out to us, and lets start a conversation. '
            />
            <div className="cards-icon">
              <CardHero
                title="info@estatein.com"
                icon="/icons/contactpage/hero/email-filled.svg"
                arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
              />
              <CardHero
                title="+1 (123) 456-7890"
                icon="/icons/contactpage/hero/phone-filled.svg"
                arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
              />
              <CardHero
                title="Main Headquarters"
                icon="/icons/contactpage/hero/location-filled.svg"
                arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
              />
              <CardHero
                title="Instagram  LinkedIn  Facebook"
                icon="/icons/contactpage/hero/fire.svg"
                arrowIcon="/icons/homepage/hero/arrow-right-up.svg"
              />
            </div></div>
      
<LetConnect />
<DiscoverOurOfficeLocations/>
<ExploreWorlds />
 </>
  )
}
export default ContactUs
