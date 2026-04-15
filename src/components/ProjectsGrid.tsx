import React, { useState, useEffect, useRef, type ReactNode } from "react";
import helixphoto from "../assets/helix.png";
import dashboardphoto from "../assets/dashboard.png";
import buttonsphoto from "../assets/buttons.png";
import argiosphoto from "../assets/argios.png";
import diamonphoto from "../assets/d-daimond.png";

/* ─── Types ─── */
type Project = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tech: string[];
  results?: string[];
  link?: string;
  featured?: boolean;
};

/* ─── Data ─── */
const projects: Project[] = [
  {
    title: "Helix Beauty Website",
    shortDesc:
      "Migrated a Wix website into a high-performance custom-built interface.",
    fullDesc:
      "This project involved converting an existing Wix-based website into a fully custom-built solution using HTML, CSS, and JavaScript. The original site had performance limitations, heavy assets, and restricted flexibility due to Wix's builder constraints.\n\nI rebuilt the entire interface from scratch, carefully replicating and refining animations to ensure a smoother and more consistent user experience. Layout structure, spacing, and typography were improved to create a cleaner and more modern UI.\n\nA fully dynamic cart system was implemented, allowing better control over product interactions and scalability. Additionally, all images and assets were optimized, significantly reducing load time and improving overall performance.\n\nAs a result, the website became faster, more maintainable, and easier to scale. The user experience improved noticeably, with smoother navigation and better interaction flow across devices.",
    image: helixphoto,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.helixbeauty.com/index.html",
    featured: true,
  },
  {
    title: "SaaS Dashboard Application",
    shortDesc:
      "A scalable full-stack dashboard for managing analytics, users, and operations.",
    fullDesc:
      "This project is a full-stack SaaS dashboard designed to handle real-world business operations such as analytics tracking, user management, and product control.\n\nThe frontend is built using React and TypeScript with a strong focus on reusable components, structured architecture, and responsive layouts. Complex data is presented in a clear and user-friendly way to ensure usability.\n\nOn the backend, Node.js and Express are used to create scalable APIs, with MongoDB handling dynamic data storage. Authentication systems, protected routes, and proper data flow were implemented to ensure security and maintainability.\n\nPerformance optimization techniques such as efficient state management, component reuse, and optimized rendering were applied to ensure smooth interactions. The system is designed to scale easily as features grow.\n\nOverall, this project demonstrates the ability to build production-ready, scalable full-stack applications with clean architecture and strong performance.",
    image: dashboardphoto,
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://ibrahims-dashboard.netlify.app/"
  },
  {
    title: "Buttons UI Library",
    shortDesc:
      "A collection of 500+ reusable button components built with pure CSS.",
    fullDesc:
      "This project is a comprehensive UI library consisting of over 500 button variations built entirely using HTML and CSS.\n\nEach button includes unique hover effects, transitions, and interaction styles, designed to be reusable across different types of web projects. The focus was on creating lightweight, dependency-free components that developers can integrate easily.\n\nSpecial attention was given to animation smoothness, consistency, and modern UI patterns. The library avoids unnecessary JavaScript, keeping performance fast and bundle size minimal.\n\nThis project highlights strong CSS skills, design consistency, and the ability to create scalable UI systems that can be reused in multiple applications.",
    image: buttonsphoto,
    tech: ["HTML", "CSS"],
    link: "https://500buttons.netlify.app/"
  },
  {
    title: "Argiios Agriculture Website",
    shortDesc:
      "A professional business website built for an agriculture-based company.",
    fullDesc:
      "Developed a modern business website for an agriculture-focused company using React, TypeScript, and SCSS.\n\nThe project focused on presenting company information in a structured, professional, and easy-to-understand way. Layouts were designed to guide users clearly through services and offerings.\n\nSCSS was used to maintain clean and scalable styling, while React ensured a modular and maintainable component structure. Performance and responsiveness were carefully optimized to provide a smooth experience across devices.\n\nThe final result is a fast, clean, and professional website that improves brand presentation and user trust, making it suitable for real business use.",
    image: argiosphoto,
    tech: ["React", "SCSS", "TypeScript"],
    link: "https://argiios.netlify.app/",
  },
  {
    title: "D Diamond Landing Page",
    shortDesc: "A clean and conversion-focused static landing page.",
    fullDesc:
      "This project involved building a static landing page using HTML and CSS with a strong focus on clarity and conversion.\n\nThe layout was carefully structured to guide users through content in a logical flow, highlighting key messages and call-to-action sections. Typography, spacing, and visual hierarchy were refined to improve readability and engagement.\n\nThe page is lightweight and optimized for fast loading, ensuring a smooth user experience even on slower connections.\n\nOverall, the landing page is designed to communicate value clearly and encourage user action, making it effective for marketing and lead generation purposes.",
    image: diamonphoto,
    tech: ["HTML", "CSS"],
    link: "https://asadusama.github.io/d-diamonds.github.io/"
  },
];

