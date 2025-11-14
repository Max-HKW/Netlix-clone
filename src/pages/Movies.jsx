/**
 * Node modules
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';

/**
 * Components
 */
import ItemCard from '../components/ItemCard';

/**
 * Fetching funcions
 */
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../features/movies/moviesSlice';

const Movies = () => {
  const location = useLocation();

  
  const isDetailPage = location.pathname !== '/film';

  const dispatch = useDispatch();
  const { popular, topRated, upcoming } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);
  return (
    <div className="mt-[84px] px-6">
      {isDetailPage ? (
        <Outlet /> 
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {upcoming.map((movie) => (
            <ItemCard
              key={movie.id}
              item={movie}
            />
          ))}
          {popular.map((movie) => (
            <ItemCard
              key={movie.id}
              item={movie}
            />
          ))}
          {topRated.map((movie) => (
            <ItemCard
              key={movie.id}
              item={movie}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default Movies;
