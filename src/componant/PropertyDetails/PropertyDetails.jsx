import './PropertyDetails.css';
import Item from "../Item/Item.jsx";

const PropertyDetails = () => {
  const features = [
    {
      iconLink: "/assets/icons/propertypage/hero/lighting-filled.svg",
      brief: "Expansive oceanfront terrace for outdoor entertaining",
    },
    {
      iconLink: "/assets/icons/propertypage/hero/lighting-filled.svg",
      brief: "Gourmet kitchen with top-of-the-line appliances",
    },
    {
      iconLink: "/assets/icons/propertypage/hero/lighting-filled.svg",
      brief: "Private beach access for morning strolls and sunset views",
    },
    {
      iconLink: "/assets/icons/propertypage/hero/lighting-filled.svg",
      brief:
        "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    },
    {
      iconLink: "/assets/icons/propertypage/hero/lighting-filled.svg",
      brief: "Private garage and ample storage space",
    },
  ];
  return (
    <div className="halaMainContainer">
      <div className="halaDescriptionSection">
        <h2 className="halaTitle">Description</h2>
        <p className="halaDescriptionText">
          Discover your own piece of paradise with the Seaside Serenity Villa.
          With an open floor plan, breathtaking ocean views from every room, and
          direct access to pristine sandy beaches.
        </p>
        <div className="halaSpecsGrid">
          <div className="halaSpecBox">
            <div className="halaSmollBox">
              <img
                src="/assets/icons/propertypage/hero/bedroom.svg"
                alt=""
                className="hala-location-icon"
              />
              <span className="halaSpecLabel">Bedrooms</span>
            </div>
            <h3 className="halaSpecValue">04</h3>
          </div>
          <div className="halaSpecBox">
            <div className="halaSmollBox">
              <img
                src="/assets/icons/propertypage/hero/bathroom.svg"
                alt=""
                className="hala-location-icon"
              />
              <span className="halaSpecLabel">Bathrooms</span>
            </div>
            <h3 className="halaSpecValue">03</h3>
          </div>
          <div className="halaSpecBox">
            <div className="halaSmollBox">
              <img
                src="/assets/icons/propertypage/hero/area.svg"
                alt=""
                className="hala-location-icon"
              />
              <span className="halaSpecLabel">Area</span>
            </div>
            <h3 className="halaSpecValue">2,500 Square Feet</h3>
          </div>
        </div>
      </div>
      <div className="halaFeaturesSection">
        <div className="hala-containerr">
          <h2 className="hala-titlee">Key Features and Amenities</h2>
          <div className="ha-features-section">
            {features.map((feature) => (
              <Item itemIcon={feature.iconLink} itemLabel={feature.brief} />
            ))}
          </div>

          {/* <div className="hala-item">
            <div className="hala-icon-box">
              <img
                src="/assets/icons/propertypage/hero/lighting-filled.svg"
                alt="icon"
                className="hala-img"
              />
            </div>
            <p className="hala-text">
              Expansive oceanfront terrace for outdoor entertaining
            </p>
          </div>
          <div className="hala-item">
            <div className="hala-icon-box">
              <img
                src="/assets/icons/propertypage/hero/lighting-filled.svg"
                alt="icon"
                className="hala-img"
              />
            </div>
            <p className="hala-text">
              Expansive oceanfront terrace for outdoor entertaining
            </p>
          </div>
          <div className="hala-item">
            <div className="hala-icon-box">
              <img
                src="/assets/icons/propertypage/hero/lighting-filled.svg"
                alt="icon"
                className="hala-img"
              />
            </div>
            <p className="hala-text">
              Expansive oceanfront terrace for outdoor entertaining
            </p>
          </div>
          <div className="hala-item">
            <div className="hala-icon-box">
              <img
                src="/assets/icons/propertypage/hero/lighting-filled.svg"
                alt="icon"
                className="hala-img"
              />
            </div>
            <p className="hala-text">
              Expansive oceanfront terrace for outdoor entertaining
            </p>
          </div>
          <div className="hala-item">
            <div className="hala-icon-box">
              <img
                src="/assets/icons/propertypage/hero/lighting-filled.svg"
                alt="icon"
                className="hala-img"
              />
            </div>
            <p className="hala-text">
              Gourmet kitchen with top-of-the-line appliances
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default PropertyDetails;
