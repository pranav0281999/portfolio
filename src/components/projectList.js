import React, {useEffect, useState} from 'react';
import ProjectListHeader from "./projectListHeader";
import Project from "./project";
import Pagination from "./pagination";
import {
  divProjectList,
  divProjectListInner
} from "./projectList.module.css";
import projectImage from "../images/project.png";


function ProjectList(props) {
  const [tags, setTags] = useState([
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
  ]);

  const projects = [
    {
      image: projectImage,
      tags: ["Web", "Responsive"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Web", "React.js"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Three.js", "Responsive"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Depth Sensing", "Kinect"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Processing", "Kinect"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Kinect", "Three.js"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Three.js", "web"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
    {
      image: projectImage,
      tags: ["Depth Sensing", "Processing"],
      title: "Recipe Blog",
      description: "In this project, I work with HTML and CSS to create a responsive" +
        " page. The design is from devchallenge.io. Donec aliquam est dui, vel " +
        "vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      demo: "https://google.com",
      code: "https://google.com",
    },
  ];

  useEffect(() => {
    let selectedTags = tags.filter(tag => tag.selected);

    let selectedProjects = projects.filter(project => {
      let flag = true;

      selectedTags.forEach(tag => {
        if (!project.tags.includes(tag.name)) {
          flag = false;
        }
      });

      return flag;
    });

    setSelectedProjects(selectedProjects);
  }, [tags]);

  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedProjects, setSelectedProjects] = useState(projects);

  return (
    <div className={divProjectList}>
      <ProjectListHeader
        tags={tags}
        setTags={setTags}
        numOfProjects={selectedProjects.length}
      />
      <div className={divProjectListInner}>
        {selectedProjects.slice((selectedPage - 1) * 3, selectedPage * 3).map(project => (
          <Project project={project}/>
        ))}
      </div>
      <Pagination
        numOfProjects={selectedProjects.length}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
    </div>
  );
}

export default ProjectList;
