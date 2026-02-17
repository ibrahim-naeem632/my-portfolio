import React from "react";

const steps = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "We start by understanding your goals, users, and constraints. This helps us design solutions that actually solve real problems."
  },
  {
    step: "02",
    title: "Design with clarity",
    description:
      "Layouts and interactions are planned with simplicity in mind, focusing on usability, hierarchy, and clear user flow."
  },
  {
    step: "03",
    title: "Build and refine",
    description:
      "We develop clean, scalable code and refine the UI through testing and iteration to ensure performance and consistency."
  }
];

const AboutProcessSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Our Process
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            How we work with clients
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A simple and transparent process designed to keep projects focused,
            efficient, and aligned from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="
                relative
                rounded-2xl
                border border-black/10
                bg-[#f8f7f4]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-[#2f5d50]/10
              "
            >
              {/* Step number */}
              <span className="text-sm font-semibold text-[#2f5d50]">
                {item.step}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-[#2b2b2b]">
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

export default AboutProcessSection;
