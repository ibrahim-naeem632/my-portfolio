
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/hero-Home.jpg";
import ProjectsGridSection from "../components/ProjectsGrid";

const Projects = () => {
  return (
    <>
      <HeroSection
  image={heroImage}
  eyebrow="Selected Work"
  height="medium"
  title="Real projects built with performance, clarity, and purpose"
  description={[
    "A curated selection of websites, dashboards, and UI systems",
    "designed to solve real problems and deliver measurable results."
  ]}
  hideRight={true}
/>
        <ProjectsGridSection />


    </>
  );
};

export default Projects;