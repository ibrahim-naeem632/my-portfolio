import HeroSection from "../components/HeroSection";
import homeImg from "../assets/hero-Home.jpg";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import WhyMeSection from "../components/WhyMeSection";
import ProjectsTeaserSection from "../components/ProjectTeaser";
import FinalCTASection from "../components/FinalSection";
export default function Home() {
  return (
    <>

       
<HeroSection
  image={homeImg}
  height="full"
  eyebrow="Frontend & Full-Stack Development"
  title={
    <>
      I build interfaces
      <br />
      people actually enjoy using.
    </>
  }
  description={[
    "Thoughtful UI, clean code, and subtle motion that feels natural.",
    "I focus on clarity, performance, and long-term maintainability."
  ]}
  buttons={[
    { label: "See My Work", to: "/projects", variant: "primary" },
    { label: "Start a Conversation", to: "/contact", variant: "secondary" }
  ]}
/>
    
        <ServicesSection />
        <ProcessSection />
        <WhyMeSection />
        <ProjectsTeaserSection />   
        <FinalCTASection />
      
      
    </>
  );
}