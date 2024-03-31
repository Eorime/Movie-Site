import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { WatchlistContainer } from "./styles";
import { useWatchlist } from "../../context/WatchlistContextProvider";

const Watchlist: React.FC = () => {
  const { watchlist } = useWatchlist();
  console.log(watchlist);
  return (
    <WatchlistContainer>
      <Navbar />
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.rank}>{movie.title}</li>
        ))}
      </ul>
      Watchlist
    </WatchlistContainer>
  );
};

export default Watchlist;
