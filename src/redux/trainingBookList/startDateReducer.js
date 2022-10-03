import { createReducer } from '@reduxjs/toolkit';
import { startDate } from './trainingBooksListAction';

export const startDateReducer = createReducer('', {
    [startDate]: (state, action) => state = action.payload,
});