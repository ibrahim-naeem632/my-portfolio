import React from "react";
import { FaLaptopCode, FaCode, FaBolt, FaWrench } from "react-icons/fa";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Company Websites",
    description:
      "Modern multi-page websites with clean UI, responsive layouts, and premium animations.",
    icon: <FaLaptopCode size={20} />,
  },
  {
    title: "Web Apps and Dashboards",
    description:
      "React interfaces, dashboards, forms, and reusable components that feel fast and smooth.",
    icon: <FaCode size={20} />,
  },
  {
    title: "Figma to Pixel-Perfect UI",
    description:
      "Convert Figma designs into Tailwind and React code with precise spacing and polish.",
    icon: <FaBolt size={20} />,
  },
  {
    title: "Bug Fixes and Optimization",
    description:
      "Fix layout issues, responsiveness problems, and performance slowdowns across devices.",
    icon: <FaWrench size={20} />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-[1200px] py-24 px-6">
      {/* ambient green glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="mb-16 max-w-2xl">
        <p className="text-sm font-semibold text-[#2f5d50]">
          Services
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
          What I help businesses build
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
          Clean interfaces, smooth motion, and dependable code.
          Everything is built with long-term quality in mind.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, index) => (
          <div
            key={s.title}
            className="
              group relative
              rounded-2xl
              bg-[#f8f7f4]
              border border-black/10
              p-6
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl hover:shadow-[#2f5d50]/20
              magical-card
            "
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* animated border trace */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent magical-border-green" />

            {/* light sweep */}
            <span className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 magical-sweep-green" />

            {/* soft glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#2f5d50]/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-4">
              {/* icon */}
              <div
                className="
                  grid h-12 w-12 place-items-center
                  rounded-xl
                  bg-[#2f5d50]/10
                  text-[#2f5d50]
                  transition-all duration-300
                  group-hover:-translate-y-1 group-hover:scale-110
                "
              >
                {s.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {s.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#2b2b2b]/70">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
