import React from "react";
import Job from "./Job";
import { META_LOGO } from "./Consts";

export const Experience = () => {
  const metaDetails = (
    <ul>
      <li>
        Developed a self-service support platform for program managers to create
        customizable routing to connect millions of users to specialized agents,
        help articles, or self-help tools depending on their issue, processing
        millions of requests per second and generating billions in revenue.
      </li>
      <li>
        Led the design and implementation of a web application for debugging
        entities created within the platform, reducing on-call toil by 80% and
        debugging time by centralizing the view of contributing factors (e.g.,
        user locale, spending, market, etc.) from dozens of systems.
      </li>
      <li>
        Led the onboarding of multiple internal tools to the platform by
        collaborating with project managers and cross-functional developers,
        overhauling APIs for platform integration, creating customizable React
        components, running data migration scripts, and writing unit and
        integration tests to ensure compatibility, stability, and prevent
        downtime.
      </li>
      <li>
        Collaborated with project managers to identify improvements in systems
        and workflows, including implementing typeahead and context-based Common
        Response widgets to reduce Total Resolution Time, updating
        correspondence strategies to boost CSAT survey response rates, and
        enhancing logging for better data collection.
      </li>
    </ul>
  );

  const lumenDetails = (
    <ul>
      <li>
        Created a centralized ticketing application for displaying user help
        desk tickets and outage reports using the Spring Framework and Apache
        Kafka, eliminating navigation between applications, and reducing the
        time spent training new developers
      </li>
      <li>
        Expanded upon multiple ticketing application APIs using Java, Hibernate,
        and SQL, creating data objects and adding functionality based on
        customer requirements
      </li>
    </ul>
  );
  return (
    <>
      <h1 id="experience">Experience</h1>
      <Job
        companyName="Meta"
        logo={META_LOGO}
        // src\assets\meta_icon.svg
        jobTitle="Software Engineer II"
        details={metaDetails}
      ></Job>
      <Job
        companyName="Lumen"
        logo="https://assets.lumen.com/is/content/Lumen/Lumen-logo-R?Creativeid=dd032ee8-6530-4437-8e9d-209b357060ce"
        jobTitle="Software Developer II"
        details={lumenDetails}
      ></Job>
    </>
  );
};
