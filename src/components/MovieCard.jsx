/**
 * Node modules
 */
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
  return (
    <figure className="relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <Link
        to={`/movie/${movie.id}`}
        className="transition-transform hover:scale-105"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="w-full h-auto object-cover aspect-video"
        />
        <figcaption className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent py-3 text-sm text-white">
          {/* Wrapper per centrare e rispettare max-width */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {movie.title}
          </div>
        </figcaption>
      </Link>
    </figure>

    
  );
};

export default MovieCard;
