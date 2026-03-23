import facebookLogo from "../assets/facebook.png";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";


function Navbar() {
    return(
    <header>
        <nav>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        <div className="contact-logos">
            <ul>
                <li><a href="https://www.facebook.com/aarik.guy/"><img src={facebookLogo}></img></a></li>
                <li><a href="https://www.instagram.com/aarikguy/"><img src={instagramLogo}></img></a></li>
                <li><a href="https://www.linkedin.com/in/aarik-guy/"><img src={linkedinLogo}></img></a></li>
                <li><a href="https://github.com/AarikGuy"><img src={githubLogo}></img></a></li>
            </ul>
        </div>
        </nav>
    </header>
    );
}

export default Navbar;