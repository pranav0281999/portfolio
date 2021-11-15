import React from 'react';
import {
  divTagButtons,
  divProjectHeader,
  pHeading,
  buttonTag,
  buttonTagSelected
} from "./projectListHeader.module.css";

function ProjectListHeader({tags, setTags, numOfProjects}) {
  const selectTag = (tag) => {
    tag.selected = !tag.selected;
    setTags([...tags]);
  }

  return (
    <div className={divProjectHeader}>
      <p className={pHeading}>{`Personal Projects (${numOfProjects})`}</p>
      <div className={divTagButtons}>
        {tags.map((tag) => (
          <button
            className={`${buttonTag} ${tag.selected ? buttonTagSelected : ""}`}
            onClick={() => selectTag(tag)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectListHeader;
