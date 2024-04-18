import React, { useEffect, useState } from "react";
import {
  Container,
  SliderContainer,
  SliderContent,
  SliderHeader,
  SliderImage,
  SliderInfo,
} from "./style";
import { fetchData } from "../../api";

interface Movie {
  rank: string;
  title: string;
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

  return (
    <Container>
      <SliderHeader>Browse Top 100 Movies and Series of All Time</SliderHeader>
      <SliderContainer>
        {movieData.map((movie: Movie, index) => (
          <SliderContent key={movie.rank}>
            <SliderImage src={movie.big_image} />
            <SliderInfo>{movie.description}</SliderInfo>
          </SliderContent>
        ))}
      </SliderContainer>
    </Container>
  );
};

export default MainSlider;
