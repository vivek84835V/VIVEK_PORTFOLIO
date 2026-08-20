import React from "react";

import arrow from "../assets/arrow.png";
import me from "../assets/me.png";
import glow from "../assets/me-glow.png";
import circle from "../assets/circle.png";

function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black font-satoshi">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 md:px-10 lg:flex-row lg:px-20">

                {/* LEFT — INTRO + PORTRAIT */}
                <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">

                    {/* Intro */}
                    <p className="mt-20 font-mono text-sm tracking-[0.12em] text-white md:text-base lg:ml-64 lg:text-[15px]">
                        HELLO! I AM
                        <span className="ml-3 font-satoshi text-violet-600">
                            Vivek Shimpi
                        </span>
                    </p>

                    {/* Arrow */}
                    <img
                        src={arrow}
                        alt=""
                        aria-hidden="true"
                        className="mt-5 w-20 rotate-[-30deg] md:w-24 lg:mb-[-10px] lg:ml-52 lg:w-24"
                    />

                    {/* Portrait */}
                    <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[400px] md:w-[400px] lg:mb-44 lg:ml-20 lg:h-[350px] lg:w-[400px]">

                        {/* Glow */}
                        <img
                            src={glow}
                            alt=""
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 blur-[60px] md:w-[380px] lg:w-[520px]"
                        />

                        {/* Portrait */}
                        <img
                            src={me}
                            alt="Vivek Shimpi"
                            className="relative z-10 w-60 select-none md:w-72 lg:w-[260px]"
                        />
                    </div>
                </div>

                {/* RIGHT — STATEMENT */}
                <div className="mt-16 flex w-full flex-col items-center text-center lg:mt-0 lg:w-1/2 lg:-translate-y-16 lg:items-start lg:text-left">

                    {/* Label */}
                    <p className="font-mono text-sm tracking-[0.15em] text-white underline decoration-violet-600 decoration-1 underline-offset-4 md:text-lg lg:text-base">
                        A DESIGNER WHO
                    </p>

                    {/* Main Heading */}
                    <h1 className="mt-5 font-satoshi text-3xl font-medium leading-[1.15] tracking-tight text-white md:text-6xl lg:text-[42px] lg:leading-[56px]">

                        judges a project
                        <br />

                        by its{" "}

                        <span className="relative ml-2 inline-block text-violet-600">
                            Creativity...

                            {/* Circle */}
                            <img
                                src={circle}
                                alt=""
                                aria-hidden="true"
                                className="absolute -bottom-1 left-1/2 w-44 -translate-x-1/2 rotate-[-17deg] lg:bottom-[-30px] lg:w-56 lg:-translate-y-2"
                            />
                        </span>
                    </h1>

                    {/* Supporting text */}
                    <p className="mt-10 font-mono text-sm tracking-wide text-white md:text-xl lg:text-[18px]">
                        Because creativity sets the{" "}
                        <span className="ml-2 font-satoshi text-violet-600">
                            standard.
                        </span>
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                type="button"
                onClick={() =>
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                    })
                }
                className="group absolute bottom-20 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center"
                aria-label="Scroll down"
            >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-700 transition-colors group-hover:text-violet-500 md:text-sm">
                    Scroll Down
                </p>

                <svg
                    className="mt-2 h-5 w-5 animate-bounce text-white transition-colors group-hover:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        </section>
    );
}

export default Hero;