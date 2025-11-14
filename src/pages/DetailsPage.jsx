/**
 * Node modules
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites, removeFavourites } from '../features/favourites/favouritesSlice';

/**
 * Services
 */
import { tmdb } from '../services/tmdb';

/**
 * Components
 */
import Loader from '../components/Loader';

const DetailsPage = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list || []);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const [detailsData, creditsData] = await Promise.all([
          tmdb.getDetails(type, id),
          tmdb.getCredits(type, id)
        ]);
        setDetails(detailsData);
        setCredits(creditsData);
      } catch (error) {
        console.error('Errore nel caricamento dei dettagli:', error);
        setError('Si è verificato un errore nel caricamento dei dettagli.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [type, id]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!details) return null;

  const title = details.title || details.name;
  const releaseDate = details.release_date || details.first_air_date;
  const director = credits?.crew?.find(person => person.job === 'Director');
  const cast = credits?.cast?.slice(0, 5) || [];

  const isFavourite = details ? favourites.some((item) => item.id === details.id) : false;

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourites(details.id));
    } else {
      // salva un oggetto minimale in favourites, include media type
      dispatch(
        addFavourites({
          id: details.id,
          title: details.title || details.name,
          poster_path: details.poster_path,
          media_type: type,
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner con sfondo */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span>{new Date(releaseDate).getFullYear()}</span>
                {details.runtime && (
                  <span>{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</span>
                )}
                {details.number_of_seasons && (
                  <span>{details.number_of_seasons} Stagioni</span>
                )}
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-white/20 rounded">
                    {details.vote_average.toFixed(1)} ★
                  </span>

                  <button
                    onClick={handleToggleFavourite}
                    aria-pressed={isFavourite}
                    className={`p-2 rounded-full transition-colors duration-200 border border-transparent hover:bg-white/10 ${
                      isFavourite ? 'bg-red-600 text-white' : 'text-white'
                    }`}
                    title={isFavourite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                  >
                    {/* Use a simple heart character/icon - lucide-react Heart not imported to avoid extra import */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={isFavourite ? 'white' : 'none'}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonna sinistra con poster */}
          <div className="md:col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={title}
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Colonna destra con dettagli */}
          <div className="md:col-span-2 text-white">
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">Trama</h2>
                <p className="text-gray-300 leading-relaxed">{details.overview}</p>
              </div>

              {/* Cast & Crew */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">Cast & Crew</h2>
                {director && (
                  <div className="mb-4">
                    <span className="text-gray-400">Regia: </span>
                    <span className="text-white">{director.name}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-400">Cast Principale: </span>
                  <span className="text-white">
                    {cast.map(actor => actor.name).join(', ')}
                  </span>
                </div>
              </div>

              {/* Generi */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">Generi</h2>
                <div className="flex flex-wrap gap-2">
                  {details.genres.map(genre => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info aggiuntive */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Lingua originale: </span>
                  <span className="text-white uppercase">{details.original_language}</span>
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
    </div>
  );
};

export default DetailsPage;