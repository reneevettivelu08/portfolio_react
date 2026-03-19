import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  return (
    <div className={`card ${project.featured ? "card--featured" : ""}`}>
 
      {project.featured && (
        <span className="card__badge">Featured project</span>
      )}
 
      <div className="card__header">
        <h3 className="card__title">{project.title}</h3>
        {project.type && (
          <span className="card__type">{project.type}</span>
        )}
      </div>
 
      <p className="card__description">{project.description}</p>
 
      <div className="card__skills">
        {project.skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
 
      <details className="card__case-study">
        <summary>Case Study</summary>
        <div className="card__case-study__body">
          {project.caseStudy}
        </div>
      </details>
 
      <div className="card__links">
        {project.github.length > 0 &&
          project.github.map((repo) => (
            <a
              key={repo.label}
              href={repo.url}
              className="card__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub — {repo.label}
            </a>
          ))}
        {project.link && (
          <a
            href={project.link}
            className="card__link card__link--demo"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="card__link card__link--demo"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
      </div>
 
    </div>
  );
}