/**
 * Node modules
 */
import { createSlice } from '@reduxjs/toolkit';

const loadFavourites = () =>
  JSON.parse(localStorage.getItem('favourites')) || [];

const saveFavourites = (data) =>
  localStorage.setItem('favourites', JSON.stringify(data));

const initialState = {
  list: loadFavourites(),
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      if (!state.list.find((item) => item.id === action.payload.id)) {
        state.list.push(action.payload);
        saveFavourites(state.list);
      }
    },
    removeFavourites: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      saveFavourites(state.list);
    },
    toggleFavourites: (state, action) => {
      const item = action.payload;
      const alreadyInList = state.list.some((fav) => fav.id === item.id);

      if (alreadyInList) {
        state.list = state.list.filter((fav) => fav.id !== item.id);
      } else {
        state.list.push(item);
      }

      saveFavourites(state.list);
    },
  },
});

export const { addFavourites, removeFavourites, toggleFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
