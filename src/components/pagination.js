import React from 'react';
import {
  divPagination,
  buttonPagination,
  buttonPaginationSelected,
  buttonPaginationNumber
} from "./pagination.module.css";

function Pagination(props) {
  return (
    <div className={divPagination}>
      <button className={`material-icons ${buttonPagination}`}>navigate_before</button>
      {Array.from(Array(3).keys()).map((value) => (
        <button className={`${buttonPaginationNumber} ${buttonPagination}`}>{value + 1}</button>
      ))}
      <button className={`material-icons ${buttonPagination}`}>navigate_next</button>
    </div>
  );
}

export default Pagination;
