import React, { useEffect, useState } from "react";
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
    title: "Discovery",
    description:
      "We start by understanding your goals, users, and expectations. Clear direction from day one.",
    icon: <FaComments size={20} />,
  },
  {
    title: "Design & Structure",
    description:
      "Layouts, flow, and structure are planned carefully before writing code.",
    icon: <FaPencilRuler size={20} />,
  },
  {
    title: "Build & Refine",
    description:
      "Clean React + Tailwind code, responsive layouts, and smooth interactions.",
    icon: <FaCode size={20} />,
  },
  {
    title: "Launch & Support",
    description:
      "Final testing, fixes, and a smooth handoff. I stay available for support.",
    icon: <FaRocket size={20} />,
  },
];

const ProcessSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("process-section");
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.75) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="process-section"
      className="relative bg-[#f8f7f4] py-24"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">
            Process
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            How I work with clients
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            A simple, transparent process designed to keep things clear,
            efficient, and stress-free.
          </p>
        </div>

        {/* steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`
                group relative rounded-2xl
                border border-black/10
                bg-white
                p-6
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-[#2f5d50]/20
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* icon */}
              <div
                className="
                  mb-4 grid h-12 w-12 place-items-center
                  rounded-xl
                  bg-[#2f5d50]/10
                  text-[#2f5d50]
                  transition-all duration-300
                  group-hover:scale-110
                "
              >
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                {step.description}
              </p>

              {/* step number */}
              <span className="absolute right-5 top-5 text-3xl font-bold text-black/5">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
