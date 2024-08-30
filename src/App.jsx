import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Experience } from "./components/Experience";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { Contact } from "./components/Contact";
import Projects from "./components/Projects";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
  return (
    <>
      <div className="splash splash::before splash::after"></div>
      <div className="container">
        <div className="hero">
          <Navbar isMobile={isMobile} />
          <Hero />
        </div>
        <div className="content">
          <About />
          <Experience />
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
