import  { useState, useEffect } from 'react';
import Sparkles from '../Sparkles/Sparkles'
import ArrowsBtns from '../ArrowsBtns/ArrowsBtns'
import Title from '../Title/Title'
import './FeaturedProperties.css';
const FeaturedProperties = ({className}) => {
    const [properties, setProperties] = useState([]);
    const [currentCard, setCurrentCard] = useState(() => {
        const savedIndex = localStorage.getItem('ls_current_index');
        return savedIndex ? parseInt(savedIndex) : 0;
    });

    useEffect(() => {
        const defaultProperties = [
            {
                id: 1,
                image: '/Real_Estate_X4//assets/img/Home-Poperty/Property,home-villa.jpg',
                title: 'Seaside Serenity Villa',
                desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                beds: '4-Bedroom',
                bath: '3-Bathroom',
                type: 'Villa',
                price: '$550,000'
            },
            {
                id: 2,
                image: '/Real_Estate_X4//assets/img/Home-Poperty/Property,home-Metropolitan.jpg',
                title: 'Metropolitan Haven',
                desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                beds: '2-Bedroom',
                bath: '2-Bathroom',
                type: 'Villa',
                price: '$550,000'
            },   
            {
                id: 3,
                image: '/Real_Estate_X4//assets/img/Home-Poperty/Property,home-Rustic.jpg',
                title: 'Rustic Retreat Cottage',
                desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                beds: '3-Bedroom',
                bath: '2-Bathroom',
                type: 'Villa',
                price: '$550,000'
            }
        ];
        
        const savedProperties = localStorage.getItem('ls_properties');
        
        if (savedProperties) {
            setProperties(JSON.parse(savedProperties));
        } else {
            localStorage.setItem('ls_properties', JSON.stringify(defaultProperties));
            setProperties(defaultProperties);
        }
    },
    []);

    useEffect(() => {
        localStorage.setItem('ls_current_index', currentCard);
    }, [currentCard]);
    
    const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % properties.length);
    };

    const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + properties.length) % properties.length);
    };
    
    return (
    <section className={`ls-featured-section za-spacing ${className || ""}`}>
        <div className="ls-container">
            <Sparkles />
            <Title
                    title='Featured Properties'
                    subTitle="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details'for more information."
                />
            
            <div className="ls-properties-grid">
                {properties.map((prop, index) => {
                        const isVisible = index === currentCard ? 'active-card' : 'hidden-card';
                        
                        return (
                            <div key={prop.id} className={`ls-property-card ${isVisible}`}>
                                <div className="ls-card-image">
                                    <img src={prop.image} alt={prop.title} />
                                </div>
                                <div className="ls-card-content">
                                    <div className="ls-content-header">
                                        <h3 className="ls-prop-title subheading-2">{prop.title}</h3>
                                        <p className="ls-prop-desc body">
                                            {prop.desc} <span className="read-more">Read More</span>
                                        </p>
                                    </div>
                                    <div className="ls-prop-features">
                                        <div className="ls-feature-item">
                                            <img src="/Real_Estate_X4//assets/icons/featured/bedroom.svg" alt="" />
                                            <span>{prop.beds}</span>
                                        </div>
                                        
                                        <div className="ls-feature-item">
                                            <img src="/Real_Estate_X4//assets/icons/featured/bathroom.svg" alt="" />
                                            <span>{prop.bath}</span>
                                        </div>
                                        
                                        <div className="ls-feature-item">
                                            <img src="/Real_Estate_X4//assets/icons/featured/villa.svg" alt="" />
                                            <span>{prop.type}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="ls-prop-footer">
                                        <div className="ls-price-box">
                                            <span className="ls-price-label">Price</span>
                                            <span className="ls-price-value">{prop.price}</span>
                                        </div>
                                        <button className="ls-details-btn ">View Property Details</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <hr />
            
            <ArrowsBtns 
            onPrev={prevCard} 
            onNext={nextCard}
            />
        </div>
    </section>
    );
};

export default FeaturedProperties;