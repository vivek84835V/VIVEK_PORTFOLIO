import React from "react";

import arrow from "../assets/arrow.png";
import me from "../assets/me.png";
import glow from "../assets/me-glow.png";
import circle from "../assets/circle.png";

function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black font-satoshi">

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 pb-28 sm:px-6 md:px-10 lg:flex-row lg:px-20 lg:pb-0">

                {/* LEFT — INTRO + PORTRAIT */}
                <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">

                    {/* Intro */}
                    <p className="mt-16 text-center font-mono text-xs tracking-[0.12em] text-white sm:mt-20 sm:text-sm md:text-base lg:ml-64 lg:mt-20 lg:text-left lg:text-[15px]">
                        HELLO! I AM
                        <span className="ml-2 font-satoshi text-violet-600 sm:ml-3">
                            Vivek Shimpi
                        </span>
                    </p>

                    {/* Arrow */}
                    <img
                        src={arrow}
                        alt=""
                        aria-hidden="true"
                        className="mt-4 w-14 rotate-[-30deg] sm:mt-5 sm:w-16 md:w-20 lg:mb-[-10px] lg:ml-52 lg:mt-5 lg:w-24"
                    />

                    {/* Portrait */}
                    <div className="relative mt-2 flex h-[250px] w-[250px] items-center justify-center sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:mb-44 lg:ml-20 lg:mt-0 lg:h-[350px] lg:w-[400px]">

                        {/* Glow */}
                        <img
                            src={glow}
                            alt=""
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 w-60 -translate-x-1/2 -translate-y-1/2 blur-[45px] sm:w-72 sm:blur-[50px] md:w-[380px] md:blur-[60px] lg:w-[520px]"
                        />

                        {/* Portrait */}
                        <img
                            src={me}
                            alt="Vivek Shimpi"
                            className="relative z-10 w-52 select-none sm:w-60 md:w-72 lg:w-[260px]"
                        />

                    </div>
                </div>

                {/* RIGHT — STATEMENT */}
                <div className="mt-8 flex w-full flex-col items-center text-center sm:mt-10 md:mt-14 lg:mt-0 lg:w-1/2 lg:-translate-y-16 lg:items-start lg:text-left">

                    {/* Label */}
                    <p className="font-mono text-xs tracking-[0.12em] text-white underline decoration-violet-600 decoration-1 underline-offset-4 sm:text-sm md:text-lg lg:text-base">
                        A DESIGNER WHO
                    </p>

                    {/* Main Heading */}
                    <h1 className="mt-4 font-satoshi text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-[42px] lg:leading-[56px]">

                        judges a project
                        <br />

                        by its{" "}

                        <span className="relative ml-1 inline-block text-violet-600 sm:ml-2">
                            Creativity...

                            {/* Circle */}
                            <img
                                src={circle}
                                alt=""
                                aria-hidden="true"
                                className="absolute -bottom-1 left-1/2 w-32 -translate-x-1/2 rotate-[-17deg] sm:w-40 md:w-48 lg:bottom-[-30px] lg:w-56 lg:-translate-y-2"
                            />
                        </span>

                    </h1>

                    {/* Supporting Text */}
                    <p className="mt-8 font-mono text-xs tracking-wide text-white sm:text-sm md:mt-10 md:text-xl lg:text-[18px]">
                        Because creativity sets the{" "}
                        <span className="ml-1 font-satoshi text-violet-600 sm:ml-2">
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
                className="group absolute bottom-5 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 px-4 py-2 sm:bottom-7 md:bottom-10 lg:bottom-14"
                aria-label="Scroll down"
            >

                <p className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-violet-700 transition-colors duration-300 group-hover:text-violet-500 sm:text-[10px] sm:tracking-[0.25em] md:text-sm">
                    Scroll Down
                </p>

                <svg
                    className="mt-1 h-4 w-4 animate-bounce text-white transition-colors duration-300 group-hover:text-violet-400 sm:h-5 sm:w-5"
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