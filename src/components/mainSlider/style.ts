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
  margin-top: 200px;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  max-width: 80vw;
  height: 400px;
`;

export const SliderContent = styled.div``;

export const SliderImage = styled.img`
  border-radius: 20px;
`;

export const SliderTitle = styled.h3``;

export const SliderInfo = styled.p``;
