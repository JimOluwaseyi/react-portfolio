import { useState, useEffect } from "react";

/**
 * Reusable Portfolio Component
 * 
 * A modern, customizable portfolio component with dark/light mode,
 * gamer green theme, and smooth animations.
 * 
 * @param {Object} config - Configuration object
 * @param {string} config.fullName - Your full name (required)
 * @param {string} config.title - Short professional title/tagline
 * @param {string} config.bio - About section paragraph
 * @param {string[]} config.skills - Array of skill badges
 * @param {Object[]} config.workExperience - Array of work experience objects
 * @param {Object[]} config.projects - Array of project objects
 * @param {string} config.email - Contact email address
 * @param {string} config.location - Location
 * @param {string} config.accentColor - Tailwind color class (default: "green")
 * @param {boolean} config.darkModeDefault - Start in dark mode (default: false)
 * 
 * @example
 * const config = {
 *   fullName: "John Doe",
 *   title: "Full Stack Developer",
 *   bio: "I build fast, accessible web interfaces...",
 *   skills: ["React", "JavaScript", "Tailwind CSS"],
 *   workExperience: [...],
 *   projects: [...],
 *   email: "john@example.com",
 *   location: "New York, USA"
 * };
 * 
 * <Portfolio {...config} />
 */

export default function Portfolio({
  fullName = "Developer",
  title = "Full Stack Developer",
  bio = "Building amazing web experiences.",
  skills = [],
  workExperience = [],
  projects = [],
  email = "contact@example.com",
  location = "Remote",
  accentColor = "500",
  darkModeDefault = false,
}) {
  const [dark, setDark] = useState(darkModeDefault);
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

  const colors = {
    light: {
      bg: "bg-white",
      bgSecondary: "bg-slate-50",
      text: "text-slate-900",
      textSecondary: "text-slate-600",
      border: "border-slate-200",
      borderLight: "border-slate-100",
      accent: `bg-green-${accentColor}`,
      accentText: `text-green-${accentColor}`,
      accentBorder: `border-green-600`,
      accentBg: "bg-green-50",
      hoverBg: "hover:bg-slate-100",
    },
    dark: {
      bg: "bg-slate-900",
      bgSecondary: "bg-slate-800",
      text: "text-slate-100",
      textSecondary: "text-slate-400",
      border: "border-slate-700",
      borderLight: "border-slate-700",
      accent: `bg-green-${accentColor}`,
      accentText: `text-green-400`,
      accentBorder: `border-green-500`,
      accentBg: "bg-slate-800",
      hoverBg: "hover:bg-slate-700",
    },
  };

  const c = dark ? colors.dark : colors.light;

  return (
    <>
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
        }

        .theme-toggle {
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.05);
        }

        .skill-badge {
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div
        className={`${c.bg} ${c.text} min-h-screen transition-colors duration-300`}
      >
        {/* Header */}
        <header
          className={`max-w-5xl mx-auto p-6 flex items-center justify-between fade-in-fast border-b ${c.border}`}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">{fullName}</h1>
            <p className="text-sm opacity-80 mt-1">{title}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`theme-toggle px-3 py-1 rounded-md border text-sm font-medium transition-colors ${c.accentBorder} ${c.hoverBg}`}
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
            <a
              href={`#contact`}
              className="hidden sm:inline-block gamer-btn text-white px-4 py-2 rounded-lg text-sm font-medium bg-green-500 hover:bg-green-600"
            >
              Contact
            </a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-6 grid gap-12">
          {/* About Section */}
          {bio && (
            <section
              id="about"
              data-fade
              className={`grid gap-4 ${fadeIn["about"] ? "fade-in" : "opacity-0"}`}
            >
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="max-w-3xl leading-relaxed">{bio}</p>
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge px-3 py-1 rounded-full text-sm opacity-90 transition-colors border ${c.accentBorder} ${c.accentBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Work Experience Section */}
          {workExperience.length > 0 && (
            <section
              id="experience"
              data-fade
              className={`${fadeIn["experience"] ? "fade-in" : "opacity-0"}`}
            >
              <h2 className="text-2xl font-semibold">Work Experience</h2>
              <div className="mt-6 flex flex-col gap-6">
                {workExperience.map((job) => (
                  <article
                    key={job.id}
                    className={`p-4 rounded-lg transition-all border ${c.border} ${c.bgSecondary} hover:${c.accentBorder}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium">{job.role}</h3>
                        <p className="text-sm opacity-80">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <div className={`text-sm font-medium ${c.accentText}`}>
                        {job.duration}
                      </div>
                    </div>
                    <ul className="mt-3 ml-4 list-disc text-sm space-y-1">
                      {job.bullets?.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {projects.length > 0 && (
            <section
              id="projects"
              data-fade
              className={`${fadeIn["projects"] ? "fade-in" : "opacity-0"}`}
            >
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`project-card p-4 rounded-lg border ${c.border} ${c.bgSecondary}`}
                  >
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{project.desc}</p>
                    {project.tech?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-2 py-1 rounded-full transition-colors border ${c.accentBorder} ${c.accentBg}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.url && (
                      <div className="mt-4">
                        <a
                          href={project.url}
                          className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${c.accentText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View project <span>→</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          <section
            id="contact"
            data-fade
            className={`p-8 rounded-lg text-center ${fadeIn["contact"] ? "fade-in" : "opacity-0"} border ${c.accentBorder} ${c.bgSecondary}`}
          >
            <h2 className="text-3xl font-semibold">Let&apos;s Connect</h2>
            <p className={`text-base opacity-80 mt-2 max-w-2xl mx-auto`}>
              I&apos;m open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className={`text-sm ${c.accentText}`}>
                📧 <strong>Email</strong>
              </p>
              <p className="text-lg opacity-90">{email}</p>
              <p className={`text-sm ${c.textSecondary}`}>📍 {location}</p>

              <a
                href={`mailto:${email}`}
                className="gamer-btn mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-base font-semibold inline-block"
              >
                Send me an Email
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`text-center opacity-70 py-6 mt-12 pt-6 border-t ${c.border}`}
          >
            © {new Date().getFullYear()} {fullName} — Built with React +
            Tailwind CSS
          </footer>
        </main>
      </div>
    </>
  );
}
