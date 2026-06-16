import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    label: "Education",
    value: "B.Tech CSE, IIT Gandhinagar (2023-2027)",
  },
  {
    label: "Current role",
    value: "Software Engineering Intern @ Samsung India",
  },
  {
    label: "Academics",
    value: "JEE Adv AIR 1682, JEE Main AIR 1464, Dean's List",
  },
];

const projects = [
  {
    name: "ChatForge",
    summary:
      "A real-time chat application handling concurrent users. Built with Node.js, WebSocket messaging, Redis presence tracking, and Kafka pipelines.",
    stack: ["Node.js", "Socket.io", "MongoDB", "Redis", "Kafka", "Docker"],
    link: "https://github.com/TanishqChaudhari/ChatForge"
  },
  {
    name: "QuickBites",
    summary:
      "Food delivery backend system with normalized MySQL databases, ACID transactions, RBAC, and custom B+ Tree indices in Python.",
    stack: ["MySQL", "Python", "REST APIs", "ACID", "Sharding", "B+ Trees"],
    link: "https://github.com/TanishqChaudhari/QuickBites"
  },
];

const skills = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "Git",
];

const achievements = [
  "Dean's List in Semester 1 at IIT Gandhinagar",
  "JEE Advanced 2023: AIR 1682",
  "JEE Main 2023: AIR 1464",
  "MHT-CET 2023: Maharashtra State Rank 67",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden text-neutral-200">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-neutral-800 bg-neutral-950/80 px-5 py-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Tanishq Chaudhari</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
              <Link href="#projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="#skills" className="transition hover:text-white">
                Skills
              </Link>
              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
              <Link 
                href="/Tanishq-Chaudhari-Resume.pdf" 
                target="_blank" 
                className="px-4 py-1.5 rounded-full border border-neutral-700 text-white hover:bg-neutral-800 transition"
              >
                Resume
              </Link>
            </nav>
          </div>
        </header>

        <section id="home" className="grid gap-8 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:pb-24">
          <div className="flex flex-col justify-center">
            
            <h1 className="max-w-4xl font-display text-5xl leading-[1.1] tracking-tight text-balance text-white sm:text-6xl">
              Hi, I'm Tanishq. <br/> I engineer systems and write clean code.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
              I'm a Computer Science student at IIT Gandhinagar, exploring backend architecture and currently working as a Software Engineering Intern at Samsung India.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
              I enjoy translating complex logic into reliable software, playing with distributed systems, and continuously learning new technologies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                View projects
              </Link>
              <Link
                href="mailto:tbchaudhari7@gmail.com"
                className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Email me
              </Link>
              <Link
                href="https://github.com/TanishqChaudhari"
                target="_blank"
                className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                GitHub
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-neutral-500">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-200">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex h-full items-stretch lg:pt-4">
            <div className="flex w-full flex-col gap-6 rounded-[2rem] border border-neutral-800 bg-neutral-900/40 p-3 shadow-2xl sm:p-4">
              <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 relative h-full min-h-[400px]">
                <Image
                  src="/profile-photo.png"
                  alt="Portrait of Tanishq Chaudhari"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="pb-20">
          <div className="mb-8">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-3 text-neutral-400 text-lg">Systems and applications I've built to scale.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col justify-between rounded-[1.5rem] border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 backdrop-blur"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="text-neutral-400 hover:text-white transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-neutral-400">{project.summary}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-300 border border-neutral-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="pb-20">
          <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 backdrop-blur">
            <h2 className="font-display text-2xl tracking-tight text-white mb-6">Technologies & Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-700 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 pb-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 backdrop-blur">
            <h2 className="font-display text-2xl tracking-tight text-white mb-6">Achievements</h2>
            <ul className="space-y-4 text-base leading-relaxed text-neutral-400">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-white mt-1">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="contact" className="rounded-[1.5rem] border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-widest text-neutral-500">Contact</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
              Let's connect.
            </h2>
            <p className="mt-4 max-w-xl text-md leading-relaxed text-neutral-400">
              My inbox is always open. Whether you have a question, an opportunity, or just want to chat.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:tbchaudhari7@gmail.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Say Hello
              </Link>
              <Link
                href="https://www.linkedin.com/in/tanishq-chaudhari-0540aa28a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
