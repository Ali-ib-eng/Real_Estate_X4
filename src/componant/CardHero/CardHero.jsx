import './CardHero.css'
export const CardHero = ({ title, icon, arrowIcon }) => {
    return (
        <div className="card-hero-container">

            <div className="arrow-wrapper">
                <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            </div>
            <div className="circle1">
            <div className="outer-circle">
                <img src={icon} alt={title} className="card-main-icon" />
            </div></div>

            <h3 className="card-title">{title}</h3>
        </div>
    );
};

export default CardHero;