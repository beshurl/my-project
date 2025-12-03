import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/projects/${project.id}`}
      className={`card glass ${visible ? "reveal" : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="card-header">
        <span className="chip subtle">Case Study</span>
        <span className="arrow">↗</span>
      </div>
      <h3>{project.title}</h3>
      <p className="card-desc">{project.shortDesc}</p>
      <div className="chip-row">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
