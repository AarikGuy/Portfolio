import facebookLogo from "../assets/facebook.png";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import { Link } from "react-router-dom";


function NavBar() {
    return(
    <header>
        <nav>
            <ul className="nav-links">
                <li><Link to="/">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        <div className="contact-logos">
            <ul>
                <li><a href="https://www.facebook.com/aarik.guy/" aria-label="facebook"><img src={facebookLogo}></img></a></li>
                <li><a href="https://www.instagram.com/aarikguy/" aria-label="instragram"><img src={instagramLogo}></img></a></li>
                <li><a href="https://www.linkedin.com/in/aarik-guy/" aria-label="linkedin"><img src={linkedinLogo}></img></a></li>
                <li><a href="https://github.com/AarikGuy" aria-label="github"><img src={githubLogo}></img></a></li>
            </ul>
        </div>
        </nav>
    </header>
    );
}

export default NavBar;