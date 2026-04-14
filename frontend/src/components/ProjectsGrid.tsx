import React, { useState } from "react";

type Project = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tech: string[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Helix Beauty Website",
    shortDesc:
      "Migrated a Wix website into a high-performance custom-built interface.",
    fullDesc:
      "This project involved converting an existing Wix-based website into a fully custom-built solution using HTML, CSS, and JavaScript. The original site had performance limitations, heavy assets, and restricted flexibility due to Wix's builder constraints.\n\nI rebuilt the entire interface from scratch, carefully replicating and refining animations to ensure a smoother and more consistent user experience. Layout structure, spacing, and typography were improved to create a cleaner and more modern UI.\n\nA fully dynamic cart system was implemented, allowing better control over product interactions and scalability. Additionally, all images and assets were optimized, significantly reducing load time and improving overall performance.\n\nAs a result, the website became faster, more maintainable, and easier to scale. The user experience improved noticeably, with smoother navigation and better interaction flow across devices.",
    image: "./src/assets/helix.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    featured: true,
  },
  {
    title: "SaaS Dashboard Application",
    shortDesc:
      "A scalable full-stack dashboard for managing analytics, users, and operations.",
    fullDesc:
      "This project is a full-stack SaaS dashboard designed to handle real-world business operations such as analytics tracking, user management, and product control.\n\nThe frontend is built using React and TypeScript with a strong focus on reusable components, structured architecture, and responsive layouts. Complex data is presented in a clear and user-friendly way to ensure usability.\n\nOn the backend, Node.js and Express are used to create scalable APIs, with MongoDB handling dynamic data storage. Authentication systems, protected routes, and proper data flow were implemented to ensure security and maintainability.\n\nPerformance optimization techniques such as efficient state management, component reuse, and optimized rendering were applied to ensure smooth interactions. The system is designed to scale easily as features grow.\n\nOverall, this project demonstrates the ability to build production-ready, scalable full-stack applications with clean architecture and strong performance.",
    image: "./src/assets/dashboard.png",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Buttons UI Library",
    shortDesc:
      "A collection of 500+ reusable button components built with pure CSS.",
    fullDesc:
"This project is a comprehensive UI library consisting of over 500 button variations built entirely using HTML and CSS.\n\nEach button includes unique hover effects, transitions, and interaction styles, designed to be reusable across different types of web projects. The focus was on creating lightweight, dependency-free components that developers can integrate easily.\n\nSpecial attention was given to animation smoothness, consistency, and modern UI patterns. The library avoids unnecessary JavaScript, keeping performance fast and bundle size minimal.\n\nThis project highlights strong CSS skills, design consistency, and the ability to create scalable UI systems that can be reused in multiple applications.",    image: "./src/assets/buttons.png",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Argiios Agriculture Website",
    shortDesc:
      "A professional business website built for an agriculture-based company.",
    fullDesc:
"Developed a modern business website for an agriculture-focused company using React, TypeScript, and SCSS.\n\nThe project focused on presenting company information in a structured, professional, and easy-to-understand way. Layouts were designed to guide users clearly through services and offerings.\n\nSCSS was used to maintain clean and scalable styling, while React ensured a modular and maintainable component structure. Performance and responsiveness were carefully optimized to provide a smooth experience across devices.\n\nThe final result is a fast, clean, and professional website that improves brand presentation and user trust, making it suitable for real business use.",
    image: "./src/assets/argios.png",
    tech: ["React", "SCSS", "TypeScript"],
    link: "https://argiios.netlify.app/",
  },
  {
    title: "D Diamond Landing Page",
    shortDesc:
      "A clean and conversion-focused static landing page.",
    fullDesc:
"This project involved building a static landing page using HTML and CSS with a strong focus on clarity and conversion.\n\nThe layout was carefully structured to guide users through content in a logical flow, highlighting key messages and call-to-action sections. Typography, spacing, and visual hierarchy were refined to improve readability and engagement.\n\nThe page is lightweight and optimized for fast loading, ensuring a smooth user experience even on slower connections.\n\nOverall, the landing page is designed to communicate value clearly and encourage user action, making it effective for marketing and lead generation purposes.",
    image: "/src/assets/projects/diamond.png",
    tech: ["HTML", "CSS"],
  },
];

const ProjectsGrid: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            Real work with real impact
          </h2>

          <p className="mt-4 text-sm text-[#2b2b2b]/70">
            Each project focuses on performance, usability, and scalable solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`
                group relative overflow-hidden rounded-2xl border border-black/10 bg-white
                transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl
                ${project.featured ? "sm:col-span-2 border-2 border-[#2f5d50]/30" : ""}
              `}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay CTA */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2f5d50] hover:text-white transition"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#2b2b2b]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[#2b2b2b]/70">
                  {project.shortDesc}
                </p>

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[#2f5d50]/10 text-[#2f5d50] text-xs px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.results?.map((r) => (
                    <span
                      key={r}
                      className="text-xs bg-black/5 px-2 py-1 rounded"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {/* Bottom actions */}
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-medium text-[#2f5d50]"
                  >
                    View More →
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm text-black/60 hover:text-black"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* MODAL */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">

              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-black/50"
              >
                ✕
              </button>

              <img
                src={activeProject.image}
                className="w-full rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold">
                {activeProject.title}
              </h3>

              <p className="mt-4 text-sm text-black/70 leading-relaxed whitespace-pre-line">
                {activeProject.fullDesc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#2f5d50]/10 text-[#2f5d50] text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  className="mt-6 inline-block text-[#2f5d50] font-medium"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsGrid;