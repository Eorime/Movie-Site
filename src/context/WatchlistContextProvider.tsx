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
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  addToWatchlist: () => {},
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

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
