import HeroSection from "../components/HeroSection";
import heroimg from "../assets/hero-Home.jpg";
import SkillsCoreSection from "../components/skills/SkillsCoreSection";
import SkillsOutcomeSection from "../components/skills/SkillsEnableSection";


const Skills = () => {
  return (
    <>  <HeroSection
  image={heroimg}
  eyebrow="Skills"
  height="medium"
  title="Skills focused on clarity, performance, and scalability"
  description={[
    "A practical set of skills built around modern front-end development,",
    "clean UI systems, and long-term maintainability."
  ]}
  hideRight
/>
 <SkillsCoreSection />
        <SkillsOutcomeSection />
  
    </>
  );
}

export default Skills;