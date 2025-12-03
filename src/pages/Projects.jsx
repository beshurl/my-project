import { projects } from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <p className="section-subtitle">
          React, LLM, 데이터 제품까지 실 서비스에 적용한 프로젝트들을 모았습니다.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.id} index={index} />
        ))}
      </div>
    </section>
  );
}
