import React from 'react';
import ProjectListHeader from "./projectListHeader";
import Project from "./project";
import Pagination from "./pagination";
import {
  divProjectList
} from "./projectList.module.css";


function ProjectList(props) {
  const tags = [
    {
      name: "React.js",
      selected: false
    },
    {
      name: "Three.js",
      selected: false
    },
    {
      name: "Web",
      selected: false
    },
    {
      name: "Responsive",
      selected: false
    },
    {
      name: "Kinect",
      selected: false
    },
    {
      name: "Depth Sensing",
      selected: false
    },
    {
      name: "Processing",
      selected: false
    },
  ];

  const projects = [];

  const selectedProjects = [];

  return (
    <div className={divProjectList}>
      <ProjectListHeader tags={tags}/>
      <Project/>
      <Project/>
      <Project/>
      <Pagination/>
    </div>
  );
}

export default ProjectList;
