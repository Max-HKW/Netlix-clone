/**
 * Node modules
 */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Fetching funcions
 */
import { fetchDetails } from '../features/details/detailsSlice';

/**
 * Components
 */
import Loader from '../components/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    item: details,
    status,
    error,
  } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchDetails({ type: 'movie', id }));
  }, [dispatch, id]);

  if (status === 'loading') return <Loader />;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!details)
    return (
      <div className="text-center mt-20 text-gray-400">Film non trovato</div>
    );

  // Estrazione cast e regia (assumendo siano parte dei dettagli)
  const director = details.credits?.crew?.find((c) => c.job === 'Director');
  const cast = details.credits?.cast?.slice(0, 5) || [];

  const title = details.title || details.name;
  const releaseDate = details.release_date || details.first_air_date;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span>{new Date(releaseDate).getFullYear()}</span>
                {details.runtime && (
                  <span>
                    {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                  </span>
                )}
                {details.number_of_seasons && (
                  <span>{details.number_of_seasons} Stagioni</span>
                )}
                {details.vote_average && (
                  <span className="px-2 py-1 bg-white/20 rounded">
                    {details.vote_average.toFixed(1)} ★
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonna sinistra con poster */}
          {details.poster_path && (
            <div className="md:col-span-1">
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Colonna destra con dettagli */}
          <div className="md:col-span-2 text-white space-y-6">
            {/* Trama */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Trama</h2>
              <p className="text-gray-300 leading-relaxed">
                {details.overview || 'Nessuna descrizione disponibile.'}
              </p>
            </div>

            {/* Cast & Crew */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cast & Crew</h2>
              {director && (
                <div className="mb-2">
                  <span className="text-gray-400">Regia: </span>
                  <span className="text-white">{director.name}</span>
                </div>
              )}
              {cast.length > 0 && (
                <div>
                  <span className="text-gray-400">Cast Principale: </span>
                  <span className="text-white">
                    {cast.map((a) => a.name).join(', ')}
                  </span>
                </div>
              )}
            </div>

            {/* Generi */}
            {details.genres && details.genres.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Generi</h2>
                <div className="flex flex-wrap gap-2">
                  {details.genres.map((g) => (
                    <span
                      key={g.id}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Info aggiuntive */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Lingua originale: </span>
                <span className="text-white uppercase">
                  {details.original_language}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Status: </span>
                <span className="text-white">{details.status}</span>
              </div>
              {details.budget > 0 && (
                <div>
                  <span className="text-gray-400">Budget: </span>
                  <span className="text-white">
                    ${(details.budget / 1000000).toFixed(1)}M
                  </span>
                </div>
              )}
              {details.revenue > 0 && (
                <div>
                  <span className="text-gray-400">Incasso: </span>
                  <span className="text-white">
                    ${(details.revenue / 1000000).toFixed(1)}M
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
