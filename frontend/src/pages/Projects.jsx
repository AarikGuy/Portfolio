import ProjectCarousel from "../components/ProjectCarousel";
import projectsImage from "../assets/projectsImage.jpg";

function Projects() {
  return (
    <>
    <title>Projects | Portfolio</title>
    <div className="intro">
      <div className="projects-intro">
        <h2>Projects</h2>
        <p>
          Here are some of the projects I’ve built, showcasing my experience in
          full-stack development, test suites, modern web technologies,
          and personal interests. Each project reflects my focus on clean design, usability, and
          building practical, real-world solutions.
        </p>
      </div>

      <div className="projects-pic">
        <img src={projectsImage}></img>
      </div>
    </div>

    
    

    

      <ProjectCarousel />
      </>
  );
}

export default Projects;