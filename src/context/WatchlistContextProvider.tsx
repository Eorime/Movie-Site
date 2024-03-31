import React from "react";
import { useState, useContext, createContext } from "react";

interface Movie {
  rank: number;
  title: string;
  big_image: string;
  rating: string;
  description: string;
}

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (rank: number) => void;
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: (rank: number) => {},
});

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const addToWatchlist = (movie: Movie) => {
    const isAlreadyAdded = watchlist.some((m) => m.rank === movie.rank);

    if (!isAlreadyAdded) {
      setWatchlist((prev) => [...prev, movie]);
    } else {
      console.log("already there");
    }
  };

  const removeFromWatchlist = (rank: number) => {
    setWatchlist((prev) => prev.filter((movie) => movie.rank !== rank));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
