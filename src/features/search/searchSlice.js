/**
 * Node modules
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tmdb } from '../../services/tmdb';

export const seactContent = createAsyncThunk('search/fetch', async (query) => {
  return await tmdb.search(query);
});

const initialState = {
  results: [],
  status: 'idle',
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(seactContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(seactContent.fulfilled, (state, action) => {
        ((state.status = 'succeded'), (state.results = action.payload.results));
      })
      .addCase(seactContent.rejected, (state, action) => {
        ((state.status = 'failde'), (state.error = action.error.message));
      });
  },
});

export default searchSlice.reducer;