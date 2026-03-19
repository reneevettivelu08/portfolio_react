import { Link } from "react-router-dom";
import "./Home.scss";

const skills = [
  { label: "React", accent: false },
  { label: "Node.js", accent: false },
  { label: "Express", accent: false },
  { label: "JavaScript", accent: false },
  { label: "SQL", accent: false },
  { label: "Figma", accent: false },
  { label: "Product Sense", accent: true },
  { label: "UX Research", accent: true },
  { label: "Agile", accent: true },
  { label: "Data Analytics", accent: true },
  { label: "Funnel Optimization", accent: true },
  { label: "RAG Pipelines", accent: true }
];

const experience = [
  { company: "BrainStation", role: "Software Engineering Diploma", date: "2026" },
  { company: "BMO Financial Group - Product Manager", role: "Digital Home Financing & Personal Banking", date: "2025 — Present" },
  { company: "BMO Financial Group - Technical Business Consultant", role: "Commercial Banking & Asset Management", date: "2020-2025" }
];

export default function Home() {
  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="home__hero">
        <div className="home__hero-left">
          <p className="home__eyebrow">// Available for work</p>
          <h1 className="home__name">
            Product Manager<br />
            <em>+ Software Engineer</em>
          </h1>
          <p className="home__tagline">
            Product Manager with a strategic lens. <br /> Engineer with a bias to build.
          </p>
          <div className="home__actions">
            <Link to="/projects" className="btn btn--primary">View Projects</Link>
            <Link to="/contact" className="btn btn--ghost">Contact Me</Link>
          </div>
        </div>

        <div className="home__hero-right">
          <div className="home__avatar-row">
            <div className="home__avatar">R</div>
            <div className="home__socials">
              <a
                href="https://github.com/reneevettivelu08"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
              >
                github.com/reneevettivelu08
              </a>
              <a
                href="https://linkedin.com/in/renee-vettivelu"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/renee-vettivelu
              </a>
            </div>
          </div>

          <div className="home__skills-block">
            <label>// Technologies &amp; Skills</label>
            <div className="home__skill-tags">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className={`skill-tag ${s.accent ? "skill-tag--accent" : ""}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="home__stats">
        <div className="home__stat">
          <div className="home__stat-num">10+</div>
          <div className="home__stat-label">Projects shipped</div>
        </div>
        <div className="home__stat">
          <div className="home__stat-num">6 years</div>
          <div className="home__stat-label">Industry experience</div>
        </div>
        <div className="home__stat">
          <div className="home__stat-num">2x Eng Degrees</div>
          <div className="home__stat-label">Education</div>
        </div>
      </div>

      {/* ── About ── */}
      <section className="home__about">
        <div className="home__about-label">// About me</div>
        <div className="home__about-content">
          <p>
            I started in aerospace engineering, moved into product management, and now build software—bringing a rare mix of technical depth and product intuition. At BMO, I’ve led cross-functional teams designing mortgage pre-approval experiences, while also writing the code behind them. I approach every problem with a maker’s mindset and a strategic lens, focused on turning complex systems into simple, scalable digital experiences.
          </p>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="home__experience">
        <div className="home__exp-header">// Experience</div>
        {experience.map((exp) => (
          <div key={exp.company} className="home__exp-row">
            <div>
              <div className="home__exp-company">{exp.company}</div>
              <div className="home__exp-role">{exp.role}</div>
            </div>
            <div className="home__exp-date">{exp.date}</div>
          </div>
        ))}
      </section>
    </main>
  );
}