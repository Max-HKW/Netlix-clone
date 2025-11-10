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
  fetchUpcomingMovies,
} from '../features/movies/moviesSlice';

import { fetchTrendingTv } from '../features/tv/tvSlice';

/**
 * Components
 */
import HeroBanner from '../components/HeroBanner';
import MovieSlider from '../components/MovieSlider';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const { popular, topRated, upcoming, status } = useSelector(
    (state) => state.movies
  );

  const { tranding } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTrendingTv());
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
      <MovieSlider
        title="In arrivo"
        movies={upcoming}
      />
      <MovieSlider
        title="Serie Tv"
        movies={tranding}
      />
    </div>
  );
};

export default Home;
