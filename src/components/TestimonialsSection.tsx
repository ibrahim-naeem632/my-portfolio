import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useGsapReveal } from "../hooks/useGsapReveal";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Founder, Luma Studio - United Kingdom",
    quote:
      "The new website gave our brand a much more premium feel. It loads quickly, works beautifully on mobile, and the whole process was handled with clear communication.",
  },
  {
    name: "Daniel Brooks",
    role: "Product Manager, Northline SaaS - Canada",
    quote:
      "Our dashboard interface became cleaner, easier to scan, and much more scalable. The attention to spacing, responsiveness, and component structure was excellent.",
  },
  {
    name: "Sophie Reynolds",
    role: "Marketing Lead, BrightPeak - Australia",
    quote:
      "We needed a polished landing page that felt trustworthy and modern. The final result looked professional, converted better, and felt smooth across every device.",
  },
  {
    name: "Michael Anderson",
    role: "Agency Owner, PixelForge - United States",
    quote:
      "The frontend delivery was sharp and reliable. Designs were translated into clean responsive pages with animations that felt premium without slowing the site down.",
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useGsapReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#fbfaf7] py-20 sm:py-24">
      <div
        data-parallax
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#2f5d50]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div data-reveal className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold text-[#2f5d50]">Testimonials</p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2b2b2b] sm:text-4xl">
            Trusted by international clients
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#2b2b2b]/70">
            Feedback from clients across the UK, Canada, Australia, and the
            United States who needed polished, responsive digital products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              data-reveal
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-[#2f5d50]/25 hover:shadow-2xl hover:shadow-[#2f5d50]/15"
            >
              <div className="absolute right-5 top-5 text-[#2f5d50]/10 transition group-hover:scale-110">
                <FaQuoteLeft size={38} />
              </div>

              <div className="relative flex gap-1 text-[#f59e0b]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={13} />
                ))}
              </div>

              <p className="relative mt-5 text-sm leading-relaxed text-[#2b2b2b]/72">
                "{item.quote}"
              </p>

              <div className="relative mt-6 border-t border-black/5 pt-5">
                <p className="font-semibold text-[#2b2b2b]">{item.name}</p>
                <p className="mt-1 text-xs text-[#2b2b2b]/55">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
