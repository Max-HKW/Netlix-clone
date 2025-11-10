/**
 * Node modules
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

/**
 * Icons
 */
import { Search, X } from 'lucide-react';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-24">
      <div className="w-full max-w-2xl mx-4">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca film o serie TV..."
            className="w-full bg-gray-900 text-white text-lg px-12 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            autoFocus
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
