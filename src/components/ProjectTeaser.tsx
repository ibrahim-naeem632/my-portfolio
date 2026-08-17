import React, { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  tag: string;
};

const projects: Project[] = [
  {
    title: "Helix Beauty Website (Wix to Custom UI)",
    description:
      "Converted an existing Wix website into a fully responsive, custom-built React + Tailwind interface with improved structure, performance, and UI consistency.",
    tag: "Client Project",
  },
  {
    title: "500+ Buttons UI Library",
    description:
      "Developed a large collection of reusable button components using pure HTML and CSS, focused on design variety, scalability, and easy integration.",
    tag: "UI Library",
  },
  {
    title: "SaaS Dashboard System",
    description:
      "Building a modern dashboard with analytics, user flows, and scalable component architecture using React and TypeScript.",
    tag: "Web App",
  },
  {
    title: "High-Converting Landing Page",
    description:
      "A performance-focused landing page designed for clarity, messaging hierarchy, and user conversion. (In progress)",
    tag: "Landing Page",
  },
];

const ProjectsTeaserSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute -top-24 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className={`mb-14 max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">Selected Work</p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2b2b2b] sm:text-4xl">
            Real projects, real results
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A selection of projects that demonstrate my approach to building
            clean, scalable, and user-focused digital products.
          </p>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7] p-6 shadow-sm shadow-black/[0.03] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              } hover:-translate-y-2 hover:border-[#2f5d50]/25 hover:shadow-2xl hover:shadow-[#2f5d50]/15`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2f5d50]/0 to-transparent opacity-0 transition duration-500 group-hover:from-[#2f5d50]/7 group-hover:opacity-100" />

              <span className="relative inline-block w-fit rounded-full bg-[#2f5d50]/10 px-3 py-1 text-xs font-medium text-[#2f5d50] transition group-hover:bg-[#2f5d50] group-hover:text-white">
                {project.tag}
              </span>

              <h3 className="relative mt-4 text-lg font-semibold text-[#2b2b2b]">
                {project.title}
              </h3>

              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[#2b2b2b]/70">
                {project.description}
              </p>

              <div className="relative mt-6 border-t border-black/5 pt-4">
                <span className="text-sm font-medium text-[#2f5d50]">
                  Case study ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTeaserSection;
