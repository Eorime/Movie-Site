import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  RemoveButton,
  WatchlistContainer,
  WatchlistMovie,
  WatchlistMovieImage,
} from "./styles";
import { useWatchlist } from "../../context/WatchlistContextProvider";

const Watchlist: React.FC = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const handleRemoveFromWatchlist = (rank: number) => {
    removeFromWatchlist(rank);
  };
  console.log(watchlist);
  return (
    <WatchlistContainer>
      <Navbar />
      {watchlist.map((movie) => (
        <WatchlistMovie key={movie.rank}>
          {movie.title} <WatchlistMovieImage src={movie.big_image} />
          <RemoveButton onClick={() => handleRemoveFromWatchlist(movie.rank)}>
            Remove
          </RemoveButton>
        </WatchlistMovie>
      ))}
    </WatchlistContainer>
  );
};

export default Watchlist;
