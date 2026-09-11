"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full">
                <nav className="mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl">
                    <Link href="/" className="text-lg font-bold tracking-wide">
                        Mansur <span className="text-cyan-300">Islam</span>
                    </Link>

                    <ul className="hidden items-center gap-8 md:flex">
                        {
                            navItems.map((item) =>
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-cyan-300">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg border border-white/20 bg-white/10 p-2 text-xl text-white md:hidden"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </nav>
                {isOpen && (
                    <div className="mx-auto mt-3 w-[92%] max-w-6xl rounded-2xl border border-white/20 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(139,92,246,0.18)] backdrop-blur-xl md:hidden">
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
}