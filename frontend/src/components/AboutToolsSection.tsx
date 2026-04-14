import React from "react";

const core = "JavaScript";

const skills = [
  "React","Next.js","SvelteKit",
  "HTML","CSS","Tailwind",
  "Node.js","Express","MongoDB",
  "PostgreSQL","Firebase",
  "GraphQL","REST APIs","JWT",
  "Git","GitHub","Docker",
  "CI/CD","Vercel",
  "Optimization","Caching",
  "Figma","UI Systems",
  "Accessibility","SEO","Analytics"
];

const AboutToolsSection: React.FC = () => {
  return (
    <section className="bg-[#0f2e28] py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 text-center">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl mx-auto">
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
        </div>

        {/* SYSTEM */}
        <div className="relative mx-auto h-[650px] max-w-[1000px] flex items-center justify-center">

          {/* CENTER */}
          <div className="absolute z-20 h-32 w-32 rounded-full bg-[#2f5d50] flex items-center justify-center font-semibold shadow-xl shadow-[#2f5d50]/40 animate-pulse">
            {core}
          </div>

          {/* SKILLS */}
          {skills.map((skill, i) => {
            const total = skills.length;
            const angle = (i / total) * 2 * Math.PI;

            // 🔥 Increased spacing
            const radius =
              i % 3 === 0 ? 360 :   // outer
              i % 3 === 1 ? 300 :   // mid
              190;                  // inner

            // 🔥 smoother organic spacing
            const skewX = Math.sin(i * 0.8) * 20;
            const skewY = Math.cos(i * 0.8) * 15;

            const x = Math.cos(angle) * radius + skewX;
            const y = Math.sin(angle) * radius + skewY;

            return (
              <div
                key={skill}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <div
                  className="
                    px-3 py-1.5
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-xs md:text-sm
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:scale-110
                    hover:bg-[#2f5d50]/20
                    hover:border-[#2f5d50]/40
                    hover:shadow-lg hover:shadow-[#2f5d50]/30
                    animate-float
                  "
                  style={{
                    animationDelay: `${i * 0.08}s`
                  }}
                >
                  {skill}
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* FLOAT */}
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
        `}
      </style>
    </section>
  );
};

export default AboutToolsSection;