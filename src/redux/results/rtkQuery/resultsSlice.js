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

export const resultsApi = createApi({
  reducerPath: 'resultsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://book-reader-43-back.herokuapp.com/api/',
  }),
  tagTypes: ['Result'],
  endpoints: builder => ({
    fetchResults: builder.query({
      query: () => ({
        url: 'training/stats',
      }),
      providesTags: ['Result'],
    }),
    createResult: builder.mutation({
      query: result => ({
        url: 'training/stats',
        method: 'POST',
        data: {
          date: result.date,
          // time: result.time,
          pages: result.pages,
        },
      }),
      invalidatesTags: ['Result'],
    }),
  }),
});

export const { useFetchResultsQuery, useCreateResultMutation } = resultsApi;
