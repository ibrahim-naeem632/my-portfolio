import React, { useEffect, useState } from "react";

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Clean, Maintainable Code",
    description:
      "Readable structure and scalable patterns so your project stays easy to maintain.",
  },
  {
    title: "Pixel-Perfect UI Execution",
    description:
      "Accurate spacing, typography, and responsive behavior across all devices.",
  },
  {
    title: "Performance-Focused Builds",
    description:
      "Fast load times, smooth interactions, and optimized assets by default.",
  },
  {
    title: "Clear Communication",
    description:
      "You always know what’s happening, what’s next, and where things stand.",
  },
];

const WhyMeSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("why-me-section");
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="why-me-section"
      className="relative bg-[#f8f7f4] py-28"
    >
      {/* subtle divider gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/5 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* LEFT — CONFIDENCE PANEL */}
          <div
            className={`
              relative
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            {/* accent line */}
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[#2f5d50]/60" />

            <div className="pl-6">
              <p className="text-sm font-semibold text-[#2f5d50]">
                Why Me
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#2b2b2b]">
                A thoughtful, reliable way to build products
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#2b2b2b]/70">
                Clients often come with ideas, designs, or problems — but need
                someone who can turn those into clean, reliable, real-world
                solutions.
              </p>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#2b2b2b]/70">
                I focus on structure, clarity, and long-term quality so your
                product doesn’t just look good — it holds up.
              </p>
            </div>
          </div>

          {/* RIGHT — REASONS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r, index) => (
              <div
                key={r.title}
                className={`
                  rounded-xl
                  border border-black/10
                  bg-white
                  p-6
                  transition-all duration-700
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
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
      </div>
    </section>
  );
};

export default WhyMeSection;
