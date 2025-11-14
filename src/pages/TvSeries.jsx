/**
 * Node modules
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Components
 */
import TvSeriesCard from '../components/TvSeriesCard';

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
    <>
      <h2 className="mx-8 text-2xl font-semibold mt-[120px]">Serie Tv</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 space-y-10 p-6">
        {tranding.map((serie) => (
          <TvSeriesCard
            key={serie.id}
            serie={serie}
          />
        ))}
      </section>
    </>
  );
};

export default TvSeries;
