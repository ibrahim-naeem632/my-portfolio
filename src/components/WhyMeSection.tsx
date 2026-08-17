import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

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

const trustPoints = [
  "Consistent delivery standards",
  "Scalable and maintainable architecture",
  "Long-term project reliability",
];

const WhyMeSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#fbfaf7] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#2f5d50]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div
            className={`relative rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm shadow-black/[0.03] backdrop-blur-md transition-all duration-700 sm:p-8 ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.2,0.9,0.3,1)",
              transitionDelay: "80ms",
            }}
          >
            <p className="text-sm font-semibold text-[#2f5d50]">Why Choose Us</p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b2b2b] sm:text-4xl">
              A reliable partner for building high-quality digital products
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-[#2b2b2b]/70">
              Successful products are not just about design or code. They need
              structure, clarity, performance, and long-term thinking.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
              We focus on delivering solutions that are visually strong,
              technically solid, and ready to scale with your business.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-[#2b2b2b]/70">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#2f5d50]/10 text-[#2f5d50]">
                    <FaCheck size={11} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03] transition-[opacity,transform,box-shadow,border-color] duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                } hover:-translate-y-1.5 hover:border-[#2f5d50]/25 hover:shadow-xl hover:shadow-[#2f5d50]/15`}
                style={{
                  transitionDelay: `${120 + index * 90}ms`,
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#2f5d50] transition-transform duration-500 group-hover:scale-x-100" />

                <h3 className="text-base font-semibold text-[#2b2b2b]">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#2b2b2b]/70">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-[#2b2b2b]/60">
          Focused on quality, performance, and long-term value.
        </p>
      </div>
    </section>
  );
};

export default WhyMeSection;
