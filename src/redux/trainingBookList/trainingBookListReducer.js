import { createReducer } from '@reduxjs/toolkit';
import { bookList } from './trainingBooksListAction';

export const trainingBooksListReducer = createReducer('', {
    [bookList]: (state, action) => state = action.payload,
});