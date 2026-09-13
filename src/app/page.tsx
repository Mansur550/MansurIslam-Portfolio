import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#020617] text-white"
      >

        <Hero />
        <About />
        <Projects />
        <section id="about" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold">About</h2>
        </section>

        <section id="skills" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold">Skills</h2>
        </section>

        <section id="projects" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>

        <section id="contact" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}
