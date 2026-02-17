import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  featured?: boolean;
  link?: string;
};

const projects: Project[] = [
  {
    title: "POS System UI",
    description:
      "A modern point-of-sale interface built with SvelteKit. Designed for fast order placement, barcode scanning, and real-time cart management.",
    image: "/src/assets/projects/pos-ui.png",
    tech: ["SvelteKit", "HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Buttons Library",
    description:
      "A handcrafted buttons library with unique hover animations and interaction styles built using pure HTML and CSS.",
    image: "/src/assets/projects/buttons-library.png",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Figma to UI Conversion",
    description:
      "Pixel-perfect conversion of Figma designs into responsive, production-ready UI using Tailwind and React.",
    image: "/src/assets/projects/figma-conversion-1.png",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Landing Page Conversion UI",
    description:
      "A high-conversion landing page UI focused on layout clarity, messaging hierarchy, and performance.",
    image: "/src/assets/projects/figma-conversion-2.png",
    tech: ["React", "Tailwind"],
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <section className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            Selected work and case studies
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A collection of real-world interfaces and UI systems focused on
            usability, performance, and clean design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`
                group relative overflow-hidden
                rounded-2xl border border-black/10
                bg-white
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-[#2f5d50]/15
                ${project.featured ? "sm:col-span-2" : ""}
              `}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.04]
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                " />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#2b2b2b]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        rounded-full
                        bg-[#2f5d50]/10
                        px-3 py-1
                        text-xs font-medium
                        text-[#2f5d50]
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View indicator (future link) */}
                <div className="
                  mt-6
                  text-sm font-medium
                  text-[#2f5d50]
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-x-1
                ">
                  View project →
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
