import styled from "styled-components";

export const WatchlistContainer = styled.div``;

export const WatchlistHeader = styled.h1`
  top: 20px;
  position: absolute;
  left: 20px;
  @media screen and (max-width: 1500px) {
    left: 20px;
    top: 10px;
    font-size: 18px;
  }
`;

export const WatchlistMoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-left: 280px;
`;

export const RemoveButton = styled.button`
  background-color: #1f9156;
  color: #ffffff;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  position: absolute;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }

  @media screen and (max-width: 1500px) {
    background-color: #1f9156;
    color: #ffffff;
    padding: 8px;
    border: none;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    position: absolute;
  }
`;

export const WatchlistMovie = styled.li`
  list-style-type: none;
`;

export const WatchlistMovieImage = styled.img`
  width: 270px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 50px;

  @media screen and (max-width: 1500px) {
    width: auto;
    height: 250px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;

  @media screen and (max-width: 1500px) {
    font-size: 16px;
  }
`;
