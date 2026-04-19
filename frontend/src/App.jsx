import { Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

// pages
import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";
import Projects from "./pages/Projects";
import ContactInfo from "./pages/ContactInfo";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
      <Footer />
    </div>
  );
  // return <h1>Hello React</h1>;
}

export default App;