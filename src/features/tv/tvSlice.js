/**
 * Node modules
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Services
 */
import { tmdb } from '../../services/tmdb';

export const fetchTrendingTv = createAsyncThunk(
  'tv/fetchTrending',
  async () => {
    return await tmdb.getTrending('tv');
  }
);

const initialState = {
  tranding: [],
  status: 'idle',
  error: null,
};

const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingTv.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingTv.fulfilled, (state, action) => {
        ((state.status = 'succeded'),
          (state.tranding = action.payload.results));
      })
      .addCase(fetchTrendingTv.rejected, (state, action) => {
        ((state.status = 'failed'), (state.error = action.error.message));
      });
  },
});

export default tvSlice.reducer;