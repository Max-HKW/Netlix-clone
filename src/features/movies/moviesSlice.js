/**
 * Node modules
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * Services
 */
import { tmdb } from '../../services/tmdb';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async () => {
    return await tmdb.getPopularMovies();
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRated',
  async () => {
    return await tmdb.getTopRatedMovies();
  }
);

const initialState = {
  popular: [],
  topRated: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.popular = action.payload.results;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        ((state.status = 'failed'), (state.error = action.error.message));
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRated = action.payload.results;
      });
  },
});

export default moviesSlice.reducer;
