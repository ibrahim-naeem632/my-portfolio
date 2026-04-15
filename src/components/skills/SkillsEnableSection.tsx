import React from "react";

const outcomes = [
  {
    title: "Clear and usable interfaces",
    description:
      "Interfaces are designed to be easy to understand, intuitive to use, and visually calm for users.",
  },
  {
    title: "Faster development cycles",
    description:
      "Reusable components and structured code reduce development time and make updates easier.",
  },
  {
    title: "Scalable front-end systems",
    description:
      "Projects are built with growth in mind, allowing new features to be added without breaking existing UI.",
  },
  {
    title: "Reliable performance",
    description:
      "Optimized layouts and clean code help ensure smooth interactions across devices and screen sizes.",
  },
];

const SkillsOutcomeSection: React.FC = () => {
  return (
    <section className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Outcomes
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            What these skills enable
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Our skills are applied with a clear goal: building interfaces that
            work well today and remain dependable as products grow.
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {outcomes.map((item) => (
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

              <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsOutcomeSection;
