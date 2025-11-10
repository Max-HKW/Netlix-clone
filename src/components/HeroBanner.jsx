/**
 * Node modules
 */
import { Link } from 'react-router';

const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const movieTitle = movie.title || movie.name;
  return (
    <Link
      to={`/movie/${movie.id}`}
      aria-label={`Go to details page for ${movieTitle}`}
      className="block mb-16 absolute inset-0"
    >
      <figure className="relative h-[60vh] rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={`Poster of ${movieTitle}`}
          loading="lazy"
          className="object-cover w-full h-full rounded-2xl"
          width="1920"
          height="1080"
        />

        <figcaption className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-2xl flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-10 md:max-w-7xl md:mx-auto xl:max-w-[1700px]">
            <h1 className="text-4xl font-bold mb-2 md:max-w-7xl mx-auto xl:max-w-[1700px]">{movieTitle}</h1>
            {movie.overview && (
              <p className="text-gray-300 max-w-2xl mt-4 line-clamp-3">
                {movie.overview}
              </p>
            )}
          </div>
        </figcaption>
      </figure>
    </Link>

    
  );
};

export default HeroBanner;
