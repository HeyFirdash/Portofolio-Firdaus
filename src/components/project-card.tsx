import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-icon">{"</>"}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <a
        className="project-link"
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        View repository ↗
      </a>
    </article>
  );
}
