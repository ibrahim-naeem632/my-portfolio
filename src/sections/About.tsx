
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/hero-Home.jpg";
import AboutPhilosophySection from "../components/AboutPhilosphySection";
import AboutProcessSection from "../components/AboutProcessSection";
import AboutToolsSection from "../components/AboutToolsSection";

export default function About() {
  return (
    <main>
<HeroSection
  image={heroImg}
  eyebrow="About Us"
  height="medium"
  title="Designing and building interfaces that last"
  description={[
    "We focus on creating clean, usable, and scalable interfaces",
    "that solve real problems and support long-term growth."
  ]}
  hideRight={true}
/>
      <AboutPhilosophySection />
      <AboutProcessSection />
      <AboutToolsSection />
    </main>

  );
}