import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from 'redux/authAPI/auth-slice';
import { booksApi } from './booksApi/booksSlice';
import { resultsApi } from './results/resultsSlice';
import { ratingApi } from './rating/ratingSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  resultsApi.middleware,
  booksApi.middleware,
  ratingApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
    [resultsApi.reducerPath]: resultsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
