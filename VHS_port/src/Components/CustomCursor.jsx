"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const beeRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });

    const cursor = useRef({ x: 0, y: 0 });
    const bee = useRef({ x: 0, y: 0 });

    const targetAngle = useRef(0);
    const currentAngle = useRef(0);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let animationFrame;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            setVisible(true);

            const dx = e.movementX;
            const dy = e.movementY;

            if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
                targetAngle.current =
                    Math.atan2(dy, dx) * (180 / Math.PI);
            }
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        const handleMouseEnter = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            cursor.current.x = e.clientX;
            cursor.current.y = e.clientY;

            bee.current.x = e.clientX - 18;
            bee.current.y = e.clientY - 18;

            setVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        const lerp = (start, end, amount) => {
            return start + (end - start) * amount;
        };

        const angleLerp = (current, target, amount) => {
            let difference = target - current;

            while (difference > 180) difference -= 360;
            while (difference < -180) difference += 360;

            return current + difference * amount;
        };

        const animate = () => {
            /*
             * Small cursor
             * Very responsive.
             */
            cursor.current.x = lerp(
                cursor.current.x,
                mouse.current.x,
                0.32
            );

            cursor.current.y = lerp(
                cursor.current.y,
                mouse.current.y,
                0.32
            );

            /*
             * Bee has more delay.
             */
            bee.current.x = lerp(
                bee.current.x,
                mouse.current.x - 18,
                0.09
            );

            bee.current.y = lerp(
                bee.current.y,
                mouse.current.y - 18,
                0.09
            );

            /*
             * Smooth rotation.
             */
            currentAngle.current = angleLerp(
                currentAngle.current,
                targetAngle.current,
                0.10
            );

            /*
             * Small cursor.
             */
            if (cursorRef.current) {
                cursorRef.current.style.transform = `
                    translate3d(
                        ${cursor.current.x}px,
                        ${cursor.current.y}px,
                        0
                    )
                    rotate(${currentAngle.current}deg)
                `;
            }

            /*
             * Bee.
             */
            if (beeRef.current) {
                beeRef.current.style.transform = `
                    translate3d(
                        ${bee.current.x}px,
                        ${bee.current.y}px,
                        0
                    )
                    rotate(${currentAngle.current}deg)
                `;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
            document.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );

            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            <style>{`
                html,
                body,
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* =====================================================
                PRECISE CURSOR
            ===================================================== */}
            <div
                ref={cursorRef}
                className={`
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[99999]
                    transition-opacity
                    duration-200
                    ${visible ? "opacity-100" : "opacity-0"}
                `}
                style={{
                    transformOrigin: "1px 1px",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            >
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                >
                    <path
                        d="M1 1L10 5.5L1 10V1Z"
                        fill="white"
                        stroke="#8A2BE2"
                        strokeWidth="0.8"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* =====================================================
                ABSTRACT BEE / WING SYMBOL
            ===================================================== */}
            <div
                ref={beeRef}
                className={`
                    pointer-events-none
                    fixed
                    left-0
                    top-0
                    z-[99998]
                    transition-opacity
                    duration-300
                    ${visible ? "opacity-100" : "opacity-0"}
                `}
                style={{
                    transformOrigin: "center",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                >
                    {/* Left wing */}
                    <path
                        d="
                            M14 13
                            C10 8 5 8 5 12
                            C5 15 9 16 14 15
                        "
                        stroke="#8A2BE2"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />

                    {/* Right wing */}
                    <path
                        d="
                            M16 13
                            C20 8 25 8 25 12
                            C25 15 21 16 16 15
                        "
                        stroke="#8A2BE2"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />

                    {/* Center body */}
                    <path
                        d="
                            M15 10
                            C12.5 14 12.5 20 15 24
                            C17.5 20 17.5 14 15 10
                            Z
                        "
                        fill="#8A2BE2"
                    />

                    {/* Body highlight */}
                    <path
                        d="M13.5 15H16.5"
                        stroke="white"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        opacity="0.9"
                    />

                    <path
                        d="M13.5 18H16.5"
                        stroke="white"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        opacity="0.6"
                    />

                    {/* Tiny flight trail */}
                    <path
                        d="M7 23C9 25 11 26 13 26"
                        stroke="#8A2BE2"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeDasharray="1 2"
                        opacity="0.45"
                    />
                </svg>
            </div>
        </>
    );
}