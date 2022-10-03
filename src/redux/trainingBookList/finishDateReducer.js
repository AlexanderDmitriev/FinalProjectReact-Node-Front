import { createReducer } from '@reduxjs/toolkit';
import { finishDate } from './trainingBooksListAction';

export const finishDateReducer = createReducer('', {
    [finishDate]: (state, action) => state = action.payload,
});