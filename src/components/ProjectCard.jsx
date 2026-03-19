export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
      <details>
        <summary>View Case Study</summary>
        <p>{project.caseStudy}</p>
      </details>
      <div className="card-links">
        {project.github.length > 0 && project.github.map((repo) => (
          <a key={repo.label} href={repo.url}>
            GitHub — {repo.label}
          </a>
        ))}
        {project.link && <a href={project.link}>Link</a>}
      </div>
    </div>
  );
}