import React from "react";
import AppRoutes from "./AppRoutes";
import { AppContextProvider } from "./context/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};

export default App;
