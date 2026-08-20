import { useState, useEffect, useRef } from "react";

export default function About() {
    const [cgpa, setCgpa] = useState(0);
    const cgpaRef = useRef(null);
    const animated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;

                    const start = 0;
                    const end = 9.14;
                    const duration = 1600;
                    const startTime = performance.now();

                    const tick = (now) => {
                        const t = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - t, 3);

                        setCgpa(+(start + (end - start) * eased).toFixed(2));

                        if (t < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );

        if (cgpaRef.current) observer.observe(cgpaRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="group bg-black px-6 py-20 text-white transition-colors duration-700 ease-out hover:bg-white hover:text-black md:px-16 md:py-32 lg:px-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">

                    <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-7 md:p-8">
                        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            About Vivek
                        </p>

                        <div>
                            <h3 className="mb-3 text-xl font-medium tracking-tight text-white transition-colors duration-700 group-hover:text-black md:text-2xl">
                                Full Stack Developer
                            </h3>

                            <p className="max-w-md text-sm leading-relaxed text-white/45 transition-colors duration-700 group-hover:text-black/45 md:text-base">
                                I work across frontend, backend and mobile development. I enjoy turning ideas into functional products and exploring how technology, interaction and design can work together.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={cgpaRef}
                        className="col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-5"
                    >
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            CGPA
                        </p>

                        <p className="text-4xl font-medium tracking-tight tabular-nums text-white transition-colors duration-700 group-hover:text-black md:text-5xl">
                            {cgpa.toFixed(2)}
                        </p>

                        <p className="mt-2 text-xs text-white/35 transition-colors duration-700 group-hover:text-black/35">
                            Integrated MCA
                        </p>
                    </div>

                    <div className="group/project col-span-1 flex cursor-pointer flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-5">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            Project
                        </p>

                        <div>
                            <h3 className="text-lg font-medium tracking-tight text-white transition-all duration-300 group-hover/project:translate-x-1 group-hover:text-white md:text-xl">
                                <span className="group-hover/project:text-white group-hover:text-black">
                                    RoyalWolf
                                </span>
                            </h3>

                            <p className="mt-1 text-sm text-white/40 transition-colors duration-700 group-hover:text-black/40">
                                Fashion Store · MERN
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-4">
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            Stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "Kotlin", "Firebase"].map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-white/55 transition-all duration-700 group-hover:bg-black/[0.05] group-hover:text-black/55"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-3">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            Code
                        </p>

                        <a
                            href="https://github.com/vivek84835V"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-white/70 transition-all duration-300 hover:translate-x-1 group-hover:text-black/70"
                        >
                            GitHub ↗
                        </a>
                    </div>

                    <div className="col-span-2 flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 ease-out group-hover:border-black/10 group-hover:bg-black/[0.04] md:col-span-5">
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors duration-700 group-hover:text-black/40">
                            Based in
                        </p>

                        <p className="text-lg font-medium tracking-tight text-white transition-colors duration-700 group-hover:text-black">
                            Maharashtra, India
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}