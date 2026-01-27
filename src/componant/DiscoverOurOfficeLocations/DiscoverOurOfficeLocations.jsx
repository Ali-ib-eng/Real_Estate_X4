import Title from '../Title/Title'
import Sparkles from '../Sparkles/Sparkles'
import './discoverOurOfficeLocations.css'
import DiscoverOurOfficeLocationsCards from '../DiscoverOurOfficeLocationsCards/DiscoverOurOfficeLocationsCards'

const DiscoverOurOfficeLocations = () => {
    let discoverData = [
        {
            head: "Main Headquarters",
            title: "123 Estatein Plaza, City Center, Metropolis",
            description: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
            emailInfo: "info@estatein.com",
            phoneNum: "+1 (123) 456-7890",
            location: "Metropolis",
        },
        {
            head: "Regional Offices",
            title: "456 Urban Avenue, Downtown District, Metropolis",
            description: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            emailInfo: "info@restatein.com",
            phoneNum: "+1 (123) 628-7890",
            location: "Metropolis",
        }
    ]
    return (
        <section className='za-discoverOurOfficeLocations'>
            <Sparkles />
            <Title
                title="Discover Our Office Locations"
                subTitle="
                Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
            />
            <div className="za-filterBtns">
                <button>All</button>
                <button>Regional</button>
                <button>International</button>
            </div>
            <div className="za-discoverOurOfficeLocationsCardsContainer">
                {discoverData.map((card, index) => (
                    <DiscoverOurOfficeLocationsCards
                        key={index}
                        head={card.head}
                        title={card.title}
                        description={card.description}
                        emailInfo={card.emailInfo}
                        phoneNum={card.phoneNum}
                        location={card.location}
                    />
                ))}
            </div>
        </section>
    )
}

export default DiscoverOurOfficeLocations
