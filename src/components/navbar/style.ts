import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
  position: absolute;

  @media screen and (max-width: 1500px) {
    margin-top: 50px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;

  @media screen and (max-width: 1500px) {
    font-size: 15px;
  }
`;
