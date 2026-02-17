import React from "react";

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "We believe good interfaces should feel simple and intuitive. Every layout, component, and interaction is designed to reduce friction and guide users naturally."
  },
  {
    title: "Performance matters",
    description:
      "Fast interfaces are not optional. We focus on efficient structure, clean code, and optimized assets to ensure smooth performance across devices."
  },
  {
    title: "Built to scale",
    description:
      "We write readable, reusable code that can grow with your product. This makes future changes easier, safer, and more cost-effective."
  }
];

const AboutPhilosophySection: React.FC = () => {
  return (
    <section className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Intro */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Our Philosophy
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            How we approach design and development
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Every project starts with understanding the problem, the users,
            and the long-term goals. Our approach is focused on building
            interfaces that are clear, fast, and easy to maintain.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border border-black/10
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-[#2f5d50]/10
              "
            >
              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#2b2b2b]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPhilosophySection;
