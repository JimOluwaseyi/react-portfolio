/*
Frontend portfolio single-file React component with 2026 updates
 - Filename: jimoh-portfolio.jsx
 - Updated with gamer green theme, sleek animations, and simplified contact
 - Light/dark mode toggle maintained
*/

import { useState, useEffect } from "react";

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
  {
    id: 3,
    title: "Modern E-Commerce Dashboard",
    desc: "High-performance dashboard with real-time analytics, inventory management, and customer insights using latest React patterns.",
    tech: ["React 19", "Tailwind CSS", "TypeScript", "Server Components"],
    url: "#",
  },
  {
    id: 4,
    title: "AI-Powered Content Creator",
    desc: "Interactive web app leveraging AI APIs with streaming responses, modern animations, and responsive design.",
    tech: ["React", "Vercel AI SDK", "Next.js", "Tailwind CSS"],
    url: "#",
  },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [fadeIn, setFadeIn] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFadeIn((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-fade]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7);
        }
        50% {
          box-shadow: 0 0 0 8px rgba(0, 255, 65, 0);
        }
      }

      .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
      }

      .fade-in-fast {
        animation: slideDown 0.4s ease-out forwards;
      }

      .gamer-btn {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .gamer-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        transition: left 0.3s ease;
        z-index: -1;
      }

      .gamer-btn:hover::before {
        left: 100%;
      }

      .gamer-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 255, 65, 0.3);
      }

      .gamer-btn:active {
        transform: translateY(0);
      }

      .project-card {
        transition: all 0.3s ease;
      }

      .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 255, 65, 0.15);
      }

      .theme-toggle {
        transition: all 0.3s ease;
      }

      .theme-toggle:hover {
        transform: scale(1.05);
      }
    `}</style>

    <div
      className={
        dark
          ? "bg-slate-900 text-slate-100 min-h-screen transition-colors duration-300"
          : "bg-white text-slate-900 min-h-screen transition-colors duration-300"
      }
    >
      <header className={`max-w-5xl mx-auto p-6 flex items-center justify-between fade-in-fast ${dark ? "border-b border-slate-700" : "border-b border-slate-200"}`}>
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
            className={`theme-toggle px-3 py-1 rounded-md border text-sm font-medium ${
              dark
                ? "border-green-500 hover:bg-slate-800"
                : "border-green-600 hover:bg-slate-100"
            }`}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-block gamer-btn text-white px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-600"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-12">
        {/* Summary */}
        <section 
          id="about"
          data-fade
          className={`grid gap-4 ${fadeIn["about"] ? "fade-in" : "opacity-0"}`}
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="max-w-3xl leading-relaxed">
            Hi — I'm <strong>Jimoh</strong>, a full stack developer who builds
            fast, accessible, and maintainable web interfaces. I focus on React,
            Tailwind CSS, and Ruby on Rails, creating experiences that work
            beautifully on both mobile and desktop. I'm available for remote
            work and collaborations.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "TypeScript",
              "Accessibility",
              "Performance",
              "Web3",
              "Ruby on Rails",
            ].map((s) => (
              <span
                key={s}
                className={`px-3 py-1 rounded-full text-sm opacity-90 transition-colors ${
                  dark
                    ? "border border-green-500 bg-slate-800 hover:bg-green-500 hover:text-slate-900"
                    : "border border-green-600 bg-green-50 hover:bg-green-600 hover:text-white"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Work experience */}
        <section 
          id="experience"
          data-fade
          className={`${fadeIn["experience"] ? "fade-in" : "opacity-0"}`}
        >
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-6 flex flex-col gap-6">
            {WORK_EXPERIENCE.map((job) => (
              <article 
                key={job.id} 
                className={`p-4 rounded-lg transition-all ${
                  dark
                    ? "border border-slate-700 bg-slate-800 hover:border-green-500"
                    : "border border-slate-200 bg-slate-50 hover:border-green-600"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <p className="text-sm opacity-80">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <div className={`text-sm font-medium ${dark ? "text-green-400" : "text-green-600"}`}>
                    {job.duration}
                  </div>
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
        <section 
          id="projects"
          data-fade
          className={`${fadeIn["projects"] ? "fade-in" : "opacity-0"}`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div 
                key={p.id} 
                className={`project-card p-4 rounded-lg ${
                  dark
                    ? "border border-slate-700 bg-slate-800"
                    : "border border-slate-200 bg-slate-50"
                }`}
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm opacity-80 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span 
                      key={t} 
                      className={`text-xs px-2 py-1 rounded-full transition-colors ${
                        dark
                          ? "border border-green-500 bg-slate-700 text-green-400"
                          : "border border-green-600 bg-green-50 text-green-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.url}
                    className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                      dark
                        ? "text-green-400 hover:text-green-300"
                        : "text-green-600 hover:text-green-700"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section 
          id="contact" 
          data-fade
          className={`p-8 rounded-lg text-center ${fadeIn["contact"] ? "fade-in" : "opacity-0"} ${
            dark
              ? "border border-green-500 bg-gradient-to-br from-slate-800 to-slate-850"
              : "border border-green-600 bg-gradient-to-br from-green-50 to-slate-50"
          }`}
        >
          <h2 className="text-3xl font-semibold">Let's Connect</h2>
          <p className={`text-base opacity-80 mt-2 max-w-2xl mx-auto ${
            dark ? "" : ""
          }`}>
            I'm open to new opportunities and collaborations. Reach out and let's build something amazing together.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className={`text-sm ${dark ? "text-green-400" : "text-green-700"}`}>
              📧 <strong>Email</strong>
            </p>
            <p className="text-lg opacity-90">oluwaseyijimoh128@gmail.com</p>
            <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
              📍 Lagos, Nigeria
            </p>

            <a
              href="mailto:oluwaseyijimoh128@gmail.com"
              className="gamer-btn mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-base font-semibold inline-block"
            >
              Send me an Email
            </a>
          </div>
        </section>

        <footer className={`text-center opacity-70 py-6 mt-12 pt-6 border-t ${
          dark ? "border-slate-700" : "border-slate-200"
        }`}>
          © {new Date().getFullYear()} Jimoh Oluwaseyi Mayowa — Built with React
          + Tailwind CSS + 💚
        </footer>
      </main>
    </div>
  );
}
