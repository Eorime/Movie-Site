import React from "react";
import {
  PaginationContainer,
  PaginationList,
  PaginationListElements,
  StyledLink,
} from "./style";

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
    <PaginationContainer>
      <PaginationList className="pagination">
        {pageNumbers.map((number) => (
          <PaginationListElements
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <StyledLink
              to="#"
              className={`page-link`}
              isActive={currentPage === number}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(number);
              }}
            >
              {number}
            </StyledLink>
          </PaginationListElements>
        ))}
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
