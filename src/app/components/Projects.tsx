import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
};

const projects: Project[] = [
    {
        title: "Job Tracker",
        category: "Full-Stack Web Application",
        description:
            "Built a responsive job application tracking platform that helps users organize opportunities across stages such as Wish List, Applied, Interviewing, and Offer. Users can add and manage applications with company details, salary, job links, tags, descriptions, and personal notes.",
        image: "/Job.png",
        technologies: [
            "Nest.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Zod",
            "Shadcn UI",
            "MongoDB",
            "Mongoose",
            "Better Auth",


        ],
        githubUrl: "https://github.com/Mansur550/Job-Application-Tracker",
        liveUrl: "https://job-application-tracker-rho-silk.vercel.app/",
    },
    {
        title: "UniShare – University Resource Sharing Platform",
        category: "Full-Stack Web Application",
        description:
            "Built a full-stack platform that helps university students discover, browse, and download academic resources by category. Implemented resource listing and detail pages, file download functionality, moderator feedback, form validation, and API-driven workflows using a Next.js frontend and NestJS backend.",
        image: "/uni_Share.png",
        technologies: [
            "Next.js",
            "React",
            "NestJS",
            "PostgreSQL",
            "TypeORM",
            "Axios",
            "Zod",
            "class-validator",
            "class-transformer",
        ],
        githubUrl: "https://github.com/Mansur550/UniShare",
        liveUrl: "",
    },
    {
        title: "MovieFlix",
        category: "Frontend Web Application",
        description:
            "Built a responsive movie discovery application using React and the TMDB API. Users can browse trending movies and search for titles in real time, with debounced search, dynamic results, loading states, error handling, and reusable UI components.",
        image: "/Movie.png",
        technologies: [
            "React",
            "JavaScript",
            "TMDB API",
            "CSS",
        ],
        githubUrl: "https://github.com/Mansur550/MovieSite",
        liveUrl: "",
    },
    {
        title: "Secure NestJS Authentication System",
        category: "Backend Authentication API",
        description:
            "Built a secure and modular authentication backend with NestJS, featuring user registration and login, JWT access and refresh tokens, HTTP-only cookie storage, protected routes with custom guards, bcrypt password hashing, and user CRUD operations. Integrated PostgreSQL with TypeORM and added DTO validation, exception handling, and environment-based configuration.",
        image: "/NestAuth.png",
        technologies: [
            "NestJS",
            "TypeScript",
            "PostgreSQL",
            "TypeORM",
            "JWT",
            "bcrypt",
            "class-validator",
            "class-transformer",

        ],
        githubUrl: "https://github.com/Mansur550/project-nest-auth",
        liveUrl: "",
    },
    {
        title: "Smart AI Weighing & Billing System",
        category: "Embedded AI & IoT",
        description:
            "Built a smart retail and automated checkout system using ESP32-CAM, TinyML, and a load cell. The system visually identifies products with an on-device Edge Impulse model, measures their weight through the HX711 sensor, and calculates the total price in real time. It operates completely offline and combines computer vision, sensor data, and embedded AI in a low-cost solution.",
        image: "/esp.png",
        technologies: [
            "ESP32-CAM",
            "Embedded C++",
            "Arduino",
            "Edge Impulse",
            "TinyML",
            "HX711",
            "Load Cell",
            "Computer Vision",
        ],
        githubUrl:
            "https://github.com/Mansur550/smart-ai-weighing-billing",
        liveUrl: "",
    },
    {
        title: "ASD Screening Using Machine Learning & AI",
        category: "Machine Learning",
        description:
            "Developed an end-to-end ASD screening classification project using combined child, adolescent, and adult questionnaire datasets. Cleaned and encoded 1,100 records, applied chi-square feature selection, compared and tuned seven machine learning models, and used SHAP visualizations to explain model predictions and feature influence.",
        image: "/ASD.png",
        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "XGBoost",
            "SHAP",
            "Seaborn",
        ],
        githubUrl:
            "https://github.com/Mansur550/Autism-Spectrum-Disorder",

    },
    {
        title: "Diabetes Prediction Using Machine Learning",
        category: "Machine Learning",
        description:
            "Built a Python-based machine learning workflow to estimate diabetes risk from patient health data. The project covers data preparation, classification model training, performance evaluation, and interpretation of prediction results.",
        image: "",
        technologies: [
            "Python",
            "Machine Learning",
            "Data Preprocessing",
            "Model Evaluation",
        ],
        githubUrl: "",
        liveUrl: "",
    },

    {
        title: "Personal Developer Portfolio",
        category: "Web Development",
        description:
            "Building a modern single-page portfolio with Next.js and Tailwind CSS. The website uses reusable components, responsive layouts, optimized images, accessible navigation, and a restrained liquid-glass visual style.",
        image: "/Portfolio.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Responsive Design",
        ],
        githubUrl: "",
        liveUrl: "https://mansur-islam-portfolio.vercel.app/",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-24 border-y border-white/5 bg-[#06070b] px-6 py-20 text-white sm:py-24 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                    <p className="mb-3 text-sm font-semibold uppercase text-violet-300">
                        Selected Work
                    </p>

                    <h2 className="text-4xl font-bold sm:text-5xl">
                        Projects I Have Built
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                        A selection of projects where I applied web development, machine
                        learning, and problem-solving skills to turn ideas and data into
                        practical solutions.
                    </p>
                </div>

                {/* Project grid */}
                <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/40 hover:bg-white/[0.075] hover:shadow-[0_24px_70px_rgba(124,58,237,0.2)]"
                        >
                            {/* Project image */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-[#11121a]">
                                <Image
                                    src={project.image}
                                    alt={`Preview of ${project.title}`}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project information */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-violet-300">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links only appear after URLs are added */}
                                {(project.githubUrl || project.liveUrl) && (
                                    <div className="mt-auto flex flex-wrap gap-3 pt-7">
                                        {project.githubUrl && (
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                                            >
                                                <FaGithub size={17} />
                                                Source Code
                                            </Link>
                                        )}

                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg border border-violet-400/30 bg-violet-500/15 px-4 py-2.5 text-sm font-semibold text-violet-200 backdrop-blur-md transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-500/25 hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]"
                                            >
                                                Live Demo
                                                <ArrowUpRight size={17} />
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}