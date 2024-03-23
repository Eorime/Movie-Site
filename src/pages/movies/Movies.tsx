import React, { useEffect, useState } from "react";
import {
  Error,
  FinalError,
  MoviesContainer,
  Paragraph,
  Spinner,
  Thumbnail,
} from "./style";
import { fetchData } from "../../api";
import { BarLoader } from "react-spinners";

interface Movie {
  rank: number;
  title: string;
  big_image: string;
  rating: string;
}

const Movies: React.FC = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchData(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          apiKey,
          apiHost
        );
        setMovieData(response);
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
    <MoviesContainer>
      {isLoading ? (
        <Spinner>
          <BarLoader />
        </Spinner>
      ) : error ? (
        <Error>Error: {error}</Error>
      ) : Array.isArray(movieData) && movieData.length > 0 ? (
        movieData.map((movie: Movie, index: number) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <Thumbnail src={movie.big_image} alt={movie.title} />
            <Paragraph>Rank: {movie.rank}</Paragraph>
            <Paragraph>Rating: {movie.rating}</Paragraph>
          </div>
        ))
      ) : (
        <FinalError>No movies found.</FinalError>
      )}
    </MoviesContainer>
  );
};

export default Movies;
