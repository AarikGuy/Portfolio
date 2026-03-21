import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import ProjectCarousel from "./components/ProjectCarousel";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <ProjectCarousel />
      <Footer />
    </>
  );
  // return <h1>Hello React</h1>;
}

export default App;