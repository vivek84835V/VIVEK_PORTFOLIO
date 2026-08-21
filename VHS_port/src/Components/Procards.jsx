import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import proimg from "../assets/bg pro.svg";

function Procards({ project, reverse = false }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % project.images.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [project.images.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % project.images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <article className="group relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-[24px] px-4 py-10 sm:min-h-[760px] sm:rounded-[28px] sm:px-6 sm:py-12 md:min-h-[800px] md:px-8 lg:min-h-[560px] lg:flex-row lg:rounded-[32px] lg:px-0 lg:py-0">

            {/* Background Shape */}
            <img
                src={proimg}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute left-1/2 top-[38%] h-[45%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[35px] object-cover opacity-80 sm:top-[36%] sm:h-[48%] sm:w-[85%] md:h-[52%] md:w-[75%] lg:left-auto lg:top-1/2 lg:h-[90%] lg:w-[70%] lg:-translate-x-0 lg:rounded-[50px] ${reverse ? "lg:left-10 lg:scale-x-[-1]" : "lg:right-10"}`}
            />

            {/* Purple Glow */}
            <div className={`pointer-events-none absolute left-1/2 top-[35%] h-[35%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8A2BE2]/10 blur-[80px] sm:h-[40%] sm:w-[65%] md:w-[55%] lg:left-auto lg:top-1/2 lg:h-[70%] lg:w-[45%] lg:-translate-x-0 lg:blur-[100px] ${reverse ? "lg:left-[18%]" : "lg:right-[18%]"}`} />

            {/* Screenshot Card */}
            <div className={`pointer-events-none absolute left-1/2 top-[8%] z-30 h-[42%] w-[78%] -translate-x-1/2 rounded-[24px] border border-white/25 bg-white/[0.07] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[8px] sm:top-[7%] sm:h-[44%] sm:w-[72%] sm:rounded-[28px] sm:p-3 md:top-[6%] md:h-[46%] md:w-[62%] md:p-4 lg:left-auto lg:top-1/2 lg:h-[68%] lg:w-[34%] lg:-translate-x-0 lg:-translate-y-1/2 lg:rounded-[30px] ${reverse ? "lg:left-[7%]" : "lg:right-[7%]"}`}>

                <div className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px]">
                    {project.images.map((image, index) => (
                        <img
                            key={image}
                            src={image}
                            alt={`${project.name} screen ${index + 1}`}
                            className={`absolute inset-0 h-full w-full object-contain p-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-3 ${index === current ? "translate-y-0 scale-100 opacity-100" : index < current ? "-translate-y-8 scale-[0.96] opacity-0" : "translate-y-8 scale-[0.96] opacity-0"}`}
                        />
                    ))}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/[0.08]" />
                </div>

                {/* Navigation */}
                <div className={`absolute bottom-3 flex gap-2 sm:bottom-5 ${reverse ? "left-3 sm:left-5" : "right-3 sm:right-5"}`}>
                    <button
                        onClick={prevSlide}
                        className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black/30 hover:text-white sm:h-8 sm:w-8"
                        aria-label="Previous project image"
                    >
                        <ChevronLeft size={13} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black/30 hover:text-white sm:h-8 sm:w-8"
                        aria-label="Next project image"
                    >
                        <ChevronRight size={13} />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
                    {project.images.map((image, index) => (
                        <button
                            key={image}
                            onClick={() => setCurrent(index)}
                            className={`pointer-events-auto h-1 rounded-full transition-all duration-500 ${current === index ? "w-5 bg-white sm:w-6" : "w-1 bg-white/40"}`}
                            aria-label={`Show screen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Project Information Card */}
            <div className={`pointer-events-none absolute left-1/2 top-[54%] z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/20 bg-white/[0.10] px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[22px] sm:top-[55%] sm:w-[82%] sm:rounded-[22px] sm:px-6 sm:py-6 md:w-[72%] lg:left-auto lg:top-1/2 lg:w-[40%] lg:-translate-x-0 lg:-translate-y-1/2 lg:rounded-[22px] lg:px-6 lg:py-5 ${reverse ? "lg:right-[7%]" : "lg:left-[7%]"}`}>

                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />

                <div className="relative">
                    <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-white/50 sm:mb-3">
                        Featured Project
                    </p>

                    <h2 className="text-xl font-medium tracking-[-0.05em] text-white sm:text-2xl md:text-3xl lg:text-4xl">
                        {project.name}
                    </h2>

                    <p className="mt-2 text-[11px] leading-5 text-white/60 sm:mt-3 sm:text-xs md:text-sm">
                        {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-1 text-[7px] text-white/60 backdrop-blur-md sm:px-2.5 sm:text-[8px]"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <button className="pointer-events-auto mt-4 inline-flex items-center gap-2 text-[9px] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:text-white sm:mt-5 sm:text-[10px]">
                        View project
                        <span>↗</span>
                    </button>
                </div>
            </div>

            {/* Cyan Glow */}
            <div className={`pointer-events-none absolute left-1/2 top-[30%] z-10 h-[25%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[60px] sm:blur-[70px] lg:left-auto lg:top-1/2 lg:h-[45%] lg:w-[25%] lg:-translate-x-0 lg:blur-[80px] ${reverse ? "lg:left-[10%]" : "lg:right-[10%]"}`} />

        </article>
    );
}

export default Procards;