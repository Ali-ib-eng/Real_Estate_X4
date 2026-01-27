import Hero from "../componant/Hero/Hero"
import OurAchievements from "../componant/OurAchievements/OurAchievements"
import './AboutUs.css'

import Experience from "../componant/Experience/Experience";
import MeetTheEstateinTeam from "../componant/MeetTheEstateinTeam/MeetTheEstateinTeam"
const AboutUs = () => {
  return (
    <>
    <div>
      <Hero
        title="Our Journey"
        desc=" Our story is one of continuous growth and evolution.We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
        oneImg="/assets/img/About/Sub Container (2).png"
      />
      
      <OurAchievements
        title="Our Achievements"
        desc=" Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. "
      />

    </div>
      
      <Experience/>
      <MeetTheEstateinTeam/>
    </>
  )
}

export default AboutUs
