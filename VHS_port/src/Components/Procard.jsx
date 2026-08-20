import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import proimg from "../assets/bg pro.svg";

function Procard({ project, reverse = false }) {
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
        <article className="group relative flex min-h-[560px] w-full items-center justify-center overflow-hidden rounded-[32px]">

            <img
                src={proimg}
                alt=""
                className={`pointer-events-none absolute top-1/2 h-[90%] w-[70%] -translate-y-1/2 rounded-[50px] object-cover object-right ${reverse ? "left-10 scale-x-[-1]" : "right-10"}`}
            />

            <div
                className={`pointer-events-none absolute top-1/2 h-[70%] w-[45%] -translate-y-1/2 rounded-full bg-[#8A2BE2]/10 blur-[100px] ${reverse ? "left-[18%]" : "right-[18%]"}`}
            />

            <div
                className={`pointer-events-none absolute top-1/2 z-20 w-[40%] -translate-y-1/2 rounded-[22px] border border-white/20 bg-white/[0.10] px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[22px] sm:px-7 sm:py-6 ${reverse ? "right-[7%]" : "left-[7%]"}`}
            >
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />

                <div className="relative">
                    <p className="mb-3 text-[8px] uppercase tracking-[0.3em] text-white/50">
                        Featured Project
                    </p>

                    <h2 className="text-2xl font-medium tracking-[-0.05em] text-white sm:text-3xl lg:text-4xl">
                        {project.name}
                    </h2>

                    <p className="mt-3 max-w-sm text-xs leading-5 text-white/60 sm:text-sm">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[8px] text-white/60 backdrop-blur-md"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <button className="pointer-events-auto mt-5 inline-flex items-center gap-2 text-[10px] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:text-white">
                        View project
                        <span>↗</span>
                    </button>
                </div>
            </div>

            <div
                className={`pointer-events-none absolute top-1/2 z-30 h-[68%] w-[34%] -translate-y-1/2 rounded-[30px] border border-white/25 bg-white/[0.07] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[8px] sm:p-4 ${reverse ? "left-[7%]" : "right-[7%]"}`}
            >
                <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                    {project.images.map((image, index) => (
                        <img
                            key={image}
                            src={image}
                            alt={`${project.name} screen ${index + 1}`}
                            className={`absolute inset-0 h-full w-full object-contain p-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${index === current ? "translate-y-0 scale-100 opacity-100" : index < current ? "-translate-y-8 scale-[0.96] opacity-0" : "translate-y-8 scale-[0.96] opacity-0"}`}
                        />
                    ))}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/[0.08]" />
                </div>

                <div className={`absolute bottom-5 flex gap-2 ${reverse ? "left-5" : "right-5"}`}>
                    <button
                        onClick={prevSlide}
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black/30 hover:text-white"
                    >
                        <ChevronLeft size={14} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black/30 hover:text-white"
                    >
                        <ChevronRight size={14} />
                    </button>
                </div>

                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((image, index) => (
                        <button
                            key={image}
                            onClick={() => setCurrent(index)}
                            className={`pointer-events-auto h-1 rounded-full transition-all duration-500 ${current === index ? "w-6 bg-white" : "w-1 bg-white/40"}`}
                            aria-label={`Show screen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div
                className={`pointer-events-none absolute top-1/2 z-10 h-[45%] w-[25%] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px] ${reverse ? "left-[10%]" : "right-[10%]"}`}
            />
        </article>
    );
}

export default Procard;