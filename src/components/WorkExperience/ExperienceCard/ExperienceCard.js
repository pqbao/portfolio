import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>
        {details.title}
        <a
          href="https://aptech.cusc.vn/"
          className="company-name"
          target="_blank"
        >
          CUSC
        </a>
      </h6>
      <div className="work-duration">{details.date}</div>

      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
