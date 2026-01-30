import { useState } from "react";
import "./OurValuedClientsSection.css";
import "../../typography_system.css";
import IconButton from "../IconButton/IconButton.jsx";
import ClientCard from "../ClientCard/ClientCard.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
// import ArrowsBtns from '../ArrowsBtns/ArrowsBtns'



// const OurValuedClientsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const clients = [
//     {
//       key: 1,
//       cardDate: "since 2019",
//       cardTitle: "ABC Corporation",
//       cardDomain: "Commercial Real Estate",
//       cardCategory: "Luxury Home Development",
//       testimony:
//         "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
//     },
//     {
//       key: 2,
//       cardDate: "since 2018",
//       cardTitle: "GreenTech Enterprises",
//       cardDomain: "Commercial Real Estate",
//       cardCategory: "Retail Space",
//       testimony:
//         "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
//     },
//   ];

//   const sectionInfo = {
//     title: "Our Valued Clients",
//     brief:
//       "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving",
//   };

//   const nextCard = () => {
//     if (currentIndex < clients.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevCard = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="mr-our-clients-section">
//       <SectionHeader
//         sectionTitle={sectionInfo.title}
//         sectionBrief={sectionInfo.brief}
//       />
      
//       <div className="mr-cards-with-slider">
//         <div className="mr-our-clients-cards-section">
//           {clients.map((client,index) => (
//              <div
//               key={client.key}
//               className={`
//                 mr-client-card ${currentIndex === index ? "is-selected" : ""}
//             `} 
//             >
//             <ClientCard
//               cardDate={client.cardDate}
//               cardTitle={client.cardTitle}
//               cardDomain={client.cardDomain}
//               cardCategory={client.cardCategory}
//               testimony={client.testimony}
//             />
//             </div>
//           ))}
//         </div>

//         {/* the slider navigation buttons */}
//        <div className="mr-slider-navigation-buttons">
//           <IconButton
//             iconLink="../../../public/assets/icons/homepage/featured/arrow-left.svg"
//             onClick={prevCard}
//           />
//           <IconButton
//             iconLink="../../../public/assets/icons/homepage/featured/arrow-right.svg"
//             onClick={nextCard}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurValuedClientsSection;


const OurValuedClientsSection = () => {
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
    // the total section
    <section className="mr-our-clients-section za-spacing">
      <SectionHeader
        sectionTitle={sectionInfo.title}
        sectionBrief={sectionInfo.brief}
      />
      {/* the cards section with the slider */}
      <div className="mr-cards-with-slider">
        {/* the cards section */}
        <div className="mr-our-clients-cards-section">
          {clients.map((client) => (
            <ClientCard
              cardDate={client.cardDate}
              cardTitle={client.cardTitle}
              cardDomain={client.cardDomain}
              cardCategory={client.cardCategory}
              testimony={client.testimony}
            />
          ))}
        </div>

        {/* the slider navigation buttons */}
        <div className="mr-slider-navigation-buttons">
          <IconButton iconLink="../../../public/assets/icons/homepage/featured/arrow-left.svg" />
          <IconButton iconLink="../../../public/assets/icons/homepage/featured/arrow-right.svg" />
        </div>
        {/* <ArrowsBtns/> */}
      </div>
    </section>
  );
};

export default OurValuedClientsSection;