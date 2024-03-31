import React from "react";
import AppRoutes from "./AppRoutes";
import { AppContextProvider } from "./context/AppContextProvider";
import { WatchlistProvider } from "./context/WatchlistContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <WatchlistProvider>
        <AppRoutes />
      </WatchlistProvider>
    </AppContextProvider>
  );
};

export default App;
