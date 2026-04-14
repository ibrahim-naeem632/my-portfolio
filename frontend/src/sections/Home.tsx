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
  eyebrow="Digital Product Development"
  title={
    <>
      We build scalable web applications
      <br />
      for modern businesses
    </>
  }
  description={[
    "From idea to deployment, we design and develop high-performance digital solutions.",
    "Focused on clean code, speed, and long-term scalability for growing businesses."
  ]}
  buttons={[
    { label: "Start Your Project", to: "/contact", variant: "primary" },
    { label: "View Our Work", to: "/projects", variant: "secondary" }
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