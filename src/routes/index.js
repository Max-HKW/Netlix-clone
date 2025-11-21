/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router';

/**
 * Components
 */
import RootLayout from '../components/layout/RootLayout';
import AuthLayout from '../components/layout/AuthLayout';

/**
 * Pages
 */
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import TvSeries from '../pages/TvSeries';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import TvDetails from '../pages/TvDetails';
import ErrorPage from '../pages/ErrorPage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: AuthLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'signup',
        Component: SignUpPage,
      },
    ],
  },

  {
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/home',
        Component: Home,
      },
      {
        path: 'serie-tv',
        Component: TvSeries,
        children: [
          {
            path: ':id',
            Component: TvDetails,
          },
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
