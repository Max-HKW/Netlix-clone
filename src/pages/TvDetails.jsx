/**
 * Node modules
 */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

/**
 * Fetching funcions
 */
import { fetchDetails } from '../features/details/detailsSlice';

/**
 * Components
 */
import Loader from '../components/Loader';

/**
 * Actions
 */
import { toggleFavourites } from '../features/favourites/favouritesSlice';

/**
 * Icons
 */
import { Heart } from 'lucide-react';

const TvDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    item: details,
    status,
    error,
  } = useSelector((state) => state.details);

  const favourites = useSelector((state) => state.favourites.list);
  const isFavourite = favourites.some((fav) => fav.id === details.id);

  useEffect(() => {
    dispatch(fetchDetails({ type: 'tv', id }));
  }, [dispatch, id]);

  if (status === 'loading') return <Loader />;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!details)
    return (
      <div className="text-center mt-20 text-gray-400">Serie non trovata</div>
    );

  const director = details.credits?.crew?.find((c) => c.job === 'Director');
  const cast = details.credits?.cast?.slice(0, 5) || [];

  const title = details.name;
  const releaseDate = details.first_air_date;

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
              <div className="flex items-baseline gap-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <button
                  className=" transition pointer-events-auto cursor-pointer"
                  aria-label="Aggiungi ai preferiti"
                  onClick={() => {
                    if (isFavourite) toast.error('Rimosso dai preferiti');
                    else toast.success('Aggiunto ai preferiti');
                    dispatch(toggleFavourites(details));
                  }}
                >
                  <Heart
                    size={32}
                    className={`transition-colors duration-150 ${
                      isFavourite
                        ? 'text-pink-500'
                        : 'text-white hover:text-pink-500'
                    }`}
                    fill={isFavourite ? 'currentColor' : 'transparent'}
                  />
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm mb-4">
                <span>{new Date(releaseDate).getFullYear()}</span>
                {details.number_of_seasons && (
                  <span>{details.number_of_seasons} Stagioni</span>
                )}
                {details.number_of_episodes && (
                  <span>{details.number_of_episodes} Episodi</span>
                )}
                {details.episode_run_time?.length > 0 && (
                  <span>{details.episode_run_time[0]} min</span>
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
          {/* Poster */}
          {details.poster_path && (
            <div className="md:col-span-1">
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Dettagli */}
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
            {details.genres?.length > 0 && (
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

              {details.in_production !== undefined && (
                <div>
                  <span className="text-gray-400">Produzione: </span>
                  <span className="text-white">
                    {details.in_production ? 'In corso' : 'Conclusa'}
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

export default TvDetails;
