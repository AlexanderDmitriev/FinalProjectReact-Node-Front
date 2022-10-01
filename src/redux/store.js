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
import { resultsApi } from './results/rtkQuery/resultsSlice';
import { ratingApi } from './rating/ratingSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    
  }),
  resultsApi.middleware,
  ratingApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // authSlice,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
    [resultsApi.reducerPath]: resultsApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
