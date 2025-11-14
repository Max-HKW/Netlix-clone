/**
 * Node modules
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tmdb } from '../../services/tmdb';

export const searchContent = createAsyncThunk('search/fetch', async (query) => {
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
      .addCase(searchContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchContent.fulfilled, (state, action) => {
        ((state.status = 'succeded'), (state.results = action.payload.results));
      })
      .addCase(searchContent.rejected, (state, action) => {
        ((state.status = 'failde'), (state.error = action.error.message));
      });
  },
});

export default searchSlice.reducer;