import React from "react";
import { FaBolt, FaCode, FaLaptopCode, FaWrench } from "react-icons/fa";
import { useGsapReveal } from "../hooks/useGsapReveal";

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
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-24">
      <div
        data-parallax
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]"
      />

      <div data-reveal className="mb-14 max-w-2xl">
        <p className="text-sm font-semibold text-[#2f5d50]">Services</p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2b2b2b] sm:text-4xl">
          Solutions built for real business growth
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
          We design and develop modern digital products that are fast, scalable,
          and built to deliver measurable results.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {services.map((service) => (
          <div
            data-reveal
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/85 p-6 shadow-sm shadow-black/[0.03] transition-all duration-500 hover:-translate-y-3 hover:border-[#2f5d50]/25 hover:shadow-2xl hover:shadow-[#2f5d50]/15"
          >
            <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-[#2f5d50]/35" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2f5d50]/15 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#2f5d50]/10 text-[#2f5d50] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#2f5d50] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#2b2b2b]/70">
                {service.description}
              </p>

              <span className="mt-2 text-sm font-medium text-[#2f5d50] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
