
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/hero-Home.jpg";
import ProjectsGridSection from "../components/ProjectsGrid";

const Projects = () => {
  return (
    <>
      <HeroSection
        image={heroImage}
        eyebrow="Projects"
        height="medium"
        title="Selected work and case studies"
        description={[
          "A collection of projects focused on clean UI, performance,",
          "and real-world usability."
        ]}
        hideRight={true}
      />
        <ProjectsGridSection />


    </>
  );
};

export default Projects;