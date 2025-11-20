/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router';

/**
 * Components
 */
import RootLayout from '../components/layout/RootLayout';

/**
 * Pages
 */
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import TvSeries from '../pages/TvSeries';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import TvDetails from '../pages/TvDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'serie-tv',
        Component: TvSeries,
        children: [
          {
            path: ':id',
            Component: TvDetails,
          }
        ],
      },
      {
        path: 'film',
        Component: Movies,
        children: [
          {
            path: ':id',
            Component: MovieDetails,
          },
        ],
      },
      {
        path: 'preferiti',
        Component: Favorites,
      },
    ],
  },
]);

export default router;
