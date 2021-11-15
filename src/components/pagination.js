import React, {useEffect} from 'react';
import {
  divPagination,
  buttonPagination,
  buttonPaginationSelected,
  buttonPaginationNumber
} from "./pagination.module.css";

function Pagination({numOfProjects, setSelectedPage, selectedPage}) {
  useEffect(() => {
    setSelectedPage(1);
  }, [numOfProjects]);

  return (
    <div className={divPagination}>
      <button
        className={`material-icons ${buttonPagination}`}
        onClick={() => setSelectedPage((value) => {
          if (value !== 1) {
            return value - 1;
          } else {
            return value;
          }
        })}
      >
        navigate_before
      </button>
      {Array.from(Array(Math.ceil(numOfProjects / 3)).keys()).map((value) => (
        <button
          className={`${buttonPaginationNumber} ${buttonPagination} 
          ${(value + 1) === selectedPage ? buttonPaginationSelected : ""}`}
          onClick={() => setSelectedPage(value + 1)}
        >
          {value + 1}
        </button>
      ))}
      <button
        className={`material-icons ${buttonPagination}`}
        onClick={() => setSelectedPage((value) => {
          if (value !== Math.ceil(numOfProjects / 3)) {
            return value + 1;
          } else {
            return value;
          }
        })}
      >
        navigate_next
      </button>
    </div>
  );
}

export default Pagination;
