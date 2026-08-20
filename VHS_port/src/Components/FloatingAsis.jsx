import React, { useState } from "react";
import Assistant from "./Assistant";
import { Bot } from "lucide-react";

function FloatingAsis() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative z-[9999]">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="fixed bottom-8 right-8 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-violet-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:shadow-violet-500/40"
                >
                    <Bot size={28} />
                </button>
            )}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
                />
            )}

            <div
                className={`fixed right-4 top-4 bottom-4 z-[9999] w-[calc(100%-32px)] rounded-3xl bg-violet-950/40 shadow-2xl transition-transform duration-300 ease-in-out sm:w-[420px] ${open
                    ? "translate-x-0"
                    : "translate-x-[110%]"
                    }`}
            >
                <Assistant onClose={() => setOpen(false)} />
            </div>
        </div>
    );
}

export default FloatingAsis;