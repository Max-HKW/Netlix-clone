/**
 * Node modules
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

/**
 * Services
 */
import { tmdb } from '../services/tmdb';

/**
 * Components
 */
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const searchContent = async () => {
      setLoading(true);
      setError(null);
      setSuggestions([]);

      try {
        const data = await tmdb.search(query);
        
        // Filtra i risultati per rimuovere quelli senza poster
        const validResults = data.results.filter(item => item.poster_path);

        if (validResults.length === 0) {
          // Se non ci sono risultati esatti, cerca suggerimenti
          const fuzzyResults = await tmdb.search(query.slice(0, -1)); // Prova rimuovendo l'ultimo carattere
          const suggestions = fuzzyResults.results
            .filter(item => item.poster_path)
            .slice(0, 5);
          
          setSuggestions(suggestions);
          setError('Nessun risultato trovato per la tua ricerca.');
        } else {
          setResults(validResults);
        }
      } catch (error) {
        console.error('Errore nella ricerca:', error);
        setError('Si è verificato un errore durante la ricerca.');
      } finally {
        setLoading(false);
      }
    };

    searchContent();
  }, [query]);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold text-white mb-6">
        {error ? 'Risultati ricerca' : `Risultati per: ${query}`}
      </h1>

      {error ? (
        <div className="space-y-8">
          <p className="text-red-500">{error}</p>
          {suggestions.length > 0 && (
            <div>
              <h2 className="text-xl text-white mb-4">Forse cercavi:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {suggestions.map(item => (
                  <MovieCard key={item.id} movie={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {results.map(item => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
