import React from "react";

const Pagination = ({ gamePerPage, totalGames, paginat}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination"> 
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => paginat(number)}>
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;





