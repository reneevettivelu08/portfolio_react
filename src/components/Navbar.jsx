import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {

     const { pathname } = useLocation();

  return (
    <nav className="nav">
      <h2>Renee Vetivelu</h2>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span>//</span> renee.dev
        </Link>
        <div className="nav__links">
          <Link
            to="/"
            className={`nav__link ${pathname === "/" ? "nav__link--active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav__link ${pathname === "/projects" ? "nav__link--active" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav__link ${pathname === "/contact" ? "nav__link--active" : ""}`}
          >
            Contact
          </Link>
          <a href="/resume.pdf" download className="nav__resume">
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}