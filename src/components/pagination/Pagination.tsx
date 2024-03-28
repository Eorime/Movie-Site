import React from "react";

interface PaginationProps {
  allMovies: number;
  moviesPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  allMovies,
  moviesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
        >
          <a
            href="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(number);
            }}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
