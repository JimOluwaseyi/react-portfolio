/*
Frontend portfolio single-file React component
 - Filename: jimoh-portfolio.jsx
 - Usage: place this file inside a React app (Vite, Create React App, or Next.js).
 - Tailwind CSS required. If you don't have Tailwind, install it first: https://tailwindcss.com/docs/installation
 - This component uses Tailwind utility classes and is fully self-contained (no image by request).
 - Customize the WORK_EXPERIENCE and PROJECTS arrays below with your real data.

How to run (quick):
 1. Create a new Vite React app: `npm create vite@latest my-portfolio -- --template react`
 2. Install dependencies and Tailwind (follow Tailwind docs).
 3. Copy this file into `src/components/Portfolio.jsx` and import it in `src/App.jsx`.
 4. Start dev server: `npm run dev`.

Features included:
 - Accessible header with yPart-timeour full name (no photo)
 - Short bio / summary
 - Skills badges
 - Work experience timeline (structured)
 - Projects grid with links and descriptions
 - Contact section with a contact form (sends mailto by default)
 - Resume download button (placeholder)
 - Light/dark mode toggle
*/

import { useState } from "react";

const WORK_EXPERIENCE = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Upwey Global  — Contract",
    location: "Remote",
    duration: "3 months",
    bullets: [
      "Developed referral tracking features including upline/downline hierarchy.",
      "Built realtor code generation and admin view/edit functionalities.",
      "Converted Figma designs into pixel-perfect, accessible components.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Green Africa Initiative — Contract",
    location: "Remote",
    duration: "2 months",
    bullets: [
      "Created and maintained responsive pages for a non-profit organization.",
      "Built responsive user interfaces using React, Tailwind CSS and Ruby on rails.",
      "Integrated RESTful APIs for real-time data handling.",
      "Improved performance, reducing Time-to-Interactive for end-users.",
      "Implemented accessibility best practices for wider audience reach.",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Upwey.ng — Real Estate Platform",
    desc: "A real estate platform with referral tracking (uplines/downlines), realtor code generation, and admin management tools.",
    tech: ["React", "Redux", "Tailwind CSS", "Ruby on Rails", "Nginx"],
    url: "https://upwey.com.ng/",
  },
 
  {
    id: 2,
    title: "Green Africa Initiative",
    desc: "Nutrition-focused non-profit initiative tackling hunger, food waste, and malnutrition among pregnant women and infants.",
    tech: ["React", "Tailwind CSS", "Rails API"],
    url: "https://greenafricainitiative.org",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-slate-900 text-slate-100 min-h-screen"
          : "bg-white text-slate-900 min-h-screen"
      }
    >
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Jimoh Oluwaseyi Mayowa
          </h1>
          <p className="text-sm opacity-80 mt-1">
            Full Stack Developer — React · Tailwind CSS · Accessibility · Ruby
            on Rails
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-md border text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-12">
        {/* Summary */}
        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="max-w-3xl leading-relaxed">
            Hi — I'm <strong>Jimoh</strong>, a full stack developer who builds
            fast, accessible, and maintainable web interfaces. I focus on React,
            Tailwind CSS, and Ruby on Rails, creating experiences that work
            beautifully on both mobile and desktop. I’m available for remote
            work and collaborations.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "Accessibility",
              "RTK Query",
              "Ruby on Rails",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 border rounded-full text-sm opacity-90"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Work experience */}
        <section>
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-6 flex flex-col gap-6">
            {WORK_EXPERIENCE.map((job) => (
              <article key={job.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <p className="text-sm opacity-80">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <div className="text-sm opacity-70">{job.duration}</div>
                </div>
                <ul className="mt-3 ml-4 list-disc text-sm space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
          
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-4 border rounded-lg hover:shadow">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm opacity-80 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.url}
                    className="text-indigo-600 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-sm opacity-80 mt-1">
            I'm open to new opportunities — feel free to reach out.
          </p>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm">
                <strong>Email</strong>
              </p>
              <p className="text-sm opacity-80">oluwaseyijimoh128@gmail.com</p>

              <p className="text-sm mt-3">
                <strong>Location</strong>
              </p>
              <p className="text-sm opacity-80">Lagos, Nigeria</p>

              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:oluwaseyijimoh128@gmail.com"
                  className="px-3 py-2 bg-indigo-600 text-white rounded text-sm"
                >
                  Email me
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.target);
                const name = form.get("name");
                const message = form.get("message");
                window.location.href = `mailto:oluwaseyijimoh128@gmail.com?subject=Message from ${encodeURIComponent(
                  name
                )}&body=${encodeURIComponent(message)}`;
              }}
              className="flex flex-col gap-3"
            >
              <input
                name="name"
                placeholder="Your name"
                required
                className="px-3 py-2 border rounded"
              />
              <input
                name="email"
                placeholder="Your email"
                required
                className="px-3 py-2 border rounded"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="px-3 py-2 border rounded"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                Send
              </button>
            </form>
          </div>
        </section>

        <footer className="text-center opacity-70 py-6">
          © {new Date().getFullYear()} Jimoh Oluwaseyi Mayowa — Built with React
          + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}
