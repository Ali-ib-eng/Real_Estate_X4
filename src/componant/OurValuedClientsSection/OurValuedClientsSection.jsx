import { useState,useEffect } from "react";
import "./OurValuedClientsSection.css";
import "../../typography_system.css";
import IconButton from "../IconButton/IconButton.jsx";
import ClientCard from "../ClientCard/ClientCard.jsx";
import ArrowsBtns from '../ArrowsBtns/ArrowsBtns'
import Title from '../Title/Title'
import Sparkles from '../Sparkles/Sparkles'


const OurValuedClientsSection = () => {

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
        if (currentCard < 1) {
            setCurrentCard(currentCard + 1);
        } else {
            setCurrentCard(0)
        }
    }
    const prevCard = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
        } else {
            setCurrentCard(1)
        }
    };
  const clients = [
    {
      key: 1,
      cardDate: "since 2019",
      cardTitle: "ABC Corporation",
      cardDomain: "Commercial Real Estate",
      cardCategory: "Luxury Home Development",
      testimony:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      key: 2,
      cardDate: "since 2018",
      cardTitle: "GreenTech Enterprises",
      cardDomain: "Commercial Real Estate",
      cardCategory: "Retail Space",
      testimony:
        "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ];

  const sectionInfo = {
    title: "Our Valued Clients",
    brief:
      "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving",
  };

    return (
      <section className="mr-our-clients-section za-spacing">
        <Sparkles/>
        <Title
          title="Our Valued Clients"
          subTitle="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        />
        
        <div className="mr-cards-with-slider">
          {!isMobile ? (
            <div className="mr-our-clients-cards-section">
              {clients.map((client) => (
                <ClientCard
                  key={client.key}
                  cardDate={client.cardDate}
                  cardTitle={client.cardTitle}
                  cardDomain={client.cardDomain}
                  cardCategory={client.cardCategory}
                  testimony={client.testimony}
                />
              ))}
            </div>
          ) : (
            <ClientCard
              key={clients[currentCard].key}
              cardDate={clients[currentCard].cardDate}
              cardTitle={clients[currentCard].cardTitle}
              cardDomain={clients[currentCard].cardDomain}
              cardCategory={clients[currentCard].cardCategory}
              testimony={clients[currentCard].testimony}
            />
          )}
          <hr />
          <ArrowsBtns
            onPrev={prevCard}
            onNext={nextCard}
          />
          ))}
        </div>

        {/* the slider navigation buttons */}
        <div className="mr-slider-navigation-buttons">
          <IconButton className="mr-btn" iconLink="../../../public/assets/icons/homepage/featured/arrow-left.svg" />
          <IconButton iconLink="../../../public/assets/icons/homepage/featured/arrow-right.svg" />
        </div>
      </section>
    );
  };
  
  export default OurValuedClientsSection;