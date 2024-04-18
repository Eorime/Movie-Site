import styled from "styled-components";

export const Container = styled.div`
  top: 20px;
  position: absolute;
  left: 20px;

  @media screen and (max-width: 1500px) {
    left: 20px;
    top: 10px;
  }
`;

export const SliderHeader = styled.h1`
  font-size: 32px;
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

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderContent = styled.div`
  margin-right: 100px;
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
`;

export const SliderTitle = styled.h2`
  position: absolute;
  margin-top: 80px;
  margin-left: 260px;
`;

export const SliderInfo = styled.p``;

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

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SeriesSliderTitle = styled.h2`
  position: absolute;
  margin-top: 790px;
  margin-left: 260px;
`;

export const Error = styled.div``;
