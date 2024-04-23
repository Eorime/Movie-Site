import React from "react";
import { NavbarContainer, StyledLink } from "./style";
import { routes } from "../../constants/routes";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to={routes.home}>Home</StyledLink>
      <StyledLink to={routes.movies}>Movies</StyledLink>
      <StyledLink to={routes.series}>Series</StyledLink>
      <StyledLink to={routes.watchlist}>Watchlist</StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
