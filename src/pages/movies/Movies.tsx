import React, { useEffect, useState } from "react";
import {
  DetailsButton,
  Error,
  FinalError,
  MovieContainer,
  MoviesContainer,
  PageContainer,
  Paragraph,
  Spinner,
  Thumbnail,
  Title,
} from "./style";
import { fetchData } from "../../api";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";

interface Movie {
  rank: number;
  title: string;
  big_image: string;
  rating: string;
}

const Movies: React.FC = () => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage, setMoviesPerPage] = useState<number>(10);
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchData(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          apiKey,
          apiHost
        );
        setMovieData(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movieData.slice(firstMovieIndex, lastMovieIndex);

  return (
    <PageContainer>
      <Navbar />
      <MoviesContainer>
        {isLoading ? (
          <Spinner>
            <BarLoader />
          </Spinner>
        ) : error ? (
          <Error>Error: {error}</Error>
        ) : Array.isArray(currentMovies) && currentMovies.length > 0 ? (
          currentMovies.map((movie: Movie, index: number) => (
            <MovieContainer key={index}>
              <Thumbnail src={movie.big_image} alt={movie.title} />
              <Title>{movie.title}</Title>
              <Paragraph>Rank: {movie.rank}</Paragraph>
              <Paragraph>Rating: {movie.rating}</Paragraph>
              <DetailsButton onClick={() => navigate(`top${movie.rank}`)}>
                See More
              </DetailsButton>
            </MovieContainer>
          ))
        ) : (
          <FinalError>No movies found.</FinalError>
        )}
      </MoviesContainer>
      <Pagination
        allMovies={movieData.length}
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />{" "}
    </PageContainer>
  );
};

export default Movies;
