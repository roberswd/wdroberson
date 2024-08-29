import React from "react";
import "../App.css";
import SectionTitle from "./SectionTitle";
import profile from "../assets/wd_roberson.jpg";

const About = () => {
  return (
    <section className="about">
      <div>
        <p>Hi, my name is</p>
        <p className="name">Wesley Roberson</p>
        <p> A Fullstack Developer based in Austin, TX</p>
      </div>
      <div>
        <img alt="WD Roberson" src={profile} title="WD Roberson" />
      </div>
    </section>
  );
};

export default About;
