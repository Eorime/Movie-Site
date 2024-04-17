import React from "react";
import { HomeContainer } from "./style";
import SignIn from "../signIn/SignIn";
import Navbar from "../../components/navbar/Navbar";
import MainSlider from "../../components/mainSlider/MainSlider";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MainSlider />
    </HomeContainer>
  );
};

export default Home;
