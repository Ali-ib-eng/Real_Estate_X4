
import './PropertyHero.css';

const PropertyHero = () => {
    return (
        <section className="hala-hero-section">
            <div className="hala-container">
                <header className="hala-header-flex">
                    <div className="hala-info-side">
                        <h1 className="hala-title">Seaside Serenity Villa</h1>
                        <div className="hala-location">
                            <img src="/assets/icons/propertypage/hero/Icon.svg" alt="" className="hala-location-icon" />
                            <span className="hala-location-text">Malibu, California</span>
                        </div>
                    </div>
                    <div className="hala-price-side">
                        <span className="hala-label">Price</span>
                        <div className="hala-amount">$1,250,000</div>
                    </div>
                </header>
                <div className="hala-media-wrapper">
                    <img
                        src="/assets/img/Home-Poperty/Property,home-villa.jpg"
                        alt="Property Hero View"
                        className="hala-main-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default PropertyHero;