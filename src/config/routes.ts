import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Watchlist from "../pages/watchlist/Watchlist";
import Movies from "../pages/movies/Movies";
import MovieDetails from "../pages/movieDetails/MovieDetails";
import Series from "../pages/series/Series";
import SeriesDetails from "../pages/seriesDetails/SeriesDetails";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.watchlist,
    Component: Watchlist,
  },
  {
    path: routes.movies,
    Component: Movies,
  },
  {
    path: routes.movieDetails,
    Component: MovieDetails,
  },
  {
    path: routes.series,
    Component: Series,
  },
  {
    path: routes.seriesDetails,
    Component: SeriesDetails,
  },
];
