import './clientsCards.css'

const ClientsCards = ({ title, description, img, name, location }) => {
    return (
        <div className='za-card-item'>
            <div className="za-stars-container">
                <img className='za-star-item' src="/assets/icons/homepage/clients/shine-star.svg" alt="star icon" />
                <img className='za-star-item' src="/assets/icons/homepage/clients/shine-star.svg" alt="star icon" />
                <img className='za-star-item' src="/assets/icons/homepage/clients/shine-star.svg" alt="star icon" />
                <img className='za-star-item' src="/assets/icons/homepage/clients/shine-star.svg" alt="star icon" />
                <img className='za-star-item' src="/assets/icons/homepage/clients/shine-star.svg" alt="star icon" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="za-person-info">
                <img src={img} alt="" />
                <div className="za-person-details">
                    <h4>{name}</h4>
                    <span>{location}</span>
                </div>
            </div>

        </div>


    )
}
export default ClientsCards
