/**
 * Node modules
 */
import { configureStore } from '@reduxjs/toolkit';

/**
 * Reducers
 */
import moviesReducer from '../features/movies/moviesSlice';
import tvReducer from '../features/tv/tvSlice';
import searchReducer from '../features/search/searchSlice';
import detailsReducer from '../features/details/detailsSlice';
import favouritesReducer from '../features/favourites/favouritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvReducer,
    search: searchReducer,
    details: detailsReducer,
    favourites: favouritesReducer,
  },
});
