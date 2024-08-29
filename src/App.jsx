import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Experience } from "./components/Experience";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { Contact } from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <About />
      </div>
      <div className="content">
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </>
  );
}

export default App;
