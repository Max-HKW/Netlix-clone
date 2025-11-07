/**
 * Node modules
 */
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="min-w-40 transition-transform hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl shadow-lg"
      />
      <h3 className="text-sm mt-2 truncate">{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;
