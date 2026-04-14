import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type HeroBtn = {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  image: string;
  eyebrow?: string;
  title: React.ReactNode;
  description: string[];
  buttons?: HeroBtn[];
  height?: "full" | "medium";
  hideRight?: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  eyebrow,
  title,
  description,
  buttons = [],
  height = "full",
  hideRight = false
}) => {
  const [show, setShow] = useState(false);

  const heightClass =
    height === "medium"
      ? "h-[65svh]"
      : "h-[100svh]";

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`relative overflow-hidden bg-black ${heightClass}`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-bg"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="grid w-full gap-16 lg:grid-cols-2 items-stretch">

            {/* LEFT */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              {eyebrow && (
                <p className={`text-sm tracking-wide text-[#2f5d50] transition-all duration-700 ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  {eyebrow}
                </p>
              )}

              {/* Title */}
              <h1 className={`mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl transition-all duration-700 delay-150 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>
                {title}
              </h1>

              {/* Description */}
              <div className="mt-6 space-y-4">
                {description.map((p, i) => (
                  <p
                    key={i}
                    className={`max-w-xl text-white/80 sm:text-lg transition-all duration-700 ${
                      show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + i * 120}ms` }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Buttons */}
              {buttons.length > 0 && (
                <div className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-[850ms] ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}>
                  {buttons.map((b) => {
                    const primary = (b.variant ?? "primary") === "primary";

                    return (
                      <Link
                        key={b.label}
                        to={b.to}
                        className={
                          primary
                            ? "inline-flex h-12 items-center justify-center rounded-full px-8 bg-[#2f5d50] text-sm font-semibold text-white shadow-lg shadow-[#2f5d50]/40 transition-all duration-300 hover:bg-[#24463c] hover:-translate-y-0.5 hover:shadow-[#2f5d50]/60"
                            : "inline-flex h-12 items-center justify-center rounded-full px-8 border border-white/30 bg-white/5 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-[#2f5d50] hover:text-[#2f5d50]"
                        }
                      >
                        {b.label}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Trust line */}
              <p className="mt-4 text-sm text-white/60">
                We typically respond within 24 hours
              </p>

            </div>

            {/* RIGHT */}
            {!hideRight && (
              <div className={`hidden lg:grid gap-6 transition-all duration-1000 ${
                show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}>
                {[
                  {
                    title: "High Performance",
                    desc: "Fast, optimized applications built for real-world usage"
                  },
                  {
                    title: "Scalable Architecture",
                    desc: "Structured code that grows with your business"
                  },
                  {
                    title: "Reliable Delivery",
                    desc: "Clear process, consistent communication, on-time results"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2f5d50]/60"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;