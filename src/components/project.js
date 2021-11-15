import React from 'react';
import {
  divProjectDetails,
  divProject,
  divButtons,
  pTags,
  pTitle,
  pAbout,
  buttonDemo,
  buttonCode,
  imgProject
} from "./project.module.css";

function Project({project}) {
  return (
    <div className={divProject}>
      <img src={project.image} alt={"Project"} className={imgProject}/>

      <div className={divProjectDetails}>
        <p className={pTags}>{project.tags.map(tag => `#${tag.toLowerCase().replace(" ", "")} `)}</p>
        <div>
          <p className={pTitle}>{project.title}</p>
          <p className={pAbout}>{project.description}</p>
        </div>
        <div className={divButtons}>
          <a
            className={buttonDemo}
            href={project.demo}
            target={"_blank"}
          >
            Demo
          </a>
          <a
            className={buttonCode}
            href={project.code}
            target={"_blank"}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
