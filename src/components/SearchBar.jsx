import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Search, X } from 'lucide-react';
import { searchContent } from '../features/search/searchSlice';
0;

const SearchBar = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.search);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapperRef = useRef(null);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (query.length < 2) return;

    const timer = setTimeout(() => {
      dispatch(searchContent(query));
    }, 400);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleKeyDown = (e) => {
    if (!results || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(
        (prev) => (prev - 1 + results.length) % results.length
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      const r = results[highlightedIndex];
      const type = r.media_type === 'tv' ? 'serie-tv' : 'film';
      window.location.href = `/${type}/${r.id}`;
      setOpen(false);
      setQuery('');
      setHighlightedIndex(-1);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative mb-8"
    >
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <Search size={24} />
        </button>
      )}

      {open && (
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-md border border-white/20 absolute right-0 top-0">
          <Search className="text-gray-400" />
          <input
            autoFocus
            type="text"
            placeholder="Cerca film o serie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-white outline-none w-64 placeholder-gray-500"
          />

          <X
            size={20}
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={() => {
              setOpen(false);
              setQuery('');
            }}
          />
        </div>
      )}

      {open && results.length > 0 && (
        <div className="netflix-scroll absolute mt-14 right-0 w-80 bg-black/90 backdrop-blur-xl rounded-lg p-4 z-50 border border-white/10 max-h-[60vh] overflow-y-auto shadow-2xl">
          {results.map((r, index) => {
            const title = r.title || r.name;
            const type = r.media_type === 'tv' ? 'serie-tv' : 'film';

            const isHighlighted = index === highlightedIndex;
            return (
              <Link
                key={r.id}
                to={`/${type}/${r.id}`}
                className={`flex gap-3 items-center py-2 rounded-md transition ${
                  isHighlighted ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
                onClick={() => {
                  setOpen(false);
                  setQuery('');
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${r.poster_path}`}
                  className="w-12 h-16 object-cover rounded"
                  alt={title}
                />
                <div className="text-white">
                  <p className="font-medium">{title}</p>
                  <span className="text-gray-400 text-sm uppercase">
                    {type === 'film' ? 'Film' : 'Serie TV'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
