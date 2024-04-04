import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import { BarLoader } from "react-spinners";
import { fetchData } from "../../api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  DetailsButton,
  Error,
  FinalError,
  PageContainer,
  Paragraph,
  SerieContainer,
  SeriesContainer,
  Spinner,
  Thumbnail,
  Title,
} from "./style";

interface Serie {
  rank: string;
  title: string;
  big_image: string;
  rating: string;
}

const Series: React.FC = () => {
  const [seriesData, setSeriesData] = useState<Serie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [seriesPerPage, setSeriesPerPage] = useState<number>(10);
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const resp = await fetchData(
          "https://imdb-top-100-movies.p.rapidapi.com/series/",
          apiKey,
          apiHost
        );
        setSeriesData(resp);
        console.log(seriesData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSeries();
  }, []);

  const lastSeriesIndex = currentPage * seriesPerPage;
  const firstSeriesIndex = lastSeriesIndex - seriesPerPage;
  const currentSeries = seriesData.slice(firstSeriesIndex, lastSeriesIndex);

  return (
    <PageContainer>
      <Navbar />
      <SeriesContainer>
        {isLoading ? (
          <Spinner>
            <BarLoader />
          </Spinner>
        ) : error ? (
          <Error>Error: {error}</Error>
        ) : Array.isArray(currentSeries) && currentSeries.length > 0 ? (
          currentSeries.map((series: Serie, index: number) => (
            <SerieContainer key={index}>
              <Thumbnail src={series.big_image} alt={series.title} />
              <Title>{series.title}</Title>
              <Paragraph>Rank: {series.rank}</Paragraph>
              <Paragraph>Rating: {series.rating}</Paragraph>
              <DetailsButton onClick={() => navigate(`top${series.rank}`)}>
                See More
              </DetailsButton>
            </SerieContainer>
          ))
        ) : (
          <FinalError>No movies found.</FinalError>
        )}
      </SeriesContainer>
      <Pagination
        allMovies={seriesData.length}
        moviesPerPage={seriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />{" "}
    </PageContainer>
  );
};
export default Series;
