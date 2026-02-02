import './ExploreWorld.css';
import Sparkles from '../Sparkles/Sparkles'
import img1 from '/assets/img/Contact/CON-office-03.jpg';
import img2 from '/assets/img/Contact/CONTACT-together.jpg';
import teamLg from '/assets/img/Contact/CONTACT-laptop-team.jpg';
import teamSm1 from '/assets/img/Contact/CONTACT-office-01.jpg';
import teamSm2 from '/assets/img/Contact/CONTACT-office-02.jpg';
import handshake from '/assets/img/Contact/CONTACT-laptop.jpg';

const ExploreWorld = () => {
    return (
        <section className='za-spacing za-section-container'>
            <div className="hala-section">
                <div className="hala-container">
                    <div className="hala-upper-grid">
                        <div className="hala-left-column">
                            <div className="hala-img-box">
                                <img src={handshake} alt="Office" />
                            </div>
                            <div className="hala-img-box">
                                <img src={teamLg} alt="Meeting" />
                            </div>
                        </div>
                        <div className="hala-right-column">
                            <div className="hala-img-box hala-main-team">
                                <img src={teamSm1} alt="Team" />
                            </div>
                            <div className="hala-bottom-row">
                                <div className="hala-img-box">
                                    <img src={teamSm2} alt="Team" />
                                </div>
                                <div className="hala-img-box">
                                    <img src={img1} alt="Team" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hala-lower-block">
                        <div className="hala-text-content">
                            <Sparkles/>
                            <h2 className="hala-main-title">Explore Estatein's World</h2>
                            <p className="hala-description">
                                Step inside the world of Estatein, where professionalism meets warmth,
                                and expertise meets passion. Our gallery offers a glimpse into our
                                team and workspaces, inviting you to get to know us better.
                            </p>
                        </div>
                        <div className="hala-img-box hala-handshake-wrapper">
                            <img src={img2} alt="Handshake" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreWorld;