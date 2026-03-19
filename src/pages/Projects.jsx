import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Projects.scss";

const FILTERS = ["All", "Full-Stack", "Product"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <main className="projects">

      <div className="projects__header">
        <p className="projects__eyebrow">// Selected work</p>
        <h1 className="projects__title">Projects</h1>
        <p className="projects__subtitle">Case studies &amp; builds</p>
        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${activeFilter === f ? "projects__filter--active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {filtered.length === 0 && (
          <p className="projects__empty">No projects found.</p>
        )}
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

    </main>
  );
}