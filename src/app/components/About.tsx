"use client";

import Image from "next/image";
import { useState } from "react";

const skills = [
    {
        title: "Frontend Development",
        text: "React.js, Next.js, TypeScript, Tailwind CSS, responsive layouts, reusable components, and clean UI implementation.",
    },
    {
        title: "Backend Development",
        text: "Node.js, Express.js, REST API development, authentication basics, server-side logic, and database integration.",
    },
    {
        title: "Database & Tools",
        text: "MongoDB, PostgreSQL, Git, GitHub, Postman, debugging workflows, API testing, and project deployment basics.",
    },
    {
        title: "AI & Data Science",
        text: "Worked on Machine Learning projects with Python, including diabetes prediction and ASD detection, with hands-on experience in data preprocessing, model training, evaluation, analysis, and visualization.",
    },
    {
        title: "Problem Solving",
        text: "Building real projects, learning by practice, improving code quality, and turning ideas into useful web applications.",
    },
];

const education = [
    {
        year: "2022 - 2026",
        title: "B.Sc. in Computer Science & Engineering",
        place: "American International University-Bangladesh (AIUB)",
    },
    {
        year: "2020",
        title: "Higher Secondary Certificate",
        place: "Abdul Kadir Molla City College",
    },
    {
        year: "2018",
        title: "Secondary School Certificate",
        place: "Milestone School & College",
    },
];

export default function About() {
    const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");

    return (
        <section
            id="about"
            className="scroll-mt-24 border-y border-white/5 bg-[#050008] px-6 py-20 text-white sm:py-24 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 block text-center lg:hidden">

                    <h2 className="text-5xl font-bold">About Me</h2>
                </div>

                <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div className="flex justify-center lg:sticky lg:top-28">
                        <div className="w-full max-w-sm overflow-hidden rounded-2xl  p-2 shadow-[0_22px_70px_rgba(124,58,237,0.18)] sm:max-w-md">
                            <div className="group relative overflow-hidden rounded-xl p-2 shadow-[0_20px_60px_rgba(124,58,237,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/50 hover:bg-white/[0.08] hover:shadow-[0_25px_80px_rgba(139,92,246,0.3)]">
                                <Image
                                    src="/Mansur.jpg"
                                    alt="Md Mansur Islam"
                                    width={520}
                                    height={680}
                                    className="h-[430px] w-full rounded-lg object-cover object-center transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110 sm:h-[560px] lg:h-[650px]"
                                    sizes="(max-width: 768px) 100vw, 420px"
                                />

                                {/* Liquid-glass reflection */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 -translate-x-[140%] bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-[140%]"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="hidden lg:block">
                            <h2 className="mb-6 text-6xl font-bold tracking-tight">
                                About Me
                            </h2>
                        </div>

                        <div className="space-y-5 leading-8 text-slate-400">
                            <p>
                                I am Md Mansur Islam, an aspiring full-stack web developer who
                                enjoys building modern, responsive, and practical web
                                applications. I focus on creating interfaces that look clean,
                                feel smooth, and solve real problems.
                            </p>

                            <p>
                                I work with technologies like Next.js, React, TypeScript,
                                Tailwind CSS, Node.js, and databases. I am especially interested
                                in improving both frontend experience and backend structure so
                                the final product feels complete, reliable, and easy to use.
                            </p>

                            <p>
                                My goal is to keep growing through real-world projects, better
                                code practices, and consistent learning. I want my portfolio to
                                represent not only what I know, but also how seriously I care
                                about building useful digital products.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-8 border-b border-white/10">
                            <button
                                onClick={() => setActiveTab("skills")}
                                className={`border-b-2 pb-3 text-base font-semibold transition duration-300 sm:text-lg ${activeTab === "skills"
                                    ? "border-violet-300 text-white"
                                    : "border-transparent text-slate-500 hover:text-slate-300"
                                    }`}
                            >
                                Skills
                            </button>

                            <button
                                onClick={() => setActiveTab("education")}
                                className={`border-b-2 pb-3 text-base font-semibold transition duration-300 sm:text-lg ${activeTab === "education"
                                    ? "border-violet-300 text-white"
                                    : "border-transparent text-slate-500 hover:text-slate-300"
                                    }`}
                            >
                                Education
                            </button>
                        </div>

                        <div className="mt-8 space-y-5">
                            {activeTab === "skills" &&
                                skills.map((skill) => (
                                    <div
                                        key={skill.title}
                                        className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-violet-300/40 hover:bg-white/[0.07]"
                                    >
                                        <h3 className="font-semibold text-violet-300">
                                            {skill.title}
                                        </h3>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {skill.text}
                                        </p>
                                    </div>
                                ))}

                            {activeTab === "education" &&
                                education.map((item) => (
                                    <div
                                        key={item.year}
                                        className="rounded-xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-violet-300/40 hover:bg-white/[0.07]"
                                    >
                                        <p className="font-semibold text-violet-300">
                                            {item.year}
                                        </p>
                                        <h3 className="mt-3 font-medium text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {item.place}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}