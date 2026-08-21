import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

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
    const formRef = useRef(null)
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: "vivek.hemant.shimpi7@gmail.com",
                },
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            );

            alert("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Email sending failed:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-32"
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" />

            <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-5xl">
                <div className="mb-16 grid grid-cols-1 gap-10 sm:gap-12 md:mb-20 lg:grid-cols-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex flex-col justify-between lg:col-span-5">
                        <div>
                            <h2 className="mb-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl md:mb-8 md:text-6xl">
                                Let&apos;s create
                                <br />
                                <span className="font-light text-gray-500">
                                    the next big thing.
                                </span>
                            </h2>

                            <p className="max-w-sm text-base font-light leading-relaxed text-gray-400 sm:text-lg">
                                Focused on building refined digital experiences
                                where every pixel serves a purpose.
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-0">
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
                                Direct Inquiry
                            </p>

                            <a
                                href="mailto:vivek.hemant.shimpi7@gmail.com"
                                className="block break-all text-sm font-light text-white transition-colors duration-500 hover:text-purple-400 sm:text-base sm:break-normal"
                            >
                                vivek.hemant.shimpi7@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="contents"
                        >
                            <SleekCard className="rounded-xl p-5 sm:rounded-2xl sm:p-6">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Vivek Shimpi"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full bg-transparent text-base font-light text-white outline-none placeholder:text-[#333] sm:text-lg"
                                />
                            </SleekCard>

                            <SleekCard className="rounded-xl p-5 sm:rounded-2xl sm:p-6">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="hello@work.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full bg-transparent text-base font-light text-white outline-none placeholder:text-[#333] sm:text-lg"
                                />
                            </SleekCard>

                            <SleekCard className="rounded-xl p-5 sm:col-span-2 sm:rounded-2xl sm:p-6">
                                <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-500">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="What's on your mind?"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    required
                                    className="relative z-10 w-full resize-none bg-transparent text-base font-light text-white outline-none placeholder:text-[#333] sm:text-lg"
                                />
                            </SleekCard>

                            <button
                                type="submit"
                                className="group relative h-14 overflow-hidden rounded-xl bg-white transition-all duration-200 active:scale-[0.98] sm:col-span-2 sm:h-16 sm:rounded-2xl"
                            >
                                <div className="absolute inset-0 translate-y-full bg-purple-600 transition-transform duration-500 group-hover:translate-y-0" />

                                <span className="relative z-10 text-xs font-bold uppercase tracking-tight text-black transition-colors duration-500 group-hover:text-white sm:text-sm">
                                    Send Inquiry
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex w-full items-center justify-center border-t border-white/5 pt-8 sm:pt-12">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-700 sm:text-[10px]">
                            Design & Development
                        </div>

                        <div className="font-mono text-[10px] tracking-tighter text-gray-500 sm:text-xs">
                            © {new Date().getFullYear()} — VIVEK SHIMPI
                        </div>

                        <a
                            href=""
                            className="mt-1 text-[9px] uppercase tracking-[0.15em] text-gray-700 transition-colors duration-300 hover:text-purple-500 sm:text-[10px] sm:tracking-[0.2em]"
                        >
                            Built with{" "}
                            <span className="text-purple-500">
                                Vivek AI
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;