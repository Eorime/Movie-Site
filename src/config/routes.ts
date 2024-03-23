import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Watchlist from "../pages/watchlist/Watchlist";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.watchlist,
    Component: Watchlist,
  },
];
