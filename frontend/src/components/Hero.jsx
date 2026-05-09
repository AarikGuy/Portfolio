import profilePic from "../assets/profile_picture.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="intro">
      <div className="profile">
        <img src={profilePic} alt="Profile picture of Aarik Guy" />
      </div>

      <section id="hero">
        <div className="hero-content">
          <h1>
            Hello, I’m Aarik Guy
          </h1>

          <p>
            I’m currently a Software Accessibility Tester working at QualityLogic in the Boise Idaho office. 
            I specialize in ensuring clients websites/softwares are more accessible to a wider audience. I love solving problems, learning new tools, 
            and helping clients improve their user experience.
          </p>

          <Link to="/projects" className="btn">View My Work</Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;