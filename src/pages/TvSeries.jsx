/**
 * Node modules
 */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Components
 */
import ItemCard from '../components/ItemCard';

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
      <section className="grid md:grid-cols-2 lg:grid-cols-3 mt-[84px] xl:grid-cols-4 gap-4 space-y-10 p-6">
        {tranding.map((serie) => (
          <ItemCard
            key={serie.id}
            item={serie}
            type='serie'
          />
        ))}
      </section>
    </>
  );
};

export default TvSeries;
