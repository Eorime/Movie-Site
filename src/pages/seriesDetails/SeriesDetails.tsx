import React, { useEffect, useState } from "react";
import {
  AddToWatchlist,
  BackButton,
  SerieContainer,
  Paragraph,
  PosterImage,
  Spinner,
  TrailerThumbnail,
} from "./style";
import { BarLoader } from "react-spinners";
import { fetchDataDetails } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useWatchlist } from "../../context/WatchlistContextProvider";
import { StyledLink } from "../../components/navbar/style";

const SeriesDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [serieDetails, setSerieDetails] = useState<any>([]);
  const [error, setError] = useState<String>("");
  const apiKey = "844b22c324msh1e3b8a407db1434p1264f4jsnb943ac8c12f9";
  const apiHost = "imdb-top-100-movies.p.rapidapi.com";
  const { seriesID } = useParams<{ seriesID: string }>();
  const navigate = useNavigate();
  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await fetchDataDetails(
          `https://imdb-top-100-movies.p.rapidapi.com/series/${seriesID}`,
          apiKey,
          apiHost
        );
        setSerieDetails(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSerie();
  }, [seriesID]);

  const handleAddToWatchlist = () => {
    addToWatchlist(serieDetails);
  };

  console.log(serieDetails);

  return (
    <SerieContainer>
      <Navbar />
      {isLoading && (
        <Spinner>
          <BarLoader />
        </Spinner>
      )}
      <PosterImage
        src={serieDetails.big_image}
        alt={`${serieDetails.title} poster`}
      />
      <Paragraph>{serieDetails.title}</Paragraph>
      <Paragraph>{serieDetails.description}</Paragraph>
      <Paragraph>{`Director: ${serieDetails.director}`}</Paragraph>
      <Paragraph>{`Genre: ${serieDetails.genre}`}</Paragraph>
      <StyledLink to={serieDetails.trailer} target="_blank"></StyledLink>
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
          src={serieDetails.trailer_embed_link}
          title="Trailer"
          allowFullScreen
        ></iframe>
      </TrailerThumbnail>
    </SerieContainer>
  );
};

export default SeriesDetails;
