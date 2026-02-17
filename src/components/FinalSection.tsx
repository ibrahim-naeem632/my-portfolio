import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FinalCTASection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("final-cta");
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#2f5d50] py-28"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <div
          className={`
            transition-all duration-800
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-sm font-semibold tracking-wide text-white/80">
            Ready to get started?
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let’s build something clean, fast, and reliable
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/80">
            Whether you need a full website, a UI build, or improvements to an
            existing project, I’m ready to help you move forward.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="
                inline-flex h-12 items-center justify-center
                rounded-full
                bg-white
                px-8
                text-sm font-semibold text-[#2f5d50]
                shadow-lg shadow-black/20
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-black/30
              "
            >
              Get a Free Quote
            </Link>

            <Link
              to="/projects"
              className="
                inline-flex h-12 items-center justify-center
                rounded-full
                border border-white/40
                bg-white/5
                px-8
                text-sm font-semibold text-white
                transition-all duration-300
                hover:bg-white/10
              "
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
