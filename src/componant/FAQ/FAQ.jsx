import { useEffect, useState } from "react";
import ArrowsBtns from "../ArrowsBtns/ArrowsBtns";
import FaqCards from "../FaqCards/FaqCards";
import Sparkles from "../Sparkles/Sparkles";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import SecondaryButton from "../Button/SecondaryButton.jsx";
import "./faq.css";

const FAQ = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Logic functions
  const nextCard = () => {
    setCurrentCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 992);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (!cardsData || cardsData.length === 0) return null;

  const sectionInfo = {
    title: "Frequently Asked Questions",
    brief: "Find answers to common questions about Estatein's services.",
  };

  return (
    <section className="faqSectionContainer za-spacing">
      <div className="faqContainer">
        {/* <Sparkles /> */}

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
                <SecondaryButton buttonLabel="Read More" />
              </FaqCards>
            ))}
          </div>
        ) : (
          <div className="mobileSlider">
            <FaqCards
              question={cardsData[currentCard]?.question}
              description={cardsData[currentCard]?.description}
            >
              <SecondaryButton buttonLabel="Read More" />
            </FaqCards>
          </div>
        )}

        <hr />
        <ArrowsBtns
          onPrev={prevCard}
          onNext={nextCard}
          // current={currentCard + 1}
          // total={cardsData.length}
        />
      </div>
    </section>
  );
};

export default FAQ;
