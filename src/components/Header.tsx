import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/coder-logo.png";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`relative overflow-hidden bg-[#163b34] text-xs text-white transition-all duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex min-h-9 items-center justify-center gap-4 py-2 sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:justify-start">
              <a
                href="tel:+923314409180"
                className="flex items-center gap-2 transition hover:text-white/75"
              >
                <FaPhoneAlt size={13} /> +92 331 440 9180
              </a>
              <a
                href="mailto:ibrahim.naeem632@gmail.com"
                className="hidden items-center gap-2 transition hover:text-white/75 sm:flex"
              >
                <FaEnvelope size={13} /> ibrahim.naeem632@gmail.com
              </a>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition hover:-translate-y-0.5 hover:text-white/75"
                  aria-label="Social profile"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-black/5 bg-[#fbfaf7]/90 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? "shadow-xl shadow-black/10" : ""
        } ${mounted ? "scale-100 blur-0" : "scale-[0.98] blur-sm"}`}
      >
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex h-[72px] items-center">
            <Link to="/" className="flex shrink-0 items-center">
              <div className="flex h-14 w-40 items-center overflow-hidden sm:w-44">
                <img
                  src={logo}
                  alt="Coder Creative"
                  className="h-full w-full object-contain scale-[1.42]"
                />
              </div>
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-sm font-medium lg:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`group relative transition-colors duration-200 ${
                      isActive
                        ? "text-[#2f5d50]"
                        : "text-[#2b2b2b] hover:text-[#2f5d50]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-[#2f5d50] transition-transform duration-300 group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto hidden items-center lg:flex">
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#2f5d50] px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24463c] hover:shadow-lg hover:shadow-[#2f5d50]/25"
              >
                Get a Quote <FaArrowRight size={12} />
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 text-[#2b2b2b] transition hover:border-[#2f5d50]/30 hover:text-[#2f5d50] lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#fbfaf7]/95 shadow-2xl shadow-black/10 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-5 sm:px-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#2f5d50]/10 text-[#2f5d50]"
                        : "text-[#2b2b2b] hover:bg-black/[0.03] hover:text-[#2f5d50]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#2f5d50] py-3 text-sm font-medium text-white"
              >
                Get a Quote <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
