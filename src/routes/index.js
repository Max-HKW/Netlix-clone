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
      },
      {
        path: 'film',
        Component: Movies,
      },
      {
        path: 'preferiti',
        Component: Favorites,
      },
    ],
  },
]);

export default router;
