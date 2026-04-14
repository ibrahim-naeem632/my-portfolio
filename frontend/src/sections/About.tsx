
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
  eyebrow="About CoderCreative Studio"
  height="medium"
  title={
    <>
      We build reliable digital products
      <br />
      with clarity, structure, and purpose
    </>
  }
  description={[
    "CoderCreative Studio focuses on designing and developing modern web applications that are clean, scalable, and built for real-world use.",
    "Our approach combines thoughtful design, solid engineering, and long-term thinking to deliver solutions that grow with your business."
  ]}
  hideRight={true}
/>
      <AboutPhilosophySection />
      <AboutProcessSection />
      <AboutToolsSection />
    </main>

  );
}