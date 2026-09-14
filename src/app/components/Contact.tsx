import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#06070b] px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Contact information */}
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase text-violet-300">
              Let&apos;s Connect
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Have an idea or opportunity?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 lg:mx-0">
              I&apos;m interested in full-stack development, machine learning,
              internships, and collaborative projects. Send me a message and
              let&apos;s discuss how we can build something meaningful.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="mailto:your-email@gmail.com"
                className="group flex items-center justify-center gap-4 lg:justify-start"
              >
                <span className="rounded-lg border border-white/10 bg-white/[0.05] p-3 text-violet-300 backdrop-blur-md transition group-hover:border-violet-300/40 group-hover:bg-white/[0.1]">
                  <Mail size={21} aria-hidden="true" />
                </span>

                <span className="text-left">
                  <span className="block text-sm text-slate-500">Email</span>
                  <span className="font-medium text-slate-200 transition group-hover:text-violet-300">
                    mansurislam59@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="rounded-lg border border-white/10 bg-white/[0.05] p-3 text-violet-300 backdrop-blur-md">
                  <MapPin size={21} aria-hidden="true" />
                </span>

                <span className="text-left">
                  <span className="block text-sm text-slate-500">
                    Based in
                  </span>
                  <span className="font-medium text-slate-200">
                    Bangladesh
                  </span>
                </span>
              </div>
            </div>

            {/* Profile links */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="https://github.com/Mansur550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.1] hover:shadow-[0_0_24px_rgba(139,92,246,0.22)]"
              >
                GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/mansur-islam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.1] hover:shadow-[0_0_24px_rgba(139,92,246,0.22)]"
              >
                LinkedIn
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <a
                href="/MansurIslam-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-violet-400/30 bg-violet-500/15 px-4 py-2.5 text-sm font-semibold text-violet-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-violet-500/25 hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
            <h3 className="mb-7 text-2xl font-semibold">Send a Message</h3>

            <form
              action="https://formspree.io/f/xyeyqnka"
              method="POST"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-500/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-500/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project discussion"
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-500/15"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-violet-500/15"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-violet-300/30 bg-violet-600/80 px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:w-auto"

              >
                Send Message
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}