import React from "react";
import { ArrowUp, Mail, TowerControl, X } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-[9999] w-full border-t-transparent border-white border-[8px] overflow-hidden bg-black text-white transition-transform duration-300 hover:scale-105">

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-soft-light"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        <div className="mb-8 h-px w-full bg-white/[0.08]" />


        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-xl font-semibold tracking-[-0.04em]">
              Vivek<span className="text-[#8A2BE2]">.</span>
            </h2>

            <p className="mt-1 text-xs text-white/40">
              Full Stack Developer & Creative Technologist
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/50"
            aria-label="Social links"
          >

            <a
              href="https://www.linkedin.com/in/vivek-shimpi-/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:text-white"
            >
              <FaLinkedinIn size={14} />
              linkedin.com/in/your-username
            </a>

            <a
              href="https://github.com/vivek84835V"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:text-white"
            >
              <FaGithub size={14} />
              github.com/your-username
            </a>

            <a
              href="mailto:vivek.hemant.shimpi7@gmail.com"
              className="flex items-center gap-2 text-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:text-white"
            >
              <Mail size={14} strokeWidth={1.7} />
              Email
            </a>

            <a
              href="#top"
              className="flex items-center gap-2 text-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:text-white"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>
          </nav>
        </div>


        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Vivek</span>

          <span>Made with intention</span>

          <span>India</span>
        </div>
      </div>
    </footer >
  );
}

export default Footer;