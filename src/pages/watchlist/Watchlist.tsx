import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Paragraph,
  RemoveButton,
  WatchlistContainer,
  WatchlistHeader,
  WatchlistMovie,
  WatchlistMovieImage,
  WatchlistMoviesContainer,
} from "./styles";
import { useWatchlist } from "../../context/WatchlistContextProvider";

const Watchlist: React.FC = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const handleRemoveFromWatchlist = (rank: number) => {
    removeFromWatchlist(rank);
  };
  return (
    <WatchlistContainer>
      <WatchlistHeader>Watchlist</WatchlistHeader>
      <Navbar />
      <WatchlistMoviesContainer>
        {watchlist.map((movie) => (
          <WatchlistMovie key={movie.rank}>
            <WatchlistMovieImage src={movie.big_image} />
            <Paragraph>{movie.title} </Paragraph>
            <RemoveButton onClick={() => handleRemoveFromWatchlist(movie.rank)}>
              Remove
            </RemoveButton>
          </WatchlistMovie>
        ))}
      </WatchlistMoviesContainer>
    </WatchlistContainer>
  );
};

export default Watchlist;
