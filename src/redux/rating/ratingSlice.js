import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const ratingApi = createApi({
  reducerPath: 'ratingApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://book-reader-43-back.herokuapp.com/api/',
  }),
  tagTypes: ['Rating'],
  endpoints: builder => ({
    updateRating: builder.mutation({
      query: value => ({
        url: `books/${value.id}`,
        method: 'PATCH',
        data: {
          comment: value.comment,
          rating: value.rating,
        },
      }),
      invalidatesTags: ['Rating'],
    }),
  }),
});

export const { useUpdateRatingMutation } = ratingApi;
