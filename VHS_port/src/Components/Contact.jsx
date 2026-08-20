import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const PURPLE_LIGHT = "132, 0, 255";

function SleekCard({ children, className = "" }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        if (!el) return;

        const onMove = (e) => {
            const rect = el.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX =
                ((y - rect.height / 2) / (rect.height / 2)) * -2;

            const rotateY =
                ((x - rect.width / 2) / (rect.width / 2)) * 2;

            el.style.setProperty("--x", `${x}px`);
            el.style.setProperty("--y", `${y}px`);

            gsap.to(el, {
                rotateX,
                rotateY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        const onLeave = () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 1,
                ease: "expo.out",
            });
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`sleek-card relative overflow-hidden perspective-[1000px] transition-all duration-700 ease-out ${className}`}
        >
            {children}
        </div>
    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;

        if (!grid) return;

        const cards = grid.querySelectorAll(".sleek-card");

        const onMouseMove = (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--x", `${x}px`);
                card.style.setProperty("--y", `${y}px`);
            });
        };

        grid.addEventListener("mousemove", onMouseMove);

        return () => {
            grid.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Inquiry Submitted:", formData);

        alert("Message sent to vivek.hemant.shimpi7@gmail.com!");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <footer
            id="contact"
            className="relative overflow-hidden text-white md:py-32 bg-black"
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" />

            <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 mx-auto max-w-5xl">
                <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12">

                    <div className="flex flex-col justify-between lg:col-span-5">
                        <div>
                            <h2 className="mb-8 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-6xl">
                                Let&apos;s create
                                <br />

                                <span className="font-light text-gray-500">
                                    the next big thing.
                                </span>
                            </h2>

                            <p className="max-w-sm text-lg font-light leading-relaxed text-gray-400">
                                Focused on building refined digital
                                experiences where every pixel serves a
                                purpose.
                            </p>
                        </div>

                        <div className="mt-12 lg:mt-0">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-600">
                                Direct Inquiry
                            </p>

                            <a
                                href="mailto:vivek.hemant.shimpi7@gmail.com"
                                className="text-base font-light text-white transition-colors duration-500 hover:text-purple-400"
                            >
                                vivek.hemant.shimpi7@gmail.com
                            </a>
                        </div>
                    </div>

                    <div
                        ref={gridRef}
                        className="grid grid-cols-2 gap-4 lg:col-span-7"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="contents"
                        >
                            <SleekCard className="col-span-2 rounded-2xl p-6 md:col-span-1">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Vivek Shimpi"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-[#333]"
                                />
                            </SleekCard>

                            <SleekCard className="col-span-2 rounded-2xl p-6 md:col-span-1">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="hello@work.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-[#333]"
                                />
                            </SleekCard>

                            <SleekCard className="col-span-2 rounded-2xl p-6">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Message
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="What's on your mind?"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full resize-none bg-transparent text-lg font-light text-white outline-none placeholder:text-[#333]"
                                />
                            </SleekCard>

                            <button
                                type="submit"
                                className="group relative col-span-2 h-16 overflow-hidden rounded-2xl bg-white transition-all duration-200 active:scale-[0.98]"
                            >
                                <div className="absolute inset-0 translate-y-full bg-purple-600 transition-transform duration-500 group-hover:translate-y-0" />

                                <span className="relative z-10 text-sm font-bold uppercase tracking-tight text-black transition-colors duration-500 group-hover:text-white">
                                    Send Inquiry
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center border-t border-white/5 pt-12">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700">
                            Design & Development
                        </div>

                        <div className="font-mono text-xs tracking-tighter text-gray-500">
                            © {new Date().getFullYear()} — VIVEK SHIMPI
                        </div>

                        <a
                            href=""
                            className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-700 transition-colors duration-300 hover:text-purple-500"
                        >
                            Built with{" "}
                            <span className="text-purple-500 transition-colors duration-300 hover:text-purple-400">
                                Vivek AI
                            </span>
                        </a>
                    </div>
                </div>

            </div>

            <style>{`
                .sleek-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transform-style: preserve-3d;
                    will-change: transform;
                }

                .sleek-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        600px circle at var(--x) var(--y),
                        rgba(${PURPLE_LIGHT}, 0.2) 0%,
                        transparent 40%
                    );
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                .sleek-card:hover::before {
                    opacity: 1;
                }
            `}</style>
        </footer>
    );
}

export default Contact;