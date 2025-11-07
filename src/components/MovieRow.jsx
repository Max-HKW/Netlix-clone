/**
 * Components
 */
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
