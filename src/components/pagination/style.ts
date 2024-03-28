import { Link } from "react-router-dom";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  text-align: center;
`;

export const PaginationList = styled.ul`
  list-style-type: none;
`;

export const PaginationListElements = styled.li`
  display: inline-block;
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
