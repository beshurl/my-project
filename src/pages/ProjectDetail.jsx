import { useParams, Link } from "react-router-dom";
import { projects } from "../data/ProjectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="page-section">
        <h2>Project not found</h2>
        <Link className="btn ghost" to="/projects">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Project Detail</p>
        <h1>{project.title}</h1>
        <p className="section-subtitle">{project.shortDesc}</p>
        <div className="chip-row">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="detail-card glass">
        <p className="detail-text">{project.detail.trim()}</p>
        <div className="detail-footer">
          <a className="btn primary" href={project.link} target="_blank" rel="noreferrer">
            View repository
          </a>
          <Link className="btn ghost" to="/projects">
            Back to list
          </Link>
        </div>
      </div>
    </section>
  );
}
