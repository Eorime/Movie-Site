import { Link } from "react-router-dom";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
`;

export const PaginationList = styled.ul`
  list-style-type: none;
`;

export const PaginationListElements = styled.li`
  display: inline-block;
  padding: 15px;
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "gray" : "#f5f5f5")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;
