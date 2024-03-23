import React, { useState } from "react";
import { MovieContainer, Spinner } from "./style";
import { BarLoader } from "react-spinners";

const MovieDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <MovieContainer>
      {isLoading && (
        <Spinner>
          <BarLoader />
        </Spinner>
      )}
      MovieDetails
    </MovieContainer>
  );
};

export default MovieDetails;
