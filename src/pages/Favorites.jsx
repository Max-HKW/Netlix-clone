/**
 * Node modules
 */
import { useSelector } from 'react-redux';

/**
 * Components
 */
import ItemCard from '../components/ItemCard';

const Favorites = () => {
  const { list } = useSelector((state) => state.favourites);

  if (list.length === 0) {
    return (
      <div className="pt-28 text-center text-gray-400 text-xl">
        Nessun preferito ancora aggiunto.
      </div>
    );
  }
  return (
    <>
      <h2 className='mt-[120px] text-2xl ml-6 font-semibold'>La mia lista</h2>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {list.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            type={item.media_type || (item.first_air_date ? 'tv' : 'movie')}
          />
        ))}
      </section>
    </>
  );
};

export default Favorites;
