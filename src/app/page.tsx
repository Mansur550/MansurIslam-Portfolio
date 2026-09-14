import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#020617] text-white"
      >

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>
    </>
  );
}
