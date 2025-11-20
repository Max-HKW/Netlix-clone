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
import { fetchTrendingTv } from '../features/tv/tvSlice';

const TvSeries = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const { tranding } = useSelector((state) => state.tv);

  const isDetailPage = location.pathname !== '/serie-tv';

  useEffect(() => {
    dispatch(fetchTrendingTv());
  }, [dispatch]);
  return (
    <>
      {isDetailPage ? (
        <Outlet />
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 mt-[84px] xl:grid-cols-4 gap-4 space-y-10 p-6">
          {tranding.map((serie) => (
            <ItemCard
              key={serie.id}
              item={serie}
              type="serie"
            />
          ))}
        </section>
      )}
    </>
  );
};

export default TvSeries;
