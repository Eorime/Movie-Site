import styled from "styled-components";

export const MovieContainer = styled.div``;

export const DetailsContaier = styled.div``;

export const Title = styled.h1``;

export const Spinner = styled.div``;

export const BackButton = styled.button`
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
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }
`;

export const Paragraph = styled.p``;

export const TrailerThumbnail = styled.div`
  width: 300px;
  height: 150px;
  object-fit: cover;
  object-position: top center;
`;
