
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="container page-content">
      <p className="eyebrow">MY WORK</p>

      <h1 className="page-title">
        Projects<span>.</span>
      </h1>

      <p className="page-description">
        A collection of experiments, learning projects, and things I have built along the way.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
