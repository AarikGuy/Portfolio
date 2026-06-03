import facebookLogo from "../assets/facebook.png";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <ul className="nav-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="social-menu">
          <button
            type="button"
            className="social-toggle"
            aria-expanded={socialOpen}
            aria-controls="social-dropdown"
            onClick={() => setSocialOpen(v => !v)}
          >
            Social
          </button>

          <ul
            id="social-dropdown"
            className={`contact-logos ${socialOpen ? "open" : ""}`}
          >
            <li><a href="https://www.facebook.com/aarik.guy/" aria-label="Facebook"><img src={facebookLogo} alt="" /></a></li>
            <li><a href="https://www.instagram.com/aarikguy/" aria-label="Instagram"><img src={instagramLogo} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/aarik-guy/" aria-label="LinkedIn"><img src={linkedinLogo} alt="" /></a></li>
            <li><a href="https://github.com/AarikGuy" aria-label="GitHub"><img src={githubLogo} alt="" /></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;