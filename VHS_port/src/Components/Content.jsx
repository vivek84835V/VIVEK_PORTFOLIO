import React, { useState } from "react";

const services = [
    {
        number: "01",
        title: "React Native Development",
        description:
            "Build cross-platform mobile applications with React Native.",
        tags: ["React Native", "Mobile", "Android"],
    },
    {
        number: "02",
        title: "Firebase Integration",
        description:
            "Integrate Firebase services into modern mobile applications.",
        tags: ["Firebase", "Auth", "Database"],
    },
    {
        number: "03",
        title: "Backend with Node.js",
        description:
            "Build powerful Node.js backend services and APIs.",
        tags: ["Node.js", "Express", "API"],
    },
];

function Content() {
    const [active, setActive] = useState(null);

    const marqueeItems = [...services, ...services];

    return (
        <section className="overflow-hidden bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
                            What I do
                        </p>

                        <h2 className="text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
                            Services
                        </h2>
                    </div>

                    <p className="hidden max-w-xs text-right text-xs leading-5 text-white/30 md:block">
                        A selection of technologies and solutions I use to turn
                        ideas into digital products.
                    </p>
                </div>
            </div>

            <div
                className="relative w-full overflow-hidden py-10"
                onMouseEnter={() => setActive("pause")}
                onMouseLeave={() => setActive(null)}
            >
                <div
                    className={`flex w-max gap-10 animate-marquee ${active === "pause"
                        ? "[animation-play-state:paused]"
                        : ""
                        }`}
                >
                    {marqueeItems.map((service, index) => {
                        const originalIndex = index % services.length;
                        const isActive = active === originalIndex;

                        return (
                            <article
                                key={`${service.number}-${index}`}
                                onMouseEnter={() => setActive(originalIndex)}
                                onMouseLeave={() => setActive(null)}
                                className={`group relative min-h-[400px] w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-[28px] border p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[390px] md:p-9 ${isActive
                                    ? "scale-[1.02] border-white bg-white shadow-[0_25px_80px_rgba(255,255,255,0.10)]"
                                    : "border-white/10 bg-white/[0.025]"
                                    }`}
                            >
                                <div
                                    className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px] transition-all duration-700 ${isActive
                                        ? "scale-125 bg-[#8A2BE2]/20 opacity-100"
                                        : "scale-100 bg-[#8A2BE2]/10 opacity-0"
                                        }`}
                                />

                                <div
                                    className={`pointer-events-none absolute -bottom-32 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-[100px] transition-all duration-700 ${isActive
                                        ? "scale-125 bg-violet-500/15 opacity-100"
                                        : "scale-100 bg-violet-500/10 opacity-0"
                                        }`}
                                />

                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <span
                                            className={`font-mono text-[10px] tracking-[0.25em] transition-colors duration-700 ${isActive
                                                ? "text-black/40"
                                                : "text-white/30"
                                                }`}
                                        >
                                            {service.number}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-700 ${isActive
                                                ? "rotate-45 border-black/10 bg-black text-white"
                                                : "border-white/10 bg-white/[0.02] text-white/30"
                                                }`}
                                        >
                                            ↗
                                        </span>
                                    </div>

                                    <div>
                                        <h3
                                            className={`max-w-sm text-3xl font-medium leading-[0.95] tracking-[-0.05em] transition-all duration-700 md:text-4xl ${isActive
                                                ? "-translate-y-1 text-black"
                                                : "text-white"
                                                }`}
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            className={`mt-6 max-w-sm text-sm leading-6 transition-colors duration-700 ${isActive
                                                ? "text-black/55"
                                                : "text-white/40"
                                                }`}
                                        >
                                            {service.description}
                                        </p>

                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`rounded-full border px-3 py-1.5 font-mono text-[9px] transition-all duration-700 ${isActive
                                                        ? "border-black/10 bg-black/[0.04] text-black/55"
                                                        : "border-white/10 bg-white/[0.04] text-white/35"
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`h-px transition-all duration-700 ${isActive
                                                ? "w-16 bg-[#8A2BE2]"
                                                : "w-8 bg-white/20"
                                                }`}
                                        />

                                        <span
                                            className={`font-mono text-[9px] uppercase tracking-[0.25em] transition-colors duration-700 ${isActive
                                                ? "text-black/50"
                                                : "text-white/25"
                                                }`}
                                        >
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div className="mx-auto mt-6 flex max-w-7xl justify-between px-6 md:px-10 lg:px-16">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                    03 Services
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                    Hover to pause
                </span>
            </div>
        </section>
    );
}

export default Content;