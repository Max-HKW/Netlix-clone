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
import MovieSlider from '../components/MovieSlider';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const { popular, topRated, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;
  return (
    <div className="mt-10 space-y-10">
      {popular.length > 0 && <HeroBanner movie={popular[0]} />}
      <MovieSlider
        title="Popolari"
        movies={popular}
      />
      <MovieSlider
        title="Top rated"
        movies={topRated}
      />
    </div>
  );
};

export default Home;
