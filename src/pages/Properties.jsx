import PropertyHero from "../componant/PropertyHero/PropertyHero";
import PropertyDetails from "../componant/PropertyDetails/PropertyDetails";
import ComprehensivePricingDetails from "../componant/ComprehensivePricingDetails/ComprehensivePricingDetails";
import FeaturedProperties from "../componant/FeaturedProperties/FeaturedProperties";
const Properties = () => {
  return (
    <>
      <PropertyHero />
      {/* <PropertyDetails /> */}
      <ComprehensivePricingDetails />
      <FeaturedProperties />
    </>
  );
};
export default Properties;
