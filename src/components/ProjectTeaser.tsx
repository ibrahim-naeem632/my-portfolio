import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">

      {/* 🔥 Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#2f5d50]/10 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-[1200px] px-6">

        {/* HEADER */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Selected Work
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            Real projects, real results
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A selection of projects that demonstrate my approach to building
            clean, scalable, and user-focused digital products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#f8f7f4]/80 backdrop-blur-md p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              } hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2f5d50]/20`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#2f5d50]/5 to-transparent"></div>

              {/* TAG */}
              <span className="inline-block w-fit rounded-full bg-[#2f5d50]/10 px-3 py-1 text-xs font-medium text-[#2f5d50] transition group-hover:bg-[#2f5d50] group-hover:text-white">
                {project.tag}
              </span>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-[#2b2b2b]">
                {project.title}
              </h3>

              {/* DESCRIPTION (IMPORTANT FOR EQUAL HEIGHT) */}
              <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70 flex-1">
                {project.description}
              </p>

              {/* CTA FIXED */}
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                <Link
                  to="/projects"
                  className="text-sm font-medium text-[#2f5d50] relative"
                >
                  View details →
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2f5d50] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full bg-[#2f5d50] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f5d50]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#24463c] hover:shadow-[#2f5d50]/60"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsTeaserSection;