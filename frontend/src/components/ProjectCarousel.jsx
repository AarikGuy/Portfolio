import capstoneProject from '../assets/capstone.png';
import reactLogo from '../assets/react.svg';
import gamePic from '../assets/game.png';
import myLeg from '../assets/MyLeg.png';

function ProjectCarousel() {

  const projects = [
    {
      title: "Wellness App",
      description: "Discover a cross-platform wellness application that transforms mental health improvement into an engaging, game-like experience.",
      image: capstoneProject,
      link: "#"
    },
    {
      title: "Top-Down Pixel Art Game",
      description: "A top-down 2D pixel art game built in Godot, featuring custom tilemaps, dialogue systems, and core gameplay mechanics. Developed with GDScript and C#, with original art and audio, and planned for Steam release.",
      image: gamePic,
      link: "#"
    },
    {
      title: "Legbook",
      description: "Essentially a miniaturized Facebook clone made for my Full Stack Web Development class in University.",
      image: myLeg,
      link: "#"
    }
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide">

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>


      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="carousel-image-wrapper">
            <img
              src={project.image}
              className="carousel-image"
              alt={project.title}
            />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              {/* <p>
                <a href={project.link} aria-label={`View ${project.title} details`}>
                  View Project →
                </a>
              </p> */}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectCarousel;