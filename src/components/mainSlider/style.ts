import styled from "styled-components";

export const Container = styled.div`
  top: 20px;
  position: absolute;
  left: 20px;

  @media screen and (max-width: 1500px) {
    left: 50px;
    top: 10px;
  }

  @media screen and (max-width: 500px) {
    left: 20px;
    top: 10px;
  }
`;

export const SliderHeader = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 1500px) {
    font-size: 18px;
    margin-left: -32px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 150px;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  max-width: 80vw;
  height: 50vw;
  position: absolute;
  margin-left: 40%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    margin-left: 55%;
    margin-top: 120px;
  }
`;

export const SliderContent = styled.div`
  margin-right: 100px;
  @media screen and (max-width: 1500px) {
    margin-right: 50px;
  }
`;

export const SliderImage = styled.img`
  border-radius: 20px;
  height: 400px;
  width: auto;
  transition: height 0.3s ease;

  &: hover {
    cursor: pointer;
    height: 500px;
  }

  @media screen and (max-width: 1500px) {
    height: 250px;
    border-radius: 5px;

    &: hover {
      cursor: pointer;
      height: 300px;
    }
  }
`;

export const SliderTitle = styled.h2`
  position: absolute;
  margin-top: 80px;
  margin-left: 260px;

  @media screen and (max-width: 1500px) {
    margin-left: 200px;
    font-size: 18px;
  }
`;

export const SliderInfo = styled.p`
  @media screen and (max-width: 1500px) {
    font-size: 10px;
  }
`;

export const Spinner = styled.div`
  background-color: #1f9156;
  position: fixed;
  left: 50%;
  top: 50%;
`;

export const SeriesSliderContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1300px;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  max-width: 80vw;
  height: calc(50vw-20px);
  position: absolute;
  margin-left: 40%;
  margin-bottom: -1440px;
  bottom: 20%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    margin-left: 55%;
    margin-bottom: -900px;
  }
`;

export const SeriesSliderTitle = styled.h2`
  position: absolute;
  margin-top: 790px;
  margin-left: 260px;

  @media screen and (max-width: 1500px) {
    margin-top: 500px;
    margin-left: 200px;
    font-size: 18px;
  }
`;

export const Error = styled.div``;
