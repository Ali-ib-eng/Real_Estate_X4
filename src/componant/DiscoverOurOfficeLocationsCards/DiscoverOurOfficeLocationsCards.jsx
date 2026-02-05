import './discoverOurOfficeLocationsCards.css'

const DiscoverOurOfficeLocationsCards = ({ head, title, description, emailInfo, phoneNum, location }) => {
    return (
        <div className='za-discoverOurOfficeLocationsCard'>
            <h6>{head}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="za-discoverOurOfficeLocationsCardsInfo">
                <div className="za-discoverLocationsCard">
                    <img src="/Real_Estate_X4//assets/icons/contactpage/discover/email.svg" alt="" />
                    <span>{emailInfo}</span>
                </div>
                <div className="za-discoverLocationsCard">
                    <img src="/Real_Estate_X4//assets/icons/contactpage/discover/phone.svg" alt="" />
                    <span>{phoneNum}</span>
                </div>
                <div className="za-discoverLocationsCard">
                    <img src="/Real_Estate_X4//assets/icons/contactpage/discover/location.svg" alt="" />
                    <span>{location}</span>
                </div>
            </div>
            <button className='za-getDirectionBtn'>Get Direction</button>
        </div>
    )
}
/*
*/
export default DiscoverOurOfficeLocationsCards
