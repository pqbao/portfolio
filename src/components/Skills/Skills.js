import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const [showAll, setShowAll] = useState(false);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className={`skills ${showAll ? "show-all" : ""}`}>
          {SKILLS.slice(0, showAll ? SKILLS.length : 4).map((item, index) => (
            <SkillCard
              key={index}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <button onClick={handleToggle} className="toggle-button">
          {showAll ? (
            <div className="toggle-arrow">
              Collapse
              <span className="material-icons-round icon-toggle">
                keyboard_double_arrow_up
              </span>
            </div>
          ) : (
            <div className="toggle-arrow">
              See more
              <span className="material-icons-round icon-toggle">
                keyboard_double_arrow_down
              </span>
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default Skills;
