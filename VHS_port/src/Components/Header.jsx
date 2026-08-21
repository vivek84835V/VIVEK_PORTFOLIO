import React, { useState } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import logo from "../assets/viv-logo 1.svg";

function Header() {
    const [isopen, setIsopen] = useState(false);

    const closemenu = () => setIsopen(false);

    return (
        <header
            className="
                menu
                border-t-transparent
                border-white
                border-[8px]
                relative
                z-[9999]
                flex
                items-center
                justify-between
                h-[80px]
                px-6
                md:px-10
                transition-transform
                duration-300
                hover:scale-[1.01]
            "
        >

            {/* ================= LOGO ================= */}
            <div className="logo flex items-center">
                <Link to="/" onClick={closemenu}>
                    <img
                        src={logo}
                        alt="Vivek Logo"
                        className="block"
                    />
                </Link>
            </div>


            {/* ================= DESKTOP MENU ================= */}
            <div
                className="
                    menu_items
                    !hidden
                    md:!flex
                    items-center
                    justify-end
                    gap-6
                    h-full
                "
            >

                <a
                    className="no-menu-style text-white hover:text-[#bbbbbb]"
                    href="#about"
                >
                    About
                </a>

                <a
                    className="no-menu-style text-white hover:text-[#bbbbbb]"
                    href="https://github.com/vivek84835V"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    className="no-menu-style text-white hover:text-[#bbbbbb]"
                    href="#contact"
                >
                    Contact
                </a>

                <Link
                    to="/projects"
                    className="no-menu-style menu-link flex items-center"
                >
                    <h5 className="m-0">
                        Projects
                    </h5>
                </Link>

                <a
                    className="
                        hover:border
                        border-white
                        hover:bg-white
                        hover:text-black
                        animation:fadeIn
                        0.5s
                        ease-in-out
                    "
                    href="#signup"
                >
                    SignUp
                </a>

            </div>


            {/* ================= MOBILE HAMBURGER ================= */}
            <button
                type="button"
                onClick={() => setIsopen((prev) => !prev)}
                className="
                    flex
                    flex-col
                    gap-1.5
                    md:hidden
                    items-center
                    justify-center
                "
                aria-label={isopen ? "Close menu" : "Open menu"}
                aria-expanded={isopen}
            >

                <span
                    className={`h-0.5 w-6 bg-white transition-all duration-300 ${isopen
                        ? "translate-y-2 rotate-45"
                        : ""
                        }`}
                />

                <span
                    className={`h-0.5 w-6 bg-white transition-all duration-300 ${isopen
                        ? "opacity-0"
                        : ""
                        }`}
                />

                <span
                    className={`h-0.5 w-6 bg-white transition-all duration-300 ${isopen
                        ? "-translate-y-2 -rotate-45"
                        : ""
                        }`}
                />

            </button>


            {/* ================= MOBILE MENU ================= */}
            <div
                className={`
        absolute
        left-0
        top-full
        w-full
        overflow-hidden
        bg-black
        md:hidden
        transition-all
        duration-300
        ${isopen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }
    `}
            >

                <div className="menu_items flex flex-col items-center justify-center h-[100px]">
                    <div className="flex gap-10">
                        <a
                            className="no-menu-style text-white hover:text-[#bbbbbb]"
                            href="#about"
                            onClick={closemenu}
                        >
                            About
                        </a>

                        <a
                            className="no-menu-style text-white hover:text-[#bbbbbb]"
                            href="https://github.com/vivek84835V"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closemenu}
                        >
                            GitHub
                        </a>

                    </div>
                    <div className="flex gap-10">
                        <a
                            className="no-menu-style text-white hover:text-[#bbbbbb]"
                            href="#contact"
                            onClick={closemenu}
                        >
                            Contact
                        </a>

                        <Link
                            to="/projects"
                            className="no-menu-style menu-link text-white hover:text-[#bbbbbb]"
                            onClick={closemenu}
                        >
                            <h4 className="no-menu-style">
                                Projects
                            </h4>
                        </Link>

                        <a
                            className="
                            hover:border
                            border-white
                            hover:bg-white
                            hover:text-black
                            animation:fadeIn
                            0.5s
                            ease-in-out
                        "
                            href="#signup"
                            onClick={closemenu}
                        >
                            SignUp
                        </a>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;