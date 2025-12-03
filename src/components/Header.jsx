import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Default to dark theme
    document.documentElement.classList.add("dark");
  }, []);

  const isActive = (path) => {
    if (path === "/projects") {
      return location.pathname === "/projects" || location.pathname.startsWith("/projects/");
    }
    return location.pathname === path;
  };

  return (
    <header className="header glass">
      <Link to="/" className="brand">
        Portfolio
      </Link>
      <nav className="nav">
        <Link className={isActive("/") ? "nav-link active" : "nav-link"} to="/">
          Home
        </Link>
        <Link
          className={isActive("/projects") ? "nav-link active" : "nav-link"}
          to="/projects"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
