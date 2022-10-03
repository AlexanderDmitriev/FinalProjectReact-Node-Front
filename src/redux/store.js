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
import { addTrainingApi } from './addTraining/addTrainingSlice';
import { trainingBooksListReducer } from './trainingBookList/trainingBookListReducer';
import { startDateReducer } from './trainingBookList/startDateReducer';
import { finishDateReducer } from './trainingBookList/finishDateReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  resultsApi.middleware,
  booksApi.middleware,
  ratingApi.middleware,
  addTrainingApi.middleware,
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
    [booksApi.reducerPath]: booksApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
    [addTrainingApi.reducerPath]: addTrainingApi.reducer,
    bookList: trainingBooksListReducer,
    startDate: startDateReducer,
    finishDate:  finishDateReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
