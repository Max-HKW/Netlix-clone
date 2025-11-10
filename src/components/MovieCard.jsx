/**
 * Node modules
 */
import { useState } from 'react';
import { Link } from 'react-router';

/**
 * Icons
 */
import { Heart } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <figure
      className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.2] hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 transition-opacity duration-300">
          <button
            type="button"
            aria-label="Aggiungi ai preferiti"
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
          >
            <Heart className="w-8 h-8 text-white cursor-pointer" />
          </button>
        </div>
      )}

      {/* Link attorno a immagine + titolo */}
      <Link
        to={`/movie/${movie.id}`}
        aria-label={`Vai ai dettagli di ${movie.title}`}
        className="relative z-10 block"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="w-full h-auto object-cover aspect-video"
        />

        <figcaption className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent py-3 text-sm text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {movie.title}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default MovieCard;
