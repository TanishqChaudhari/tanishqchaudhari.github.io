import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    label: "Education",
    value: "B.Tech CSE, IIT Gandhinagar, 2023-2027",
  },
  {
    label: "Current role",
    value: "Software Engineering Intern at Samsung India, Noida",
  },
  {
    label: "Achievements",
    value: "JEE Advanced AIR 1682, JEE Main AIR 1464, Dean's List",
  },
];

const projects = [
  {
    name: "ChatForge",
    summary:
      "Real-time chat application with JWT auth, socket-based messaging, typing indicators, read receipts, Redis presence tracking, Kafka pipelines, and Dockerized testing.",
    stack: ["Node.js", "Express", "Socket.io", "MongoDB", "Redis", "Kafka", "Docker"],
  },
  {
    name: "QuickBites",
    summary:
      "Food delivery backend system with normalized MySQL design, REST APIs, RBAC, audit logging, ACID transactions, sharding, and a custom B+ Tree index in Python.",
    stack: ["MySQL", "Python", "REST APIs", "RBAC", "ACID", "Sharding", "B+ Trees"],
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
    <div className="relative overflow-hidden">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-black/10 bg-white/70 px-5 py-3 shadow-[0_20px_60px_rgba(20,20,20,0.08)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/55">Tanishq Chaudhari</p>
              <p className="text-sm text-black/70">Software developer</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
              <Link href="#about" className="transition hover:text-black">
                About
              </Link>
              <Link href="#projects" className="transition hover:text-black">
                Projects
              </Link>
              <Link href="#skills" className="transition hover:text-black">
                Skills
              </Link>
              <Link href="#contact" className="transition hover:text-black">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section id="home" className="grid gap-8 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:pb-24">
          <div className="flex flex-col justify-end">
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance text-black sm:text-6xl lg:text-7xl">
              I build backend systems, real-time apps, and clean software.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/72 sm:text-xl">
              I am Tanishq Bhushan Chaudhari, a Computer Science and Engineering student at IIT Gandhinagar.
              I work with Node.js, Express.js, SQL, Python, Docker, and distributed system tools while learning from industry experience at Samsung India.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/72 sm:text-xl">
              I like building solid systems, writing clear code, and keeping the work practical.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/90"
              >
                View projects
              </Link>
              <Link
                href="mailto:tbchaudhari7@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white/70 px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
              >
                Email me
              </Link>
              <Link
                href="/Tanishq-Chaudhari-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-[#f4b860] px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f8c56f]"
              >
                Resume
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_18px_45px_rgba(20,20,20,0.06)] backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-black/45">{item.label}</p>
                  <p className="mt-3 text-base font-medium leading-6 text-black">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex h-full items-stretch">
            <div className="flex w-full flex-col gap-6 rounded-[2rem] border border-black/10 bg-[#1b1a18] p-6 text-white shadow-[0_30px_80px_rgba(20,20,20,0.2)] sm:p-8">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#2a2926]">
                <Image
                  src="/profile-photo.png"
                  alt="Portrait of Tanishq Chaudhari"
                  width={900}
                  height={1100}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">Profile</p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                  IIT Gandhinagar CSE and Samsung India intern.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
                  Interested in backend engineering, scalable systems, and software that works reliably under pressure.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-black/45">About</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-black sm:text-5xl">
              Simple. Clear. Built around the work.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(20,20,20,0.06)] backdrop-blur sm:p-8">
            <p className="text-lg leading-8 text-black/75">
              I study Computer Science and Engineering at IIT Gandhinagar, and I am currently working as a Software Engineering Intern at Samsung India in Noida.
            </p>
            <p className="mt-4 text-lg leading-8 text-black/75">
              I like backend systems, databases, distributed tools, and practical engineering that makes products feel dependable.
            </p>
          </div>
        </section>

        <section id="projects" className="pb-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Projects</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-black sm:text-5xl">
                Projects from my resume.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-black/60 md:block">
              Two projects that best show the kind of systems I like building.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_16px_40px_rgba(20,20,20,0.06)] backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-black/45">Project</p>
                <h3 className="mt-4 text-2xl font-semibold text-black">{project.name}</h3>
                <p className="mt-3 text-base leading-7 text-black/70">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-black/70"
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
          <div className="rounded-[1.75rem] border border-black/10 bg-[#121212] p-6 text-white shadow-[0_18px_45px_rgba(20,20,20,0.16)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/84"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 pb-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_60px_rgba(20,20,20,0.08)] backdrop-blur sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-black/45">Achievements</p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-black/75">
              {achievements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div id="contact" className="rounded-[1.75rem] border border-black/10 bg-[#171717] p-6 text-white shadow-[0_24px_60px_rgba(20,20,20,0.12)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">Contact</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
              tbchaudhari7@gmail.com
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
              For work, internships, or collaborations, email me directly or open my resume.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:tbchaudhari7@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4b860] px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f8c56f]"
              >
                Email me
              </Link>
              <Link
                href="/Tanishq-Chaudhari-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/6 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Open resume
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/55">
              LinkedIn: <Link href="https://www.linkedin.com/in/tanishq-chaudhari-0540aa28a" target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-4">linkedin.com/in/tanishq-chaudhari-0540aa28a</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}