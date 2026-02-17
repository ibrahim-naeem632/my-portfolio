import React from "react";

const tools = [
  "React",
  "SvelteKit",
  "Tailwind CSS",
  "HTML & CSS",
  "JavaScript",
  "UI Systems",
  "Figma to Code"
];

const AboutToolsSection: React.FC = () => {
  return (
    <section className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Tools & Stack
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            The tools we work with
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            We use modern, reliable tools that help us build fast, maintainable,
            and scalable interfaces without unnecessary complexity.
          </p>
        </div>

        {/* Tools list */}
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="
                rounded-full
                border border-black/10
                bg-white
                px-4 py-2
                text-sm font-medium
                text-[#2b2b2b]
                transition-all duration-200
                hover:border-[#2f5d50]/40
                hover:text-[#2f5d50]
              "
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutToolsSection;
