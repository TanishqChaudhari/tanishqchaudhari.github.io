import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    label: "IIT Gandhinagar",
    value: "CSE undergraduate, Class of 2027",
  },
  {
    label: "Samsung India",
    value: "Software Engineering Intern in Noida",
  },
  {
    label: "Academic track",
    value: "JEE Advanced AIR 1682, Dean's List",
  },
];

const focusAreas = [
  "Building clean, practical web apps",
  "Learning strong CS fundamentals",
  "Turning ideas into shipped products",
];

const timeline = [
  {
    year: "2023 - 2027",
    title: "B.Tech in CSE at IIT Gandhinagar",
    description:
      "Focused on computer science fundamentals, problem solving, and building a strong engineering base.",
  },
  {
    year: "2023-24",
    title: "Dean's List recognition",
    description:
      "Selected for the Dean's List in Semester I, Academic Year 2023-24.",
  },
  {
    year: "2026",
    title: "Samsung India software intern",
    description:
      "Starting industry experience in Noida with a focus on software engineering growth.",
  },
];

const stack = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "HTML/CSS",
  "Data Structures",
  "Problem Solving",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-black/10 bg-white/70 px-5 py-3 shadow-[0_20px_60px_rgba(20,20,20,0.08)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/55">
                Tanishq Chaudhari
              </p>
              <p className="text-sm text-black/70">Aspiring software developer</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
              <Link href="#about" className="transition hover:text-black">
                About
              </Link>
              <Link href="#journey" className="transition hover:text-black">
                Journey
              </Link>
              <Link href="#contact" className="transition hover:text-black">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section id="home" className="grid gap-8 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:pb-24">
          <div className="flex flex-col justify-end">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70 shadow-sm backdrop-blur">
              Software Engineering Intern at Samsung India, Noida
            </div>

            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance text-black sm:text-6xl lg:text-7xl">
              Building a disciplined path from campus problem solver to product-ready software engineer.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">
              I am Tanishq Chaudhari, a Computer Science and Engineering student at IIT Gandhinagar.
              My focus is on strong fundamentals, clean implementation, and shipping reliable software that feels sharp and useful.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#journey"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/90"
              >
                Explore my journey
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white/70 px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
              >
                Connect with me
              </Link>
              <Link
                href="/Tanishq-Chaudhari-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-[#f4b860] px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f8c56f]"
              >
                View resume
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_18px_45px_rgba(20,20,20,0.06)] backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-medium leading-6 text-black">
                    {item.value}
                  </p>
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
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  Current profile
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                  Future-ready developer with a strong academic base.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
                  IITGN CSE, Dean's List recognition, and a Samsung India internship are the starting points.
                  The bigger goal is steady growth into someone who can build, debug, and deliver with confidence.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {focusAreas.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-black/45">About</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-black sm:text-5xl">
              A student who likes structure, learning, and practical engineering.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(20,20,20,0.06)] backdrop-blur sm:p-8">
            <p className="text-lg leading-8 text-black/75">
              I am currently studying Computer Science and Engineering at IIT Gandhinagar.
              My academic journey includes JEE Advanced AIR 1682, a State Rank 67 in MHT-CET, and Dean's List recognition at IITGN.
              I am now translating that foundation into industry experience through my software internship at Samsung India.
            </p>
            <p className="mt-4 text-lg leading-8 text-black/75">
              This site is meant to feel like a crisp, honest personal homepage: clear enough for recruiters,
              strong enough for future project updates, and simple to keep growing over time.
            </p>
          </div>
        </section>

        <section id="journey" className="pb-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Journey</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-black sm:text-5xl">
                Education and milestones.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-black/60 md:block">
              A compact timeline that highlights the things most relevant to a future software developer profile.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {timeline.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white/75 p-6 shadow-[0_16px_40px_rgba(20,20,20,0.06)] backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-black/45">{item.year}</p>
                <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/68">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-[1.75rem] border border-black/10 bg-[#121212] p-6 text-white shadow-[0_18px_45px_rgba(20,20,20,0.16)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Skills in focus</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/84">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-12">
          <div className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_60px_rgba(20,20,20,0.08)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Contact</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-black sm:text-5xl">
                Let’s build something solid.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-black/70">
                If you want to collaborate, review my work, or follow my progress as I grow into a stronger software developer,
                the best place to start is LinkedIn.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-[1.5rem] border border-black/10 bg-[#171717] p-6 text-white sm:p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">Reach out</p>
                <p className="mt-4 text-2xl font-semibold">LinkedIn</p>
                <p className="mt-2 break-all text-sm text-white/65">
                  linkedin.com/in/tanishq-chaudhari-0540aa28a
                </p>
              </div>

              <Link
                href="https://www.linkedin.com/in/tanishq-chaudhari-0540aa28a"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#f4b860] px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f8c56f]"
              >
                Open LinkedIn profile
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
