import React from "react";
import {
  FaChartLine,
  FaClock,
  FaGlobeAmericas,
  FaHandshake,
} from "react-icons/fa";
import { useGsapReveal } from "../hooks/useGsapReveal";

const deliveryCards = [
  {
    icon: <FaGlobeAmericas size={18} />,
    title: "International-Ready Websites",
    description:
      "Clean, premium pages built for foreign clients, remote teams, and businesses that need to look trustworthy from the first visit.",
  },
  {
    icon: <FaClock size={18} />,
    title: "Fast Turnaround",
    description:
      "Focused execution with clear milestones, quick revisions, and reliable delivery without sacrificing polish or responsiveness.",
  },
  {
    icon: <FaChartLine size={18} />,
    title: "Conversion Focus",
    description:
      "Layouts are shaped around strong messaging, clean calls to action, mobile clarity, and a smooth path from visitor to lead.",
  },
  {
    icon: <FaHandshake size={18} />,
    title: "Long-Term Support",
    description:
      "After launch, the site stays easy to improve with maintainable components, clean structure, and room for future content.",
  },
];

const milestones = [
  "Brand and audience review",
  "Responsive UI direction",
  "Development and animation",
  "Launch and refinement",
];

const AboutToolsSection: React.FC = () => {
  const sectionRef = useGsapReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b2c26] py-20 text-white sm:py-28"
    >
      <div
        data-parallax
        className="pointer-events-none absolute -left-36 top-8 h-[30rem] w-[30rem] rounded-full bg-[#6ee7b7]/10 blur-[150px]"
      />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div data-reveal className="max-w-2xl">
              <p className="text-sm font-semibold text-[#6ee7b7]">
                Global Delivery
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Websites that feel ready for serious clients
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                This section now focuses on the value behind the work: premium
                presentation, responsive experience, conversion clarity, and a
                delivery process that feels professional for international
                clients.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {deliveryCards.map((card) => (
                <article
                  data-reveal
                  key={card.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#6ee7b7]/30 hover:bg-white/[0.075] hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#6ee7b7]/10 text-[#6ee7b7] transition group-hover:bg-[#6ee7b7] group-hover:text-[#0b2c26]">
                    {card.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/68">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            data-reveal
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#6ee7b7]/10 blur-3xl" />

            <p className="relative text-sm font-semibold text-[#6ee7b7]">
              Delivery Snapshot
            </p>

            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {[
                ["24h", "reply time"],
                ["100%", "responsive"],
                ["4", "core stages"],
                ["Global", "client fit"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-xs text-white/55">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 space-y-4">
              {milestones.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#6ee7b7]/12 text-xs font-semibold text-[#6ee7b7]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{item}</p>
                    <div className="mt-3 h-px w-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutToolsSection;
