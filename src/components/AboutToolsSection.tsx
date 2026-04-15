import React, { useState, useEffect, useRef } from "react";

/* ─── Types ─── */
type Category = "frontend" | "backend" | "devops" | "design";

type SkillItem = {
  name: string;
  category: Category;
};

/* ─── Data ─── */
const core = "JavaScript";

const skills: SkillItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "SvelteKit", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT", category: "backend" },

  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Optimization", category: "devops" },
  { name: "Caching", category: "devops" },

  { name: "Figma", category: "design" },
  { name: "UI Systems", category: "design" },
  { name: "Accessibility", category: "design" },
  { name: "SEO", category: "design" },
  { name: "Analytics", category: "design" },
];

const categoryColors: Record<Category, string> = {
  frontend: "#4ade80",
  backend: "#60a5fa",
  devops: "#f59e0b",
  design: "#c084fc",
};

const categoryLabels: Record<Category, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  design: "Design",
};

/* ─── Reveal Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, { threshold });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

/* ─── Component ─── */
const AboutToolsSection: React.FC = () => {
  const [sectionRef, sectionVisible] = useReveal(0.1);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  return (
    <section ref={sectionRef} className="bg-[#0f2e28] py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 text-center">

        {/* HEADER */}
        <div
          className="mb-16 max-w-2xl mx-auto"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <p className="text-sm font-semibold text-[#2f5d50]">
            Tools & Stack
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Technologies behind our work
          </h2>

          <p className="mt-4 text-white/70 text-sm">
            A carefully structured stack designed for performance,
            scalability, and real-world applications.
          </p>

          {/* CATEGORY BUTTONS */}
          <div className="mt-8 flex items-center justify-center gap-5 flex-wrap">
            {(Object.keys(categoryLabels) as Category[]).map((cat) => {
              const isActive = hoveredCategory === null || hoveredCategory === cat;

              return (
                <button
                  key={cat}
                  className="flex items-center gap-2 text-xs font-medium transition-all duration-300"
                  style={{
                    color: isActive ? categoryColors[cat] : "rgba(255,255,255,0.2)",
                  }}
                  onMouseEnter={() => setHoveredCategory(cat)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: categoryColors[cat],
                      opacity: isActive ? 1 : 0.3,
                    }}
                  />
                  {categoryLabels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* ORBIT */}
        <div className="relative mx-auto h-[650px] max-w-[1000px] flex items-center justify-center">

          {/* CENTER */}
          <div
            className="absolute z-20 h-32 w-32 rounded-full bg-[#2f5d50] flex items-center justify-center font-semibold"
            style={{
              opacity: sectionVisible ? 1 : 0,
              scale: sectionVisible ? "1" : "0.6",
              transition: "all 0.8s ease",
            }}
          >
            {core}
          </div>

          {/* SKILLS */}
          {skills.map((skill, i) => {
            const total = skills.length;
            const angle = (i / total) * 2 * Math.PI;
            const radius = i % 3 === 0 ? 360 : i % 3 === 1 ? 300 : 190;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const color = categoryColors[skill.category];
            const isActive = hoveredCategory === null || hoveredCategory === skill.category;
            const isHighlighted = hoveredCategory === skill.category;

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  opacity: sectionVisible ? (isActive ? 1 : 0.15) : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <div
                  className="px-3 py-1.5 rounded-full text-xs md:text-sm animate-float"
                  style={{
                    background: isHighlighted ? `${color}20` : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isHighlighted ? `${color}50` : "rgba(255,255,255,0.1)"}`,
                    color: isHighlighted ? color : "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={() => setHoveredCategory(skill.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          /* ❌ NO MOVEMENT ON HOVER */
          .animate-float:hover {
            animation: none !important;
            transform: translateY(0px) !important;
          }
        `}
      </style>
    </section>
  );
};

export default AboutToolsSection;