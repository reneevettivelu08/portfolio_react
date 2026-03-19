export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
      <details>
        <summary>View Case Study</summary>
        <p>{project.caseStudy}</p>
      </details>
      <a href={project.github}>GitHub</a>
    </div>
  );
}