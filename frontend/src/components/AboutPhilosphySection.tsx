import React, { useEffect, useRef, useState } from "react";

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "Interfaces should feel intuitive and effortless. Every layout and interaction is designed to reduce friction and guide users naturally.",
  },
  {
    title: "Performance matters",
    description:
      "Speed is a core requirement. We build optimized, lightweight, and responsive interfaces that perform consistently across devices.",
  },
  {
    title: "Built to scale",
    description:
      "We create structured, maintainable systems that grow with your product and support long-term development.",
  },
];

const AboutPhilosophySection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 🔥 smooth scroll animation
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
    <section ref={ref} className="bg-[#f8f7f4] py-24">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Intro */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Our Philosophy
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2b2b2b]">
            Principles that guide every project
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Our approach is centered around clarity, performance, and long-term
            scalability. Every decision is made to ensure your product remains
            reliable and effective as it grows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl border border-black/10 bg-white p-6 overflow-hidden transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2f5d50]/15`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* CONTENT */}
              <h3 className="text-lg font-semibold text-[#2b2b2b]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#2b2b2b]/70">
                {item.description}
              </p>

              {/* ✅ FIXED GREEN LINE (inside border radius) */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2f5d50] transition-all duration-300 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPhilosophySection;