import styled from "styled-components";

export const MovieContainer = styled.div``;

export const DetailsContaier = styled.div`
  position: absolute;
  margin-left: 600px;
  margin-top: 5px;
`;

export const Title = styled.h1``;

export const Spinner = styled.div`
  background-color: #1f9156;
  width: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
`;

export const BackButton = styled.button`
  background-color: #1f9156;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 600px;
  position: absolute;
  margin-left: -350px;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }
`;

export const PosterImage = styled.img`
  margin-left: 200px;
  border-radius: 10px;
  margin-top: 30px;
  width: 350px;
`;

export const AddToWatchlist = styled.button`
  background-color: #1f9156;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 600px;
  position: absolute;
  margin-left: -240px;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }
`;

export const Paragraph = styled.p``;

export const Trailer = styled.div`
  position: absolute;
  margin-left: 600px;
  margin-top: 285px;
`;

export const Frame = styled.iframe`
  width: 560px;
  height: 315px;

  @media screen and (max-width: 1500px) {
    width: 400px;
    height: 250px;
  }
`;
