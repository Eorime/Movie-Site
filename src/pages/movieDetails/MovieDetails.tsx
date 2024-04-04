import React, { useEffect, useState } from "react";
import {
  AddToWatchlist,
  BackButton,
  DetailsContaier,
  MovieContainer,
  Paragraph,
  PosterImage,
  Spinner,
  Title,
  TrailerThumbnail,
} from "./style";
import { BarLoader } from "react-spinners";
import { fetchDataDetails } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useWatchlist } from "../../context/WatchlistContextProvider";
import { StyledLink } from "../../components/navbar/style";

const MovieDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<any>([]);
  const [error, setError] = useState<String>("");
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const { movieID } = useParams<{ movieID: string }>();
  const navigate = useNavigate();
  const { addToWatchlist } = useWatchlist();

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

  const handleAddToWatchlist = () => {
    addToWatchlist(movieDetails);
  };

  console.log(movieDetails);

  return (
    <MovieContainer>
      <Navbar />
      {isLoading && (
        <Spinner>
          <BarLoader />
        </Spinner>
      )}
      <PosterImage
        src={movieDetails.big_image}
        alt={`${movieDetails.title} poster`}
      />
      <DetailsContaier>
        <Title>{movieDetails.title}</Title>
        <Paragraph>{movieDetails.description}</Paragraph>
        <Paragraph>{`Director: ${movieDetails.director}`}</Paragraph>
        <Paragraph>{`Genre: ${movieDetails.genre}`}</Paragraph>
        <StyledLink to={movieDetails.trailer} target="_blank"></StyledLink>
      </DetailsContaier>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </BackButton>
      <AddToWatchlist onClick={handleAddToWatchlist}>
        Add to Watchlist
      </AddToWatchlist>
      <TrailerThumbnail>
        <iframe
          width="560"
          height="315"
          src={movieDetails.trailer_embed_link}
          title="Trailer"
          allowFullScreen
        ></iframe>
      </TrailerThumbnail>
    </MovieContainer>
  );
};

export default MovieDetails;
