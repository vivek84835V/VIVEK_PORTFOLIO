import React, { useEffect, useRef, useState } from "react";
import {
    Bot,
    User,
    X,
    SendHorizonal,
    Sparkles,
} from "lucide-react";
import UserHook from "../Hooks/UserHook";
import { UseMicrophone } from "../Hooks/UseMicrophoneHook";
import UseScribeHook from "../Hooks/UseScribeHook";

function Assistant({ onClose }) {

    const [input, setInput] = useState("");
    const [message, setmessage] = useState([{
        role: "assistant",
        content:
            "👋 Hi! I'm Vivek's AI Assistant. Ask me anything about Vivek's experience, projects, technical skills, resume, or career.",
    },
    ])

    const { loading, handleUser, handleTextToSpeak } = UserHook();

    const HandleEvent = (e) => {
        const inputvalue = e.target.value
        setInput(inputvalue)
        console.log("HandleEvent message:", message);
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userMessage = input;

        setmessage((prev) => [...prev, {
            role: 'user',
            content: userMessage
        }])

        setInput("");

        const res = await handleUser(userMessage);
        const getaudiores = await HandlePlayAudio(res)
        console.log(getaudiores, res)
        setmessage((prev) => [...prev, {
            role: 'assistant',
            content: res
        }]);
    }

    const audioRef = useRef(null);
    const HandlePlayAudio = async (text) => {
        try {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            const blob = await handleTextToSpeak(text);
            const url = URL.createObjectURL(blob)
            const audio = new Audio(url);

            audioRef.current = audio;

            audio.onended = () => {
                URL.revokeObjectURL(url)
                audioRef.current = null;
            }

            await audio.play();
        } catch (err) {
            console.log("something wrong in play audio:-", err)
        }
    }

    // const { isrecording, startRecording, stopRecording, error } = UseMicrophone();
    const { isListening, startListening, stopListening, partialTranscript } = UseScribeHook({
        onTranscript: (text) => {
            setInput(text)
        }
    });

    useEffect(() => {
        if (!partialTranscript) return;

        console.log("Partial:", partialTranscript);

    }, [partialTranscript]);

    const HandleMicButton = () => {
        if (isListening) {
            stopListening();
            console.log("listning stop")
        } else {
            startListening();
            console.log("listning start")
        }
    }


    return (
        <div className="h-full p-4">
            <div className="h-full rounded-3xl bg-black border border-slate-800 shadow-2xl flex flex-col text-white overflow-hidden">

                {/* Header */}
                <div className="border-b border-slate-800 p-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center">
                            <Bot size={20} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">
                                Vivek AI
                            </h2>

                            <p className="text-xs text-slate-400">
                                Portfolio Assistant
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-2 text-green-400 text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Online
                        </div>

                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 hover:bg-slate-800 transition"
                        >
                            <X size={18} />
                        </button>

                    </div>

                </div>

                {/* Quick Suggestions */}
                <div className="border-b border-slate-800 p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-violet-400" size={18} />
                        <h3 className="font-medium">Quick Questions</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button className="rounded-full bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs transition">
                            About Me
                        </button>

                        <button className="rounded-full bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs transition">
                            Projects
                        </button>

                        <button className="rounded-full bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs transition">
                            Skills
                        </button>

                        <button className="rounded-full bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs transition">
                            Resume
                        </button>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-5">

                    {/* AI */}
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                            <Bot size={16} />
                        </div>

                        <div className="max-w-[80%] rounded-2xl bg-slate-800 px-4 py-3 text-sm leading-6">
                            Vivek has built several full-stack applications:

                            <ul className="list-disc ml-5 mt-3 space-y-1">
                                <li>🚖 Apni Rikshaw</li>
                                <li>🎓 College Connect</li>
                                <li>❤️ Donation Platform</li>
                                <li>📊 Excel Analytics Dashboard</li>
                            </ul>
                        </div>
                    </div>

                    {message.map((msg, index) => {
                        return msg.role === "assistant" ? (
                            <div key={index} className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                                    <Bot size={16} />
                                </div>

                                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-4 py-3 text-sm leading-6">
                                    {msg.content}
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="flex justify-end gap-3">

                                <div className="max-w-[80%] rounded-2xl bg-violet-600 px-4 py-3 text-sm">
                                    {msg.content}
                                </div>

                                <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                                    <User size={16} />
                                </div>

                            </div>
                        )
                    })}
                    {loading && (
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
                                <Bot size={16} />
                            </div>

                            <div className="rounded-2xl bg-slate-800 px-5 py-4">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="border-t border-slate-800 p-4">
                    <div className="flex items-center gap-3">
                        <input
                            disabled={loading}
                            onChange={HandleEvent}
                            type="text"
                            value={input}
                            placeholder="Ask me anything..."
                            className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm outline-none focus:border-cyan-500"
                        />

                        <button
                            onClick={HandleMicButton}>
                            {isListening ? (<><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <defs>
                                    <linearGradient id="micGrad" x1="4.25" y1=".068" x2="8.602" y2="15.321" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0fafff" />
                                        <stop offset="1" stopColor="#cc23d1" />
                                    </linearGradient>

                                    <linearGradient id="baseGrad" x1="8" y1="7.313" x2="8" y2="15" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#cad2d9" />
                                        <stop offset="1" stopColor="#70777d" />
                                    </linearGradient>

                                    <linearGradient id="slashGrad" x1="2" y1="2" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#ff5f6d" />
                                        <stop offset="1" stopColor="#d00000" />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#micGrad)"
                                    d="M8 2a2.5 2.5 0 0 0-2.5 2.5V8a2.5 2.5 0 0 0 5 0V4.5A2.5 2.5 0 0 0 8 2z" />
                                <path
                                    fill="url(#baseGrad)"
                                    d="M3.733 7.313A.733.733 0 0 0 3 8.046a5 5 0 0 0 4.267 4.946v1.275a.733.733 0 0 0 1.466 0v-1.275A5 5 0 0 0 13 8.046a.733.733 0 1 0-1.467 0a3.533 3.533 0 0 1-.33 1.49L9.94 8.273a2.5 2.5 0 0 1-3.213-3.214L5.47 3.802a5 5 0 0 0-.27 4.244a3.53 3.53 0 0 0 4.756 3.285l1.244 1.244a5.1 5.1 0 0 1-2.467.418v1.274a.733.733 0 0 1-1.466 0v-1.275A5 5 0 0 1 3 8.046a.733.733 0 0 1 .733-.733z" />
                                <path
                                    fill="url(#slashGrad)"
                                    d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l11 11a.75.75 0 1 0 1.06-1.06z" />
                            </svg>
                            </>) : (<><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <g fill="none">
                                    <path fill="url(#SVGFwSxkd4F)" d="M3.733 7.313A.733.733 0 0 0 3 8.046a5 5 0 0 0 4.267 4.946v1.275a.733.733 0 0 0 1.466 0v-1.275A5 5 0 0 0 13 8.046a.733.733 0 1 0-1.467 0a3.533 3.533 0 1 1-7.066 0a.733.733 0 0 0-.734-.733" />
                                    <path fill="url(#SVG8MXZScCE)" d="M3.733 7.313A.733.733 0 0 0 3 8.046a5 5 0 0 0 4.267 4.946v1.275a.733.733 0 0 0 1.466 0v-1.275A5 5 0 0 0 13 8.046a.733.733 0 1 0-1.467 0a3.533 3.533 0 1 1-7.066 0a.733.733 0 0 0-.734-.733" />
                                    <path fill="url(#SVGGdCRMb5d)" d="M8 2a2.5 2.5 0 0 0-2.5 2.5V8a2.5 2.5 0 0 0 5 0V4.5A2.5 2.5 0 0 0 8 2" />
                                    <defs>
                                        <linearGradient id="SVGFwSxkd4F" x1="8" x2="8" y1="7.313" y2="15" gradientUnits="userSpaceOnUse">
                                            <stop />
                                            <stop offset="1" stopColor="#666" />
                                        </linearGradient>
                                        <linearGradient id="SVG8MXZScCE" x1="3" x2="7.757" y1="4.076" y2="15.506" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#cad2d9" />
                                            <stop offset="1" stopColor="#70777d" />
                                        </linearGradient>
                                        <linearGradient id="SVGGdCRMb5d" x1="4.25" x2="8.602" y1=".068" y2="15.321" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0fafff" />
                                            <stop offset="1" stopColor="#cc23d1" />
                                        </linearGradient>
                                    </defs>
                                </g>
                            </svg>
                            </>)}
                        </button>

                        <button
                            disabled={loading}
                            onClick={HandleSubmit}
                            className="h-11 w-11 rounded-xl bg-violet-600 hover:bg-violet-500 flex items-center justify-center transition"
                        >
                            <SendHorizonal size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assistant;