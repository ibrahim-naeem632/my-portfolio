import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaSearch,
    FaBars,
    FaTimes
} from "react-icons/fa";
import logo from "../assets/logo (2).png";

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
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

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* ───────────── Top Info Bar ───────────── */}
            <div
                className={`
          relative overflow-hidden
          bg-[#2f5d50]
          text-white text-xs
          transition-all duration-700
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
            >
                <div className="mx-auto max-w-[1200px] px-6">
                    <div className="flex h-9 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <a href="tel:+923314409180" className="flex items-center gap-2">
                                <FaPhoneAlt size={13} /> +92 331 440 9180
                            </a>
                            <a href="mailto:ibrahim.naeem632@gmail.com" className="flex items-center gap-2">
                                <FaEnvelope size={13} /> ibrahim.naeem632@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
                                <a key={i} href="#" className="hover:scale-110 transition">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ───────────── Main Navbar ───────────── */}
            <div
                className={`
          bg-[#f8f7f4]/95
          backdrop-blur-md
          transition-all duration-500
          ${isScrolled ? "shadow-lg shadow-black/10" : ""}
          ${mounted ? "scale-100 blur-0" : "scale-[0.98] blur-sm"}
        `}
            >
                <div className="relative mx-auto max-w-[1200px] px-6">
                    <div className="flex h-16 items-center">

                        {/* LOGO (LEFT) */}
                        <Link to="/" className="flex items-center">
                            <div className="h-[95px] w-[160px] flex items-center overflow-hidden">
                                <img
                                    src={logo}
                                    alt="Coder Creative"
                                    className="h-full w-full object-contain scale-[1.6]"
                                />
                            </div>
                        </Link>

                        {/* NAV (CENTERED ABSOLUTELY) */}
                        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:flex items-center gap-9 text-sm font-medium">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className={`
                      relative group transition-colors duration-200
                      ${isActive
                                                ? "text-[#2f5d50]"
                                                : "text-[#2b2b2b] hover:text-[#2f5d50]"
                                            }
                    `}
                                    >
                                        {item.label}
                                        <span
                                            className="
                        absolute left-0 -bottom-2 h-[2px] w-full
                        bg-[#2f5d50]
                        scale-x-0
                        transition-transform duration-300
                        origin-left
                        group-hover:scale-x-100
                      "
                                        />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* RIGHT ACTIONS */}
                        <div className="ml-auto hidden lg:flex items-center gap-4">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 text-xs" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="
                    h-9 w-36 pl-8 pr-3
                    rounded-md
                    border border-black/10
                    bg-white
                    text-sm
                    outline-none
                    transition-all duration-300
                    focus:w-52
                    focus:border-[#2f5d50]/50
                  "
                                />
                            </div>

                            <Link
                                to="/contact"
                                className="
                  inline-flex h-9 items-center justify-center
                  rounded-md px-5
                  bg-[#2f5d50]
                  text-sm font-medium text-white
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#2f5d50]/30
                "
                            >
                                Get a Quote
                            </Link>
                        </div>

                        {/* MOBILE BURGER */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="ml-auto lg:hidden text-[#2b2b2b]"
                        >
                            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* ───────────── MOBILE MENU ───────────── */}
                {menuOpen && (
                    <div className="lg:hidden bg-[#f8f7f4] border-t border-black/10">
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-medium text-[#2b2b2b]"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="
                  mt-4 inline-flex items-center justify-center
                  rounded-md bg-[#2f5d50]
                  py-3 text-sm font-medium text-white
                "
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