/* ─── Intersection Observer Hook ─── */
function useReveal(threshold: number = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─── Animated Counter ─── */
type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

const Counter: React.FC<CounterProps> = ({ end, suffix = "", duration = 1800 }) => {
  const [val, setVal] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

/* ─── Magnetic Button ─── */
type MagneticBtnProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const MagneticBtn: React.FC<MagneticBtnProps> = ({ children, onClick, className = "" }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      {children}
    </button>
  );
};

/* ─── Project Card ─── */
type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
  const [ref, visible] = useReveal(0.1);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hovering, setHovering] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
      }}
      className={project.featured ? "sm:col-span-2" : ""}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleLeave}
        style={{
          transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="relative overflow-hidden rounded-[20px] bg-white border border-[#e8e5df] cursor-pointer group"
        onClick={() => onOpen(project)}
      >
        {/* Shine effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: hovering
              ? `radial-gradient(circle at ${(tilt.x / 8 + 0.5) * 100}% ${(-tilt.y / 8 + 0.5) * 100}%, rgba(47,93,80,0.06) 0%, transparent 60%)`
              : "none",
          }}
        />

        {/* Featured ribbon */}
        {project.featured && (
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-[#2f5d50] text-white text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
            Featured
          </div>
        )}

        {/* Image */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: project.featured ? "2.2/1" : "16/10" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#2b2b2b] text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              View Case Study
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-7">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[17px] font-bold text-[#1a1a1a] leading-tight tracking-[-0.01em]">
              {project.title}
            </h3>
            <svg
              className="w-5 h-5 mt-0.5 text-[#2f5d50] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#6b6b6b]">
            {project.shortDesc}
          </p>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-[#2f5d50] bg-[#2f5d50]/[0.07] px-2.5 py-1 rounded-md tracking-wide uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-5 pt-4 border-t border-[#f0eeea] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#2f5d50] tracking-wide group-hover:tracking-wider transition-all duration-300">
              EXPLORE PROJECT
            </span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="text-xs text-[#999] hover:text-[#2f5d50] transition-colors flex items-center gap-1"
              >
                Live Site
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Modal ─── */
type CaseStudyModalProps = {
  project: Project;
  onClose: () => void;
};

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [show, setShow] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 400);
  };

  const paragraphs = project.fullDesc.split("\n\n").filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          opacity: show ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Modal Card */}
      <div
        ref={contentRef}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-[24px] shadow-2xl"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="px-8 pb-10 -mt-12 relative">
          {/* Title */}
          <h3 className="text-2xl font-bold text-[#1a1a1a] tracking-[-0.02em] leading-tight">
            {project.title}
          </h3>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold text-[#2f5d50] bg-[#2f5d50]/[0.08] px-3 py-1.5 rounded-full uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-6 h-px bg-gradient-to-r from-[#2f5d50]/20 via-[#2f5d50]/10 to-transparent" />

          {/* Description */}
          <div className="mt-6 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] leading-[1.8] text-[#555]">
                {p}
              </p>
            ))}
          </div>

          {/* Results badges */}
          {project.results && project.results.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3">
              {project.results.map((r) => (
                <div key={r} className="bg-[#f8f7f4] rounded-xl p-4 text-center">
                  <span className="text-sm font-semibold text-[#2f5d50]">{r}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {project.link && (
            <div className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#2f5d50] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#244a3f] transition-colors"
              >
                Visit Live Project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const ProjectsGrid: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [headerRef, headerVisible] = useReveal(0.2);

  return (
    <section className="relative bg-[#f8f7f4] py-28 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2f5d50 0.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 relative">
        {/* ─── Header ─── */}
        <div
          ref={headerRef}
          className="mb-20 max-w-2xl"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-[#2f5d50]" />
            <span className="text-[11px] font-bold text-[#2f5d50] uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-[44px] font-extrabold text-[#1a1a1a] leading-[1.1] tracking-[-0.03em]">
            Real work with
            <br />
            <span className="text-[#2f5d50]">real impact</span>
          </h2>

          <p className="mt-5 text-[15px] text-[#888] leading-relaxed max-w-md">
            Each project focuses on performance, usability, and scalable solutions that deliver
            measurable results.
          </p>

          {/* Stats bar */}
          <div className="mt-10 flex gap-10">
            {[
              { val: 20, suffix: "+", label: "Projects Delivered" },
              { val: 100, suffix: "%", label: "Client Satisfaction" },
              { val: 3, suffix: "x", label: "Avg Performance Boost" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">
                  <Counter end={s.val} suffix={s.suffix} />
                </div>
                <div className="text-[11px] text-[#aaa] mt-1 uppercase tracking-wider font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Grid ─── */}
        <div className="grid gap-7 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onOpen={setActiveProject} />
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-16 flex justify-center">
          <MagneticBtn className="group inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#2f5d50] transition-colors duration-300">
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MagneticBtn>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
};

export default ProjectsGrid;
