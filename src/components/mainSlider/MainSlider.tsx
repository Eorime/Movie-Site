import React, { useEffect, useState } from "react";
import {
  Container,
  Error,
  SeriesSliderContainer,
  SeriesSliderTitle,
  SliderContainer,
  SliderContent,
  SliderHeader,
  SliderImage,
  SliderInfo,
  SliderTitle,
  Spinner,
} from "./style";
import { fetchData } from "../../api";
import { BarLoader } from "react-spinners";

interface Movie {
  rank: string;
  big_image: string;
  description: string;
}

interface Serie {
  rank: string;
  big_image: string;
  description: string;
}

//map thru those and create a component for each

const MainSlider = () => {
  const [movieData, setMovieData] = useState([]);
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sliderMovies = 30;
  const [seriesData, setSeriesData] = useState([]);
  const sliderSeries = 30;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchData(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          apiKey,
          apiHost
        );
        setMovieData(response.slice(0, sliderMovies));
        console.log(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetchData(
          "https://imdb-top-100-movies.p.rapidapi.com/series",
          apiKey,
          apiHost
        );
        setSeriesData(response.slice(0, sliderSeries));
        console.log(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeries();
  }, []);

  return (
    <Container>
      <SliderHeader>Browse Top 100 Movies and Series of All Time</SliderHeader>
      <SliderTitle>Movies</SliderTitle>
      <SeriesSliderTitle>Series</SeriesSliderTitle>
      {isLoading ? (
        <Spinner>
          <BarLoader />
        </Spinner>
      ) : error ? (
        <Error>Error: {error}</Error>
      ) : (
        <SliderContainer>
          {movieData.map((movie: Movie, index) => (
            <SliderContent key={movie.rank}>
              <SliderImage src={movie.big_image} />
              <SliderInfo>{movie.description}</SliderInfo>
            </SliderContent>
          ))}
        </SliderContainer>
      )}
      <SeriesSliderContainer>
        {seriesData.map((serie: Serie, index) => (
          <SliderContent key={serie.rank}>
            <SliderImage src={serie.big_image} />
            <SliderInfo>{serie.description}</SliderInfo>
          </SliderContent>
        ))}
      </SeriesSliderContainer>
    </Container>
  );
};

export default MainSlider;
