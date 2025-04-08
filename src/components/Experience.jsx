import React from "react";
import Job from "./Job";
import { LUMEN_DETAILS, META_DETAILS } from "./Consts";
import META_LOGO from "../assets/meta_logo.svg";
import LUMEN_LOGO from "../assets/lumen_logo.svg";

export const Experience = () => {
  return (
    <div className="experience">
      <h1 id="experience">Experience</h1>
      <Job
        companyName="Meta Platforms"
        logo={META_LOGO}
        jobTitle="Software Engineer, E4"
        details={META_DETAILS[0]}
      ></Job>
      <Job
        companyName="Lumen Technologies"
        logo={LUMEN_LOGO}
        jobTitle="Software Developer II"
        details={LUMEN_DETAILS[0]}
      ></Job>
    </div>
  );
};
