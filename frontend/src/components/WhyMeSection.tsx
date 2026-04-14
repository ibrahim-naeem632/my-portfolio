import React, { useEffect, useRef, useState } from "react";

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Clean & Scalable Code",
    description:
      "Structured, maintainable codebases designed to grow with your product without breaking over time.",
  },
  {
    title: "Precision in UI Execution",
    description:
      "Carefully crafted layouts with consistent spacing, typography, and responsiveness across all devices.",
  },
  {
    title: "Performance-Driven Development",
    description:
      "Optimized builds focused on speed, smooth interactions, and efficient resource usage.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates, defined timelines, and consistent collaboration throughout the entire process.",
  },
];

const WhyMeSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Better scroll detection
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
      className="relative bg-[#f8f7f4] py-28"
    >
      {/* Top soft divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/5 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* LEFT — CONTENT */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Accent line */}
            <span className="absolute left-0 top-0 h-full w-[3px] bg-[#2f5d50]" />

            <div className="pl-6">
              <p className="text-sm font-semibold text-[#2f5d50]">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#2b2b2b]">
                A reliable partner for building high-quality digital products
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#2b2b2b]/70">
                Successful products are not just about design or code — they require
                structure, clarity, and long-term thinking.
              </p>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#2b2b2b]/70">
                We focus on delivering solutions that are not only visually strong,
                but also technically solid and built to scale with your business.
              </p>

              {/* Trust bullets */}
              <ul className="mt-6 space-y-2 text-sm text-[#2b2b2b]/70">
                <li>✔ Consistent delivery standards</li>
                <li>✔ Scalable and maintainable architecture</li>
                <li>✔ Long-term project reliability</li>
              </ul>
            </div>
          </div>

          {/* RIGHT — CARDS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r, index) => (
              <div
                key={r.title}
                className={`group relative rounded-xl border border-black/10 bg-white p-6 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2f5d50]/20`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* subtle hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2f5d50] transition-all duration-300 group-hover:w-full" />

                <h3 className="text-base font-semibold text-[#2b2b2b]">
                  {r.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                  {r.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-20 text-center">
          <p className="text-sm text-[#2b2b2b]/60">
            Focused on quality, performance, and long-term value.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyMeSection;