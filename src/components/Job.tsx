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
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (jobRef.current) {
      observer.observe(jobRef.current);
    }

    return () => {
      if (jobRef.current) {
        observer.unobserve(jobRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={jobRef}
      className={`job-container ${isVisible ? "slide-in" : "hidden"}`}
    >
      <div className="left-column">
        <img src={logo} alt={`${companyName} logo`} className="company-logo" />
      </div>
      <div className="right-column">
        <div className="job-title">
          <div>
            <h2>{companyName}</h2>
            <h3>{jobTitle}</h3>
          </div>
        </div>
        <div className="job-details">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
