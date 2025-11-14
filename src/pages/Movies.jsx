/**
 * Node modules
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Components
 */
import MovieCard from '../components/MovieCard';

/**
 * Fetching funcions
 */
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../features/movies/moviesSlice';

const Movies = () => {
  const dispatch = useDispatch();
  const { popular, topRated, upcoming } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);
  return <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[84px] space-y-10 p-6'>
    {upcoming.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
    {popular.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
    {topRated.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
    {topRated.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
  </section>;
};

export default Movies;
