import "../../typography_system.css";
import IconButton from "../IconButton/IconButton.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import "./FeaturedPropertiesSection.css";

const FearturedPropertySection = () => {
  const properties = [
    {
      key: 1,
      imageLink:
        "/assets/img/Home-Poperty/Property,home-villa.jpg",
      propertyName: "Seaside Serenity Villa",
      propertyDescription:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedrooms: "4-bedroom",
      bathrooms: "3-bathroom",
      price: "$550,000",
    },
    {
      key: 2,
      imageLink:
        "/assets/img/Home-Poperty/Property,home-Metropolitan.jpg",
      propertyName: "Metropolitan Haven",
      propertyDescription:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      bedrooms: "2-bedroom",
      bathrooms: "2-bathroom",
      price: "$550,000",
    },
    // {
    //   key: 3,
    //   imageLink:
    //     "/assets/img/Home-Poperty/Property,home-Rustic.jpg",
    //   propertyName: "Rustic Retreat Cottage",
    //   propertyDescription:
    //     "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    //   bedrooms: "3-bedroom",
    //   bathrooms: "3-bathroom",
    //   price: "$550,000",
    // },
  ];

  const sectionInfo = {
    title: "Featured Properties",
    brief:
      "Explore our handpicked selection of featured properties.Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.",
  };

  return (
    // the total section
    <section className="mr-featured-properties-section">
      <SectionHeader
        sectionTitle={sectionInfo.title}
        sectionBrief={sectionInfo.brief}
      />

      {/* the cards section with the slider */}
      <div className="mr-featured-properties-cards-with-slider">
        {/* the cards section */}
        <div className="mr-featured-properties-cards-section">
          {properties.map((property) => (
            <PropertyCard
              cardImage={property.imageLink}
              cardTitle={property.propertyName}
              cardBrief={property.propertyDescription}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              price={property.price}
            />
          ))}
        </div>

        {/* the slider navigation buttons */}
        <div className="mr-slider-navigation-buttons">
          <IconButton iconLink="/assets/icons/homepage/featured/arrow-left.svg" />
          <IconButton iconLink="/assets/icons/homepage/featured/arrow-right.svg" />
        </div>
      </div>
    </section>
  );
};

export default FearturedPropertySection;

//the same section with the slider

// const FearturedPropertySection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const properties = [
//     {
//       key: 1,
//       imageLink: "../../../public/assets/img/Home/Property,home-villa.jpg",
//       propertyName: "Seaside Serenity Villa",
//       propertyDescription:
//         "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
//       bedrooms: "4-bedrooms",
//       bathrooms: "3-bathrooms",
//       price: "$550,000",
//     },
//     {
//       key: 2,
//       imageLink:
//         "../../../public/assets/img/Home/Property,home-Metropolitan.jpg",
//       propertyName: "Metropolitan Haven",
//       propertyDescription:
//         "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
//       bedrooms: "2-bedrooms",
//       bathrooms: "2-bathrooms",
//       price: "$550,000",
//     },
//     {
//       key: 3,
//       imageLink: "../../../public/assets/img/Home/Property,home-Rustic.jpg",
//       propertyName: "Rustic Retreat Cottage",
//       propertyDescription:
//         "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
//       bedrooms: "3-bedrooms",
//       bathrooms: "3-bathrooms",
//       price: "$550,000",
//     },
//   ];

//   const sectionInfo = {
//     title: "Featured Properties",
//     brief:
//       "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.",
//   };

//   const nextCard = () => {
//     if (currentIndex < properties.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevCard = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="mr-featured-properties-section">
//       <SectionHeader
//         sectionTitle={sectionInfo.title}
//         sectionBrief={sectionInfo.brief}
//       />

//       <div className="mr-featured-properties-cards-with-slider">
//         <div className="mr-featured-properties-cards-section">
//           {properties.map((property, index) => (
//             <div
//               key={property.key}
//               className={`mr-property-card
//                 ${currentIndex === index ? "is-selected" : "mr-property-card"}`
//               }
//             >
//               <PropertyCard
//                 cardImage={property.imageLink}
//                 cardTitle={property.propertyName}
//                 cardBrief={property.propertyDescription}
//                 bedrooms={property.bedrooms}
//                 bathrooms={property.bathrooms}
//                 price={property.price}
//               />
//             </div>
//           ))}
//         </div>

//         {/* the slider navigation buttons */}
//         <div className="mr-slider-navigation-buttons">
//           <IconButton
//             iconLink="../../../public/assets/icons/icons/homepage/featured/arrow-left.svg"
//             onClick={prevCard}
//           />
//           <IconButton
//             iconLink="../../../public/assets/icons/icons/homepage/featured/arrow-right.svg"
//             onClick={nextCard}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default FearturedPropertySection;
