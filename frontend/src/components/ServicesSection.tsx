import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaCode, FaBolt, FaWrench } from "react-icons/fa";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "High-quality, responsive websites designed to represent your brand and convert visitors into clients.",
    icon: <FaLaptopCode size={20} />,
  },
  {
    title: "Web Applications",
    description:
      "Scalable dashboards and web apps built with modern technologies for performance and usability.",
    icon: <FaCode size={20} />,
  },
  {
    title: "UI Development",
    description:
      "Pixel-perfect interfaces from design to code with attention to detail and smooth user experience.",
    icon: <FaBolt size={20} />,
  },
  {
    title: "Optimization & Fixes",
    description:
      "Improve speed, fix UI issues, and optimize performance across all devices and screen sizes.",
    icon: <FaWrench size={20} />,
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 👇 Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
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
      className="relative mx-auto max-w-[1200px] py-24 px-6"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      {/* Header */}
      <div
        className={`mb-16 max-w-2xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-sm font-semibold text-[#2f5d50]">
          Services
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
          Solutions built for real business growth
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
          We design and develop modern digital products that are fast,
          scalable, and built to deliver measurable results.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, index) => (
          <div
            key={s.title}
            className={`group relative rounded-2xl bg-[#f8f7f4] border border-black/10 p-6 overflow-hidden transition-all duration-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2f5d50]/20`}
            style={{
              transitionDelay: `${index * 120}ms`,
            }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2f5d50]/40 transition-all duration-300" />

            {/* Glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#2f5d50]/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-4">
              {/* Icon */}
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#2f5d50]/10 text-[#2f5d50] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#2b2b2b]/70">
                {s.description}
              </p>

              {/* Subtle CTA */}
              <span className="mt-2 text-sm font-medium text-[#2f5d50] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;