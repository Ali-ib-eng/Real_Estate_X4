import Hero from "../componant/Hero/Hero";
import OurAchievements from "../componant/OurAchievements/OurAchievements";
import "./AboutUs.css";
import Experience from "../componant/Experience/Experience";
import MeetTheEstateinTeam from "../componant/MeetTheEstateinTeam/MeetTheEstateinTeam";
import OurValuesSection from "../componant/OurValuesSection/OurValuesSection.jsx";
import Sparkles from "../componant/Sparkles/Sparkles.jsx"
import OurValuedClientsSection from "../componant/OurValuedClientsSection/OurValuedClientsSection.jsx";
const AboutUs = () => {
return (
    < >
      <div>
        <Hero
        Sparkles ={<Sparkles/>}
          title="Our Journey"
          desc=" Our story is one of continuous growth and evolution.We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
          oneImg="/Real_Estate_X4//assets/img/About/ourjournyphoto.png"
        />
        <OurValuesSection />
        <OurAchievements
          title="Our Achievements"
          desc=" Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. "
        />
      </div>
      <Experience />
      <MeetTheEstateinTeam />
      <OurValuedClientsSection />
    </>
  );
};
export default AboutUs;
