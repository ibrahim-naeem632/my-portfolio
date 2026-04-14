import React, { useEffect, useRef, useState } from "react";
import {
  FaComments,
  FaPencilRuler,
  FaCode,
  FaRocket
} from "react-icons/fa";

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
    title: "Launch & Ongoing Support",
    description:
      "After testing and refinement, we launch your product and remain available for improvements and support.",
    icon: <FaRocket size={20} />,
  },
];

const ProcessSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Intersection Observer (better than scroll event)
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
    <section
      ref={ref}
      className="relative bg-[#f8f7f4] py-24"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Process
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            A structured approach to delivering quality results
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Our workflow is designed to keep communication clear, reduce friction,
            and ensure every project is delivered with consistency and precision.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative rounded-2xl border border-black/10 bg-white p-6 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2f5d50]/20`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Step number (background) */}
              <span className="absolute right-5 top-5 text-4xl font-bold text-black/5">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#2f5d50]/10 text-[#2f5d50] transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                {step.description}
              </p>

              {/* subtle line animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2f5d50] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#2b2b2b]/60">
            Clear communication. Defined process. Reliable delivery.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;