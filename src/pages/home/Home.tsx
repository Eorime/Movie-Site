import React, { useEffect, useState } from "react";
import { HomeContainer } from "./style";
import { fetchData } from "../../api";

interface Movie {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
}

const Home: React.FC = () => {
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
    <HomeContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : Array.isArray(movieData) && movieData.length > 0 ? (
        movieData.map((movie: Movie, index: number) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <img src={movie.thumbnail} alt={movie.title} />
            <p>Rank: {movie.rank}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))
      ) : (
        <div>No movies found.</div>
      )}
    </HomeContainer>
  );
};

export default Home;
