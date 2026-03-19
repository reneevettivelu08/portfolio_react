import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}