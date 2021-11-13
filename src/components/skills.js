import React, {useState} from 'react';
import {
  divSkillBarProgress,
  divSkills,
  divSkill,
  divSkillBar,
  pHeading,
  pSkill,
} from "./skills.module.css";

function Skills(props) {
  const skills = [
    {
      name: "Javascript",
      progress: 80
    },
    {
      name: "React.js",
      progress: 80
    },
    {
      name: "Aurelia.js",
      progress: 70
    },
    {
      name: "Three.js",
      progress: 70
    },
    {
      name: "Core Java",
      progress: 70
    },
    {
      name: "Git / Github",
      progress: 80
    },
  ];

  return (
    <div className={divSkills}>
      <p className={pHeading}>Skills</p>
      {skills.map(skill => (
        <div className={divSkill}>
          <p className={pSkill}>{skill.name}</p>
          <div className={divSkillBar}>
            <div
              style={{
                width: `${skill.progress}%`,
              }}
              className={divSkillBarProgress}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
