import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#020617] text-white">
        <section id="home" className="flex min-h-screen items-center justify-center px-6 pt-28">
          <h1 className="text-center text-4xl font-bold md:text-6xl">
            Hi, I am Md Mansur <span className="text-cyan-300">Islam</span>
          </h1>
        </section>

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
