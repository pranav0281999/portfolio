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
import projectImage from "../images/project.png";

function Project(props) {
  return (
    <div className={divProject}>
      <img src={projectImage} alt={"Project"} className={imgProject}/>

      <div className={divProjectDetails}>
        <p className={pTags}>#HTML #CSS #responsive</p>
        <div>
          <p className={pTitle}>Recipe Blog</p>
          <p className={pAbout}>
            In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
          </p>
        </div>
        <div className={divButtons}>
          <button className={buttonDemo}>Demo</button>
          <button className={buttonCode}>Code</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
