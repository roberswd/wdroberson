import React from "react";
import "../App.css";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="about">
      <div>
        <p>Hi, my name is</p>
        <p className="name">Wesley Roberson</p>
        <p> A Fullstack Developer based in Austin, TX</p>
      </div>
      <div>
        <img
          alt="WD Roberson"
          src="src/assets/wd_roberson.jpg"
          title="WD Roberson"
        />
      </div>
    </section>
  );
};

export default About;
