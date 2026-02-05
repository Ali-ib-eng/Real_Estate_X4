import './TheTeamCard.css'

const TheTeamCard = ({ image, name, job }) => {
    return (
        <div className='theCard'>
            <div className="imagesContainer">
                <img src={image} className='empImg' alt="employee img" />
                <img className='twitterImg' src='/Real_Estate_X4//assets/icons/aboutpage/team/twitter-icon.png' alt="twitter icon" />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className='sendTextInput'>
                <input placeholder='Say Hello 👋' type="text" />
                <img src="/Real_Estate_X4//assets/icons/aboutpage/team/Send-icon.png" alt="send icon" />
            </div>
        </div>
    )
}

export default TheTeamCard
