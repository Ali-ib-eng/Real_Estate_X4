import { useEffect, useState } from 'react'
import ClientsCards from '../ClientsCards/ClientsCards'
import Sparkles from '../Sparkles/Sparkles'
import Title from '../Title/Title'
import './ourClientsSay.css'
import ArrowsBtns from '../ArrowsBtns/ArrowsBtns'

const OurClientsSay = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            if (window.innerWidth <= 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }

    }, []);
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
    let clientsCardData = [
        {
            title: "Exceptional Service!",
            description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
            img: "/assets/img/Home-Poperty/HOME-S2-wade.png",
            name: "Wade Warren",
            location: "USA, California"
        },
        {
            title: "Efficient and Reliable",
            description: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
            img: "/assets/img/Home-Poperty/HOME-S2-emilly.png",
            name: "Emelie Thomson",
            location: "USA, Florida"
        },
        {
            title: "Trusted Advisors",
            description: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
            img: "/assets/img/Home-Poperty/HOME-S2 -john.png",
            name: "John Mans",
            location: "USA, Nevada"
        }
    ]
    return (
        <section className='za-ourClientsSectionContainer za-spacing'>
            <div className="za-ourClientsContainer">
                <Sparkles />
                <Title 
                    title="What Our Clients Say"
                    subTitle='Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
                />
                {!isMobile ?
                    <div className="za-cardsContainer">
                        {clientsCardData.map((card, index) => (
                            <ClientsCards
                                key={index}
                                title={card.title}
                                description={card.description}
                                img={card.img}
                                name={card.name}
                                location={card.location}
                            />
                        ))}
                    </div>
                    :
                    <div className="za-mobileSlider">
                        <ClientsCards
                            title={clientsCardData[currentCard].title}
                            description={clientsCardData[currentCard].description}
                            img={clientsCardData[currentCard].img}
                            name={clientsCardData[currentCard].name}
                            location={clientsCardData[currentCard].location}
                        />
                    </div>
                }
                <hr />
                <ArrowsBtns
                    onPrev={prevCard}
                    onNext={nextCard}
                />
            </div>
        </section>
    )
   }
    export default OurClientsSay
