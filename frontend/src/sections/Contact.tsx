import HeroSection from "../components/HeroSection";
import heroimg from "../assets/hero-Home.jpg";
import ContactFormSection from "../components/Contact/ContactFormSection";

const Contact = () => {
  return (
    <>  <HeroSection
  image={heroimg}
  eyebrow="Get in Touch"
  height="medium"
  title="Have a project in mind? Let’s build something great together"
  description={[
    "Whether you're starting from scratch or improving an existing product,",
    "I’ll help you turn your ideas into a clean, scalable, and high-performing solution."
  ]}
  hideRight
/>
    <ContactFormSection />
    </>
  );
}

export default Contact;
