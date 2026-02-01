import { useEffect, useState } from "react";
import ArrowsBtns from "../ArrowsBtns/ArrowsBtns";
import BtnsSecondStyle from "../BtnsSecondStyle/BtnsSecondStyle";
import FaqCards from "../FaqCards/FaqCards";
import Sparkles from "../Sparkles/Sparkles";
import Title from "../Title/Title";
import "./faq.css";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import SecondaryButton from "../Button/SecondaryButton.jsx";

const FAQ = () => {
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

    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  const nextCard = () => {
    if (currentCard < 2) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };
  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(2);
    }
  };

  const cardsData = [
    {
      question: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      question:
        "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      question: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];

  const sectionInfo = {
    title: "Frequently Asked Questions",
    brief:
      "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  };
  return (
    <section className="faqSectionContainer">
      <div className="faqContainer">
        {/* <Sparkles /> */}
        {/* <Title */}
        {/* title="Frequently Asked Questions" */}
        {/* subTitle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way." */}
        {/* /> */}

        <SectionHeader
          sectionTitle={sectionInfo.title}
          sectionBrief={sectionInfo.brief}
        />
        {!isMobile ? (
          <div className="cardsContainer">
            {cardsData.map((card, index) => (
              <FaqCards
                key={index}
                question={card.question}
                description={card.description}
              >
                {/* <BtnsSecondStyle btnTitle="Read More" /> */}
                <SecondaryButton buttonLabel={"Read More"} />
              </FaqCards>
            ))}
          </div>
        ) : (
          <div className="mobileSlider">
            <FaqCards
              question={cardsData[currentCard].question}
              description={cardsData[currentCard].description}
            >
              <BtnsSecondStyle btnTitle="Read More" />
            </FaqCards>
          </div>
        )}
        <hr />
        <ArrowsBtns onPrev={prevCard} onNext={nextCard} />
      </div>
    </section>
  );
};

export default FAQ;
