import { configureStore } from '@reduxjs/toolkit';
import { resultsApi } from './resultsSlice';
// import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: {
    [resultsApi.reducerPath]: resultsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    resultsApi.middleware,
  ],
});
