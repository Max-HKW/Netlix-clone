const API_BASE = import.meta.env.VITE_TMDB_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export const tmdb = {
  async getPopularMovies() {
    const res = await fetch(`${API_BASE}/movie/popular?language=it-IT&page=1`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    if (!res.ok) throw new Error('Failed to fetch popular movies');
    return res.json();
  },

  async getTopRatedMovies() {
    const res = await fetch(
      `${API_BASE}/movie/top_rated?language=it-IT&page=1`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (!res.ok) throw new Error('Failed to fetch top rated movies');
    return res.json();
  },

  async getTrending(type = 'all') {
    const res = await fetch(
      `${API_BASE}/trending/${type}/week?language=it-IT`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (!res.ok) throw new Error('Failed to fetch trending content');
    return res.json();
  },

  async search(query) {
    const res = await fetch(
      `${API_BASE}/search/multi?query=${encodeURIComponent(query)}&language=it-IT`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (!res.ok) throw new Error('Failed to search content');
    return res.json();
  },

  async getDetails(type, id) {
    const res = await fetch(`${API_BASE}/${type}/${id}?language=it-IT`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    if (!res.ok) throw new Error('Failed to fetch details');
    return res.json();
  },

  async getCredits(type, id) {
    const res = await fetch(
      `${API_BASE}/${type}/${id}/credits?language=it-IT`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch credits');
    return res.json();
  },
};
