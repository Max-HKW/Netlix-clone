/**
 * Node modules
 */
import { useState } from 'react';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';

/**
 * Icons
 */
import { Heart } from 'lucide-react';

/**
 * Actions
 */
import {
  toggleFavourites
} from '../features/favourites/favouritesSlice';

const ItemCard = ({ item, type = 'movie' }) => {
  const dispatch = useDispatch();

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
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 transition-opacity duration-300">
          <button
            type="button"
            aria-label="Aggiungi ai preferiti"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition absolute top-2 right-2"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleFavourites(item));
            }}
          >
            <Heart
              className="w-8 h-8 text-white hover:text-pink-500 cursor-pointer transition-colors duration-150"
              fill="currentColor"
            />
          </button>

          <div className="p-4 text-center">
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
          className="w-full h-auto object-cover aspect-video"
        />
      </Link>
    </figure>
  );
};

export default ItemCard;
