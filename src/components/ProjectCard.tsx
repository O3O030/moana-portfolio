import { Link } from "react-router-dom";
import type { Project } from "../types/content";
import { EditorialScreenshot } from "./EditorialScreenshot";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-visual"><span aria-hidden="true">0{index + 1}</span>{project.thumbnail?.src ? <EditorialScreenshot image={project.thumbnail} variant="featured" /> : <div className="radar-orbit" aria-hidden="true"><i /></div>}</div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.projectType}</span><span className="status">{project.status}</span></div>
        <h3>{project.title}</h3><p className="subtitle">{project.subtitle}</p><p>{project.shortDescription}</p>
        {project.featuredMetrics?.length ? <dl className="featured-metrics">{project.featuredMetrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl> : null}
        <ul className="tag-list" aria-label="Project tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <Link className="text-link" to={`/projects/${project.slug}`}>View Case Study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
