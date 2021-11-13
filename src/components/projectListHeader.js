import React from 'react';
import {
  divTagButtons,
  divProjectHeader,
  pHeading,
  buttonTag,
  buttonTagSelected
} from "./projectListHeader.module.css";

function ProjectListHeader({tags}) {
  return (
    <div className={divProjectHeader}>
      <p className={pHeading}>Personal Projects (3)</p>
      <div className={divTagButtons}>
        {tags.map((tag) => (
          <button className={`${buttonTag} ${tag.selected ? buttonTagSelected : ""}`}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectListHeader;
