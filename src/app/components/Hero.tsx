import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
    FiArrowDown,
    FiArrowRight,
    FiCode,
    FiDatabase,
    FiLayers,
} from "react-icons/fi";

const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
];

const highlightCards = [
    {
        title: "Frontend Development",
        description:
            "Building responsive and accessible interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
        icon: FiCode,
    },
    {
        title: "Backend & APIs",
        description:
            "Developing practical APIs and backend services with Node.js, Express, databases, and RESTful architecture.",
        icon: FiDatabase,
    },
    {
        title: "Practical Projects",
        description:
            "Turning ideas into useful digital products through clean design, structured code, and continuous learning.",
        icon: FiLayers,
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#090014] text-white"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(111,42,184,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.12),transparent_30%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-10">
                <div className="grid w-full gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    {/* Left content */}
                    <div>
                        <p className="mb-8 text-lg font-semibold uppercase tracking-[0.35em] text-violet-300">
                            Hi, I am
                        </p>

                        <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl">
                            Mansur
                            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                                Islam
                            </span>
                        </h1>

                        <h2 className="mt-8 text-2xl font-semibold text-slate-200 md:text-3xl">
                            Aspiring Full Stack Web Developer
                        </h2>

                        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                            I create modern, responsive, and user-friendly web applications. I
                            enjoy working with Next.js, React, Tailwind CSS, and backend
                            technologies to turn ideas into practical digital solutions.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(168,85,247,0.45)] hover:backdrop-blur-xl"
                            >
                                View My Work
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="#contact"
                                className="inline-flex items-center rounded-full border border-violet-400/50 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-violet-300/40 hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Highlight cards */}
                    <div className="space-y-5 lg:pl-8">
                        {highlightCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <article
                                    key={card.title}
                                    className={`rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.1] hover:shadow-[0_18px_50px_rgba(139,92,246,0.2)] ${index === 1 ? "lg:ml-10" : ""
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl border border-violet-300/20 bg-violet-500/20 p-3 text-xl text-violet-200">
                                            <Icon />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-white">
                                                {card.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Link
                href="#about"
                className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition-colors hover:text-violet-300 sm:flex"
            >
                <span>Scroll to explore</span>
                <FiArrowDown className="animate-bounce text-base" />
            </Link>
        </section>
    );
}