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
import { fetchTrendingTv } from '../features/tv/tvSlice';

const TvSeries = () => {
  const dispatch = useDispatch();
  const { tranding } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(fetchTrendingTv());
  }, [dispatch]);
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[84px] space-y-10 p-6">
      {tranding.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default TvSeries;
