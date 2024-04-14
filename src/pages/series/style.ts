import styled from "styled-components";

export const PageContainer = styled.div``;

export const SeriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-left: 180px;
`;

export const Spinner = styled.div`
  background-color: #1f9156;
  position: fixed;
  left: 50%;
  top: 50%;
`;

export const Error = styled.div``;

export const SerieContainer = styled.div`
  margin: 20px;
`;

export const FinalError = styled.div``;

export const Paragraph = styled.p``;

export const Title = styled.h2``;

export const Thumbnail = styled.img`
  width: 270px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DetailsButton = styled.button`
  background-color: #1f9156;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    background-color: #609f7e;
  }
`;
