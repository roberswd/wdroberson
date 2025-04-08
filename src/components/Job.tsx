import React, { useState, useRef, useEffect } from "react";
import "./css/Job.css"; //"./Job.css"; // Import the CSS file for animations

interface JobProps {
  companyName: string;
  logo: string;
  jobTitle: string;
  details: string;
}

const Job: React.FC<JobProps> = ({ companyName, logo, jobTitle, details }) => {
  const [isVisible, setIsVisible] = useState(false);
  const jobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        console.log(entry.target);
      },
      { threshold: 0.01 } // Adjust threshold as needed
    );

    if (jobRef.current) {
      observer.observe(jobRef.current);
    }

    return () => {
      if (jobRef.current) {
        observer.unobserve(jobRef.current);
      }
    };
  }, [jobRef]);

  // const d = details.map((detail, i) => {
  //   return <li key={companyName + i}>{detail}</li>;
  // });

  return (
    <div className="parent-container" ref={jobRef}>
      <div className={`${isVisible ? "job-cover hidden" : "job-cover"}`}></div>
      <div
        className={`${
          isVisible ? "job-container visible-job" : "job-container"
        }`}
      >
        <div className="left-column">
          <img
            src={logo}
            alt={`${companyName} logo`}
            className="company-logo"
          />
        </div>
        <div className="right-column">
          <div className="job-title">
            <div>
              <h1 className="job-heading">{companyName}</h1>
              <h2 className="job-title">{jobTitle}</h2>
            </div>
          </div>
          <div className="job-details">
            <h3>{details}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
