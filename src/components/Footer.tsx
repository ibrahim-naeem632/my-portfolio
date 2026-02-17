import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 border-t border-black/10 bg-[#f8f7f4]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2f5d50]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-lg font-bold text-[#2b2b2b]">
              Coder Creative
            </p>

            <p className="text-sm leading-relaxed text-[#2b2b2b]/70">
              I design and build modern websites and web apps with a focus on
              clarity, performance, and long-term quality.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      group
                      rounded-full p-2
                      text-[#2b2b2b]/70
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#2f5d50]/10
                      hover:text-[#2f5d50]
                    "
                  >
                    <Icon size={15} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-[#2b2b2b]">
              Services
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#2b2b2b]/70">
              {[
                "Website Design and Development",
                "Web Apps and Dashboards",
                "Landing Pages",
                "Bug Fixes and Maintenance",
                "Performance Optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="transition hover:translate-x-1 hover:text-[#2f5d50]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-[#2b2b2b]">
              Company
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#2b2b2b]/70">
              {["About", "Projects", "Testimonials", "Pricing", "Careers"].map(
                (item) => (
                  <li
                    key={item}
                    className="transition hover:translate-x-1 hover:text-[#2f5d50]"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <p className="text-sm font-semibold text-[#2b2b2b]">
              Contact
            </p>

            <div className="space-y-4 text-sm text-[#2b2b2b]/70">
              <div>
                <p className="text-[#2b2b2b]">Email</p>
                <a
                  href="mailto:youremail@example.com"
                  className="transition hover:text-[#2f5d50]"
                >
                  youremail@example.com
                </a>
              </div>

              <div>
                <p className="text-[#2b2b2b]">Phone</p>
                <a
                  href="tel:+00000000000"
                  className="transition hover:text-[#2f5d50]"
                >
                  +00 000 000000
                </a>
              </div>

              <div>
                <p className="text-[#2b2b2b]">Location</p>
                <p>
                  Pakistan
                  <br />
                  Remote Worldwide
                </p>
              </div>

              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-[#2f5d50]
                  px-6 py-3
                  text-sm font-medium text-white
                  shadow-md shadow-[#2f5d50]/30
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-[#2f5d50]/40
                "
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#2b2b2b]/50">
            © {new Date().getFullYear()} Coder Creative. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-[#2b2b2b]/50">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="/"
                className="transition hover:text-[#2f5d50]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
