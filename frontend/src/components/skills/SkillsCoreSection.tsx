import React from "react";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive interfaces with clean structure and predictable behavior.",
    skills: [
      "React",
      "SvelteKit",
      "JavaScript (ES6+)",
      "Component Architecture",
      "State Management",
    ],
  },
  {
    title: "UI & Design Systems",
    description:
      "Translating designs into scalable UI systems that remain consistent as products grow.",
    skills: [
      "Tailwind CSS",
      "HTML & CSS",
      "Responsive Layouts",
      "Figma to Code",
      "Reusable UI Components",
    ],
  },
  {
    title: "Workflow & Code Quality",
    description:
      "Writing maintainable code with a focus on clarity, performance, and long-term use.",
    skills: [
      "Clean Code Practices",
      "Performance Optimization",
      "Bug Fixing",
      "Refactoring",
      "Version Control (Git)",
    ],
  },
];

const SkillsCoreSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Core Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            What we specialize in
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            These skills represent the areas we work in daily, focusing on
            building interfaces that are reliable, scalable, and easy to maintain.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-2xl
                border border-black/10
                bg-[#f8f7f4]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-[#2f5d50]/15
              "
            >
              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-[#2b2b2b]/70">
                {group.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[#2b2b2b]/80">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsCoreSection;
