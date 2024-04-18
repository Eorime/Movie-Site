import styled from "styled-components";

export const PageContainer = styled.div``;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-left: 180px;
`;

export const MovieContainer = styled.div`
  margin: 20px;
  margin-top: 50px;
`;

export const Spinner = styled.div`
  background-color: #1f9156;
  position: fixed;
  left: 50%;
  top: 50%;
`;

export const Error = styled.div``;

export const FinalError = styled.div``;

export const Paragraph = styled.p`
  @media screen and (max-width: 1500px) {
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  @media screen and (max-width: 1500px) {
    font-size: 16px;
  }
`;

export const Thumbnail = styled.img`
  width: 270px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 1500px) {
    width: 150px;
    height: auto;
  }
`;

export const DetailsButton = styled.button`
  background-color: #1f9156;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }

  @media screen and (max-width: 1500px) {
    font-size: 10px;
    padding: 7px;
    border-radius: 5px;
  }
`;
