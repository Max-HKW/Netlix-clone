import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { removeFavourites } from '../features/favourites/favouritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list || []);

  const handleRemove = (id) => {
    dispatch(removeFavourites(id));
  };

  if (!favourites.length) {
    return (
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">La tua lista è vuota</h2>
        <p className="text-gray-400">Aggiungi dei film o serie TV ai preferiti per vederli qui.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-white mb-6">La Mia Lista</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favourites.map((item) => (
          <div key={item.id} className="relative">
            <MovieCard movie={item} />
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-red-600"
              title="Rimuovi dai preferiti"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;