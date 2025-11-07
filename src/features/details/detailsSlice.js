/**
 * Node modules
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tmdb } from '../../services/tmdb';

export const fetchDetails = createAsyncThunk(
  'details/fetch',
  async ({ type, id }) => {
    return await tmdb.getDetails(type, id);
  }
);

export const fetchCredits = createAsyncThunk(
  'credits/fetch',
  async ({ type, id }) => {
    return await tmdb.getCredits(type, id);
  }
);

const initialState = {
  item: null,
  credits: [],
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.item = action.payload;
      })
      .addCase(fetchCredits.fulfilled, (state, action) => {
        state.credits = action.payload.cast.slice(0, 10);
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
