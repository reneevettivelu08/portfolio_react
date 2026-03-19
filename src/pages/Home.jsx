import { Link } from "react-router-dom";
import "./Home.scss";

const skills = [
  { label: "React", accent: false },
  { label: "Node.js", accent: false },
  { label: "Express", accent: false },
  { label: "PostgreSQL", accent: false },
  { label: "Product Strategy", accent: false },
  { label: "UX Research", accent: false },
  { label: "Agile", accent: false },
  { label: "Claude AI", accent: true },
];

const experience = [
  { company: "BMO Financial Group", role: "Product Manager — Digital Mortgages", date: "2022 — Present" },
  { company: "BrainStation", role: "Software Engineering Diploma", date: "2024" },
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
            <em>+ Developer</em>
          </h1>
          <p className="home__tagline">
            I combine product strategy with engineering execution to build
            scalable digital experiences — pre-approvals, document workflows,
            and data-driven interfaces.
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
                href="https://linkedin.com/in/renee"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/renee
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
          <div className="home__stat-num">3+</div>
          <div className="home__stat-label">Projects shipped</div>
        </div>
        <div className="home__stat">
          <div className="home__stat-num">5yr</div>
          <div className="home__stat-label">Industry experience</div>
        </div>
        <div className="home__stat">
          <div className="home__stat-num">2×</div>
          <div className="home__stat-label">Disciplines</div>
        </div>
      </div>

      {/* ── About ── */}
      <section className="home__about">
        <div className="home__about-label">// About me</div>
        <div className="home__about-content">
          <p>
            I'm a product manager turned software engineer with a focus on
            digital home financing experiences. I've led cross-functional teams
            at BMO building mortgage pre-approval flows, and I write the code
            too — so I understand both the "why" and the "how" of every
            product decision.
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