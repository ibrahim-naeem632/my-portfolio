import HeroSection from "../components/HeroSection";
import heroimg from "../assets/hero-Home.jpg";
import ContactFormSection from "../components/Contact/ContactFormSection";

const Contact = () => {
  return (
    <>  <HeroSection
  image={heroimg}
  eyebrow="Contact"
  height="medium"
  title="Let’s talk about your project"
  description={[
    "If you have an idea, a design, or an existing product,",
    "we’d be happy to discuss how we can help."
  ]}
  hideRight
/>
    <ContactFormSection />
    </>
  );
}

export default Contact;
