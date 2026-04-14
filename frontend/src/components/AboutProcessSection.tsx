import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Understanding the Problem",
    description:
      "We start by analyzing your business goals, users, and requirements to define a clear direction and avoid unnecessary complexity.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "We structure the product and design intuitive interfaces with a focus on usability, hierarchy, and seamless user flow.",
  },
  {
    step: "03",
    title: "Development & Refinement",
    description:
      "We build scalable, high-performance solutions and refine every detail to ensure consistency, speed, and reliability.",
  },
];

const AboutProcessSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 🔥 smooth animation
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
    <section ref={ref} className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Our Process
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            A clear and structured approach to every project
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            We follow a defined workflow to ensure clarity, efficiency, and
            consistent results throughout the entire development process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`group relative rounded-2xl border border-black/10 bg-[#f8f7f4] p-6 overflow-hidden transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2f5d50]/15`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Step number */}
              <span className="text-sm font-semibold text-[#2f5d50]">
                {item.step}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold text-[#2b2b2b]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#2b2b2b]/70">
                {item.description}
              </p>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2f5d50] transition-all duration-300 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#2b2b2b]/60">
            Structured workflow. Clear communication. Reliable delivery.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutProcessSection;