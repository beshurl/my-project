import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Product Engineer · AI Builder</p>
        <h1 className="hero__title">
          Building clear, modern experiences for the next wave of products.
        </h1>
        <p className="hero__subtitle">
          React · TypeScript · LLM Fine-Tuning · Data Products · Design Systems
        </p>
        <div className="cta-row">
          <Link className="btn primary" to="https://github.com/beshurl">
            View Projects
          </Link>
          <a className="btn ghost" href="mailto:you@example.com">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero__stats glass">
        <div>
          <span className="stat-number">4+</span>
          <span className="stat-label">Real-world builds</span>
        </div>
        <div>
          <span className="stat-number">AI · Web</span>
          <span className="stat-label">Full-stack & LLM</span>
        </div>
        <div>
          <span className="stat-number">Product</span>
          <span className="stat-label">UX first mindset</span>
        </div>
      </div>
    </section>
  );
}
