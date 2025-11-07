/**
 * Node modules
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Fetching funcions
 */
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '../features/movies/moviesSlice';

/**
 * Components
 */
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import Loader from '../components/Loader';
import { div } from 'motion/react-client';

const Home = () => {
  const dispatch = useDispatch();
  const { popular, topRated, loading } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchPopularMovies())
    dispatch(fetchTopRatedMovies())
  }, [dispatch])

  if (loading) return <Loader />
  return (
    <div className="mt-10 space-y-10">
      {popular.length > 0 && <HeroBanner movie={popular[0]}/>}
      <MovieRow title='Popolari' movies={popular}/>
      <MovieRow title='Top rated' movies={topRated}/>
    </div>
  );
};

export default Home;
