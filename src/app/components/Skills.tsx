import {
    Brain,
    CodeXml,
    Database,
    Server,
    ShieldCheck,
    Wrench,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type SkillGroup = {
    title: string;
    description: string;
    skills: string[];
    icon: LucideIcon;
    iconStyle: string;
};

const skillGroups: SkillGroup[] = [
    {
        title: "Frontend Development",
        description:
            "Creating responsive, reusable, and user-friendly web interfaces.",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
        ],
        icon: CodeXml,
        iconStyle:
            "border-violet-400/20 bg-violet-500/10 text-violet-300",
    },
    {
        title: "Backend & APIs",
        description:
            "Building modular backend services and structured REST APIs.",
        skills: [
            "NestJS",
            "Node.js",
            "REST APIs",
            "TypeORM",
            "DTO Validation",
            "API Integration",
        ],
        icon: Server,
        iconStyle: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
    },
    {
        title: "Databases",
        description:
            "Working with relational and document databases for application data.",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "Database Design",
            "Data Relationships",
            "CRUD Operations",
        ],
        icon: Database,
        iconStyle:
            "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    },
    {
        title: "Authentication & Security",
        description:
            "Implementing secure authentication and protected backend resources.",
        skills: [
            "JWT",
            "Refresh Tokens",
            "HTTP-only Cookies",
            "bcrypt",
            "Route Guards",
            "Authorization",
        ],
        icon: ShieldCheck,
        iconStyle: "border-rose-400/20 bg-rose-500/10 text-rose-300",
    },
    {
        title: "AI & Machine Learning",
        description:
            "Developing prediction systems and evaluating machine learning models.",
        skills: [
            "Python",
            "Machine Learning",
            "Classification",
            "Data Preprocessing",
            "Feature Selection",
            "Model Evaluation",
            "Data Visualization",
        ],
        icon: Brain,
        iconStyle: "border-amber-400/20 bg-amber-500/10 text-amber-300",
    },
    {
        title: "Tools & Workflow",
        description:
            "Using modern development tools to build, test, and deploy projects.",
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "Vercel",
            "VS Code",
            "Responsive Testing",
        ],
        icon: Wrench,
        iconStyle: "border-blue-400/20 bg-blue-500/10 text-blue-300",
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-24 bg-[#08090e] px-6 py-20 text-white sm:py-24 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                    <p className="mb-3 text-sm font-semibold uppercase text-violet-300">
                        Technical Expertise
                    </p>

                    <h2 className="text-4xl font-bold sm:text-5xl">
                        Skills & Technologies
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                        Technologies and development practices I use to build responsive
                        web applications, secure backend systems, and machine learning
                        solutions.
                    </p>
                </div>

                {/* Skill groups */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <article
                                key={group.title}
                                className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_24px_70px_rgba(124,58,237,0.15)]"
                            >
                                <div
                                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border ${group.iconStyle}`}
                                >
                                    <Icon size={23} aria-hidden="true" />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-white">
                                    {group.title}
                                </h3>

                                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                                    {group.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:text-white"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}