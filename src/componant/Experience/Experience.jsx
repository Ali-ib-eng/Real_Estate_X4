import React from 'react';
import './Experience.css';

const Experience = () => {
    const topSteps = [
        { id: '01', title: 'Discover a World of Possibilities', desc: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.' },
        { id: '02', title: 'Narrowing Down Your Choices', desc: 'Once you\'ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.' },
        { id: '03', title: 'Personalized Guidance', desc: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.' },
    ];
    const bottomSteps = [
        { id: '04', title: 'See It for Yourself', desc: 'Arrange viewings of the properties you\'re interested in. We\'ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.' },
        { id: '05', title: 'Making Informed Decisions', desc: 'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.' },
        { id: '06', title: 'Getting the Best Deal', desc: 'We\'ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.' },
    ];
    
    return (
    <section className="LS-experience-section container">
        <div className="LS-experience-header">
            <h2 className="LS-main-heading section-title">Navigating the Estatein Experience</h2>
            <p className="LS-body-text body">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
        </div>
        
        <div className="LS-experience-main-container">
            {/* الحاوية الأولى (العلوي) */}
            <div className="LS-experience-row">
                {topSteps.map((step) => (
                    <div key={step.id} className="LS-experience-card">
                        <div className="LS-card-step-label">Step {step.id}</div>
                        <div className="LS-card-content">
                            <h3 className="sub-heading">{step.title}</h3>
                            <p className="body-text small gray">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* الحاوية الثانية (السفلي) */}
            <div className="LS-experience-row LS-bottom-row">
                {bottomSteps.map((step) => (
                    <div key={step.id} className="LS-experience-card">
                        <div className="LS-card-step-label">Step {step.id}</div>
                        <div className="LS-card-content">
                            <h3 className="sub-heading">{step.title}</h3>
                            <p className="body-text small gray">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
export default Experience;