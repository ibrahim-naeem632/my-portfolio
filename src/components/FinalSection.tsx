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
      className="relative overflow-hidden bg-[#163b34] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.14),transparent_24rem),radial-gradient(circle_at_82%_70%,rgba(0,0,0,0.26),transparent_24rem)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center sm:px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold tracking-wide text-white/75">
            Ready to get started?
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something clean, fast, and reliable
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/78">
            Whether you need a full website, a UI build, or improvements to an
            existing project, I am ready to help you move forward.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#163b34] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-black/30 sm:w-auto"
            >
              Get a Free Quote
            </Link>

            <Link
              to="/projects"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15 sm:w-auto"
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
