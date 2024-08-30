import React from "react";
import "../App.css";
import SectionTitle from "./SectionTitle";
import profile from "../assets/wd_roberson.jpg";

const Hero = (props) => {
  const { isMobile } = props;
  return (
    <section className="hero_content">
      <div>
        <p>Welcome, my name is</p>
        <p className="name">Wesley Roberson</p>
        <p> A Fullstack Developer based in Austin, TX</p>
      </div>
      {/* <div>
        <img alt="WD Roberson" src={profile} />
      </div> */}
    </section>
  );
};

export default Hero;
