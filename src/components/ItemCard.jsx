/**
 * Node modules
 */
import { useState } from 'react';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

/**
 * Icons
 */
import { Heart } from 'lucide-react';

/**
 * Actions
 */
import { toggleFavourites } from '../features/favourites/favouritesSlice';

const ItemCard = ({ item, type = 'movie' }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);
  const isFavourite = favourites.some((fav) => fav.id === item.id);

  const [isHovered, setIsHovered] = useState(false);

  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const vote = item.vote_average;

  const linkPath =
    type === 'movie' ? `/film/${item.id}` : `/serie-tv/${item.id}`;
  return (
    <figure
      className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-50 max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay con pulsante */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 transition-opacity duration-300 pointer-events-none">
          <button
            type="button"
            aria-label="Aggiungi ai preferiti"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition absolute top-2 right-2 pointer-events-auto cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (isFavourite) toast.error('Rimosso dai preferiti');
              else toast.success('Aggiunto ai preferiti');
              dispatch(toggleFavourites(item));
            }}
          >
            <Heart
              className={`w-8 h-8 transition-colors duration-150 ${
                isFavourite ? 'text-pink-500' : 'text-white hover:text-pink-500'
              }`}
              fill={isFavourite ? 'currentColor' : 'transparent'}
            />
          </button>

          <div className="p-4 text-center pointer-events-none">
            <h3 className="text-white text-md font-semibold mb-1">{title}</h3>
            {releaseDate && (
              <span className="text-gray-300 text-xs mb-2">
                {new Date(releaseDate).getFullYear()}
              </span>
            )}
            {vote && (
              <span className="text-yellow-400 font-bold text-xs ml-2">
                {vote.toFixed(1)} ★
              </span>
            )}
            {item.overview && (
              <p className="text-gray-200 text-xs mt-2 line-clamp-2">
                {item.overview}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Link che include immagine + titolo */}
      <Link
        to={linkPath}
        aria-label={`Vai ai dettagli di ${title}`}
        className="relative z-10 block"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={title}
          loading="lazy"
          className="w-full h-auto object-cover aspect-2/3"
        />
      </Link>
    </figure>
  );
};

export default ItemCard;
