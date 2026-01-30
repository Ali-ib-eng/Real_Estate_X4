import  { useState, useEffect } from 'react';
import Sparkles from '../Sparkles/Sparkles'
import ArrowsBtns from '../ArrowsBtns/ArrowsBtns'
import Title from '../Title/Title'
import './FeaturedProperties.css';

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        // 1. البيانات الافتراضية التي سنخزنها أول مرة فقط
        const defaultProperties = [
            {
                id: 1,
                image: '/assets/img/Home-Poperty/Property,home-villa.jpg',
                title: 'Seaside Serenity Villa',
                desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                beds: '4-Bedroom',
                bath: '3-Bathroom',
                type: 'Villa',
                price: '$550,000'
            },
            
            {
                id: 2,
                image: '/assets/img/Home-Poperty/Property,home-Metropolitan.jpg',
                title: 'Metropolitan Haven',
                desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                beds: '2-Bedroom',
                bath: '2-Bathroom',
                type: 'Villa',
                price: '$550,000'
            },
            
            {
                id: 3,
                image: '/assets/img/Home-Poperty/Property,home-Rustic.jpg',
                title: 'Rustic Retreat Cottage',
                desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                beds: '3-Bedroom',
                bath: '2-Bathroom',
                type: 'Villa',
                price: '$550,000'
            }
        ];
        
        // 2. التحقق من وجود بيانات في LocalStorage
        const savedProperties = localStorage.getItem('ls_properties');
        
        if (savedProperties) {
            // إذا وجدت البيانات، نقوم بتحميلها
            setProperties(JSON.parse(savedProperties));
        } else {
            // إذا لم توجد (أول مرة فتح للموقع)، نخزن الافتراضية ونعرضها
            localStorage.setItem('ls_properties', JSON.stringify(defaultProperties));
            setProperties(defaultProperties);
        }
    },
    []);
    const nextCard = () => {
        if (currentCard < 2) {
            setCurrentCard(currentCard + 1);
        } else {
            setCurrentCard(0)
        }
    }
    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
        } else {
            setCurrentCard(2)
        }
    };
    
    return (
    <section className="ls-featured-section">
        <div className="ls-container">
            <Sparkles />
            {/* Div 1: العنوان والوصف */}
            <Title
                    title='Featured Properties'
                    subTitle="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details'for more information."
                />
            
            {/* Div 2: الحاوية التي تحوي الكروت (ديناميكية) */}
            <div className="ls-properties-grid">
                {properties.map((prop) => (
                    <div key={prop.id} className="ls-property-card">
                        {/* Card Div 1: الصورة */}
                        <div className="ls-card-image">
                            <img src={prop.image} alt={prop.title} />
                        </div>
                        
                        {/* Card Div 2: المعلومات (3 divs تحت بعض) */}
                        <div className="ls-card-content">
                            {/* 1- العنوان والوصف */}
                            <div className="ls-content-header">
                                <h3 className="ls-prop-title subheading-2">{prop.title}</h3>
                                <p className="ls-prop-desc body ">
                                    {prop.desc} <span className="read-more">Read More</span>
                                </p>
                            </div>
                            
                            {/* 2- المميزات */}
                            <div className="ls-prop-features">
                                <div className="ls-feature-item">
                                    <img src="/assets/icons/featured/bedroom.svg" alt="" />
                                    <span>{prop.beds}</span>
                                </div>

                                <div className="ls-feature-item">
                                    <img src="/assets/icons/featured/bathroom.svg" alt="" />
                                    <span>{prop.bath}</span>
                                </div>
                
                                <div className="ls-feature-item">
                                    <img src="/assets/icons/featured/villa.svg" alt="" />
                                    <span>{prop.type}</span>
                                </div>
                            </div>
                            
                            {/* 3- السعر والزر */}
                            <div className="ls-prop-footer">
                                <div className="ls-price-box">
                                    <span className="ls-price-label">Price</span>
                                    <span className="ls-price-value">{prop.price}</span>
                                </div>
                                
                                <button className="ls-details-btn button">View Property Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Div 3: أزرار السلايدر */}
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