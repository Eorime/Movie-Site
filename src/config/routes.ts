import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Watchlist from "../pages/watchlist/Watchlist";
import PersonalPage from "../pages/personalPage/PersonalPage";

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
    path: routes.personalPage,
    Component: PersonalPage,
  },
];
