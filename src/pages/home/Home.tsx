import React from "react";
import { HomeContainer } from "./style";
import SignIn from "../signIn/SignIn";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
    </HomeContainer>
  );
};

export default Home;
