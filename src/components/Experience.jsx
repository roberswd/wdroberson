import React from "react";
import Job from "./Job";
import { LUMEN_DETAILS, LUMEN_LOGO, META_DETAILS, META_LOGO } from "./Consts";

export const Experience = () => {
  return (
    <div className="experience">
      <h1 id="experience">Experience</h1>
      <Job
        companyName="Meta Technologies"
        logo={META_LOGO}
        jobTitle="Software Engineer, E4"
        details={META_DETAILS}
      ></Job>
      <Job
        companyName="Lumen Technologies"
        logo={LUMEN_LOGO}
        jobTitle="Software Developer II"
        details={LUMEN_DETAILS}
      ></Job>
    </div>
  );
};
