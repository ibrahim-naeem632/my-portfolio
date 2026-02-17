import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  tag: string;
};

const projects: Project[] = [
  {
    title: "Business Website UI",
    description:
      "A clean, responsive company website built with React and Tailwind.",
    tag: "Website",
  },
  {
    title: "Admin Dashboard",
    description:
      "A modern dashboard interface with reusable components and smooth UX.",
    tag: "Web App",
  },
  {
    title: "Landing Page Conversion UI",
    description:
      "High-clarity layout focused on messaging, flow, and performance.",
    tag: "Landing Page",
  },
];

const ProjectsTeaserSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("projects-teaser");
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="projects-teaser"
      className="relative bg-white py-24"
    >
      {/* soft top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/5 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* header */}
        <div
          className={`
            mb-16 max-w-2xl
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Selected Work
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            A few projects I’ve worked on
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A quick look at the type of work I do.  
            Each project focuses on clarity, performance, and real-world usability.
          </p>
        </div>

        {/* project cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                group relative
                rounded-2xl
                border border-black/10
                bg-[#f8f7f4]
                p-6
                transition-all duration-700
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-[#2f5d50]/15
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* tag */}
              <span className="inline-block rounded-full bg-[#2f5d50]/10 px-3 py-1 text-xs font-medium text-[#2f5d50]">
                {project.tag}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-[#2b2b2b]">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                {project.description}
              </p>

              {/* hover-only view link */}
              <Link
                to="/projects"
                className="
                  absolute bottom-4 right-4 z-10
                  text-sm font-medium text-[#2f5d50]
                  opacity-0 translate-x-0
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-x-1
                "
              >
                View →
              </Link>
            </div>
          ))}
        </div>

        {/* view all button */}
        <div
          className={`
            relative z-10 mt-16 flex justify-center
            transition-all duration-700 delay-[400ms]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <Link
            to="/projects"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#2f5d50]
              px-8 py-3
              text-sm font-semibold text-white
              shadow-lg shadow-[#2f5d50]/40
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[#2f5d50]/60
            "
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTeaserSection;
