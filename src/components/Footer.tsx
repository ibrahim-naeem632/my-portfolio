import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const socials = [
  { icon: FaFacebookF, link: "https://www.facebook.com/share/1LYP52Ksxj/" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
  { icon: FaGithub, link: "https://github.com/ibrahim-naeem632" },
  { icon: FaWhatsapp, link: "https://wa.me/923314409180" },
  {
    icon: FaUpwork,
    link: "https://www.upwork.com/freelancers/~01a0224b55c64db1d6?mp_source=share",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-black/10 bg-[#f3f1eb]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div className="space-y-4">
            <p className="text-lg font-bold text-[#2b2b2b]">Coder Creative</p>

            <p className="text-sm leading-relaxed text-[#2b2b2b]/70">
              We build modern websites and web applications with a focus on
              performance, scalability, and long-term reliability.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/60 text-[#2b2b2b]/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f5d50]/20 hover:bg-[#2f5d50]/10 hover:text-[#2f5d50] ${
                      item.link.includes("upwork")
                        ? "text-green-600 hover:bg-green-100"
                        : ""
                    }`}
                    aria-label="Social profile"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2b2b2b]">Services</p>

            <ul className="mt-5 space-y-3 text-sm text-[#2b2b2b]/70">
              {[
                { label: "Website Development", to: "/" },
                { label: "Web Applications", to: "/" },
                { label: "Landing Pages", to: "/" },
                { label: "Maintenance", to: "/" },
                { label: "Optimization", to: "/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-block transition hover:translate-x-1 hover:text-[#2f5d50]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2b2b2b]">Company</p>

            <ul className="mt-5 space-y-3 text-sm text-[#2b2b2b]/70">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Projects", to: "/projects" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-block transition hover:translate-x-1 hover:text-[#2f5d50]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold text-[#2b2b2b]">Contact</p>

            <div className="space-y-4 text-sm text-[#2b2b2b]/70">
              <div>
                <p className="font-medium text-[#2b2b2b]">Email</p>
                <a
                  href="mailto:ibrahim.naeem632@gmail.com"
                  className="break-words hover:text-[#2f5d50]"
                >
                  ibrahim.naeem632@gmail.com
                </a>
              </div>

              <div>
                <p className="font-medium text-[#2b2b2b]">Phone</p>
                <a href="tel:+923314409180" className="hover:text-[#2f5d50]">
                  +92 331 440 9180
                </a>
              </div>

              <div>
                <p className="font-medium text-[#2b2b2b]">Location</p>
                <p>Pakistan - Remote Worldwide</p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2f5d50] px-6 py-3 text-sm font-medium text-white shadow-md shadow-[#2f5d50]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24463c]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#2b2b2b]/50">
            © {new Date().getFullYear()} Coder Creative. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-[#2b2b2b]/50">
            <Link to="/" className="hover:text-[#2f5d50]">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-[#2f5d50]">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-[#2f5d50]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
