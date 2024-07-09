import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <div className="tech">
        <ul>
          {details.tech.map((item, index) => (
            <li key={index} style={{ background: item.color }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <ul className="responsibilities">
        {details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul className="features">
        {details.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="links-btn">
        {details.links.map((item, index) =>
          Object.keys(item).map((key) => (
            <a key={index + key} href={item[key]} target="_blank">
              {key} link
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
