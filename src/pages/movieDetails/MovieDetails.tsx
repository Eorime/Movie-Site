import React, { useEffect, useState } from "react";
import { BackButton, MovieContainer, PosterImage, Spinner } from "./style";
import { BarLoader } from "react-spinners";
import { fetchDataDetails } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<any>([]);
  const [error, setError] = useState<String>("");
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const { movieID } = useParams<{ movieID: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchDataDetails(
          `https://imdb-top-100-movies.p.rapidapi.com/${movieID}`,
          apiKey,
          apiHost
        );
        setMovieDetails(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieID]);

  console.log(movieDetails);

  return (
    <MovieContainer>
      {isLoading && (
        <Spinner>
          <BarLoader />
        </Spinner>
      )}
      <PosterImage
        src={movieDetails.big_image}
        alt={`${movieDetails.title} poster`}
      />
      <p>{movieDetails.title}</p>
      <p>{movieDetails.description}</p>
      <p>{movieDetails.director}</p>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </BackButton>
    </MovieContainer>
  );
};

export default MovieDetails;
