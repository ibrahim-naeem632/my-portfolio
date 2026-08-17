import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaComments, FaPencilRuler, FaRocket } from "react-icons/fa";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business goals, target audience, and project requirements to define a clear direction.",
    icon: <FaComments size={20} />,
  },
  {
    title: "Planning & Design",
    description:
      "We structure the product, define user flows, and design clean, intuitive interfaces before development begins.",
    icon: <FaPencilRuler size={20} />,
  },
  {
    title: "Development",
    description:
      "Your project is built using modern technologies with a focus on performance, scalability, and clean code.",
    icon: <FaCode size={20} />,
  },
  {
    title: "Launch & Support",
    description:
      "After testing and refinement, we launch your product and remain available for improvements and support.",
    icon: <FaRocket size={20} />,
  },
];

const ProcessSection: React.FC = () => {
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
    <section ref={ref} className="relative overflow-hidden bg-[#f3f1eb] py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className={`mb-14 max-w-2xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">Process</p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2b2b2b] sm:text-4xl">
            A structured approach to delivering quality results
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Our workflow is designed to keep communication clear, reduce
            friction, and deliver each project with consistency and precision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white/85 p-6 shadow-sm shadow-black/[0.03] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              } hover:-translate-y-2 hover:border-[#2f5d50]/25 hover:shadow-xl hover:shadow-[#2f5d50]/15`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="absolute right-5 top-5 text-5xl font-bold text-black/[0.04]">
                0{index + 1}
              </span>

              <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#2f5d50]/10 text-[#2f5d50] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#2f5d50] group-hover:text-white">
                {step.icon}
              </div>

              <h3 className="relative text-lg font-semibold text-[#2b2b2b]">
                {step.title}
              </h3>

              <p className="relative mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                {step.description}
              </p>

              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#2f5d50] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-[#2b2b2b]/60">
          Clear communication. Defined process. Reliable delivery.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
