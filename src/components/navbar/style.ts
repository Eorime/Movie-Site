import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
