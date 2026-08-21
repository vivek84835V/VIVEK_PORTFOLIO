import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/viv-logo 1.svg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="relative z-[9999] border-t-[8px] border-white bg-black">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:h-22 sm:px-8 md:px-10 lg:h-24 lg:px-16 xl:px-20">

                {/* Logo */}
                <div className="shrink-0">
                    <Link to="/" onClick={closeMenu} className="block">
                        <img src={logo} alt="Vivek Shimpi" className="h-auto w-28 object-contain sm:w-32 md:w-36 lg:w-40" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-6 text-sm md:flex md:gap-7 lg:gap-9 lg:text-base">

                    <a href="#about" className="text-white transition-colors duration-300 hover:text-[#bbbbbb]">
                        About
                    </a>

                    <a href="https://github.com/vivek84835V" target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300 hover:text-[#bbbbbb]">
                        GitHub
                    </a>

                    <a href="#contact" className="text-white transition-colors duration-300 hover:text-[#bbbbbb]">
                        Contact
                    </a>

                    <Link to="/projects" className="text-white no-underline transition-colors duration-300 hover:text-[#bbbbbb]">
                        Projects
                    </Link>

                    <a href="" className="rounded-md border border-white px-4 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black lg:px-5">
                        Sign Up
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-all duration-300 hover:border-white md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>

                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}

                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>

                <div className="flex flex-col px-5 py-5 sm:px-8">

                    <a href="#about" onClick={closeMenu} className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-violet-500">
                        About
                    </a>

                    <a href="https://github.com/vivek84835V" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-violet-500">
                        GitHub
                    </a>

                    <a href="#contact" onClick={closeMenu} className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-violet-500">
                        Contact
                    </a>

                    <Link to="/projects" onClick={closeMenu} className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-white no-underline transition-colors duration-300 hover:text-violet-500">
                        Projects
                    </Link>

                    <a href="" onClick={closeMenu} className="mt-5 rounded-md border border-white px-5 py-3 text-center text-sm uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black">
                        Sign Up
                    </a>

                </div>
            </div>
        </header>
    );
}

export default Header;