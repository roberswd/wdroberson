import React from "react";
import "../App.css";
// import profile from "../assets/wd_roberson.jpg";

const Hero = (props) => {
  const { isMobile } = props;
  return (
    <section className="hero_content">
      <div>
        <p>Welcome, my name is</p>
        <p className="name">Wesley Roberson</p>
        <p> A Full Stack Software Engineer based in Austin, TX</p>
      </div>
      {/* <div className="hero_image"></div> */}
    </section>
  );
};

export default Hero;
