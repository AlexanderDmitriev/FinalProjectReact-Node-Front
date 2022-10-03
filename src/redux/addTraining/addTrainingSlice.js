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

export const addTrainingApi = createApi({
  reducerPath: 'addTrainingApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://book-reader-43-back.herokuapp.com/api/',
  }),
  tagTypes: ['Training'],
  endpoints: builder => ({
    updateTraining: builder.mutation({
      query: value => ({
        url: `training`,
        method: 'POST',
            data: {
            start: value.start,
            end: value.finish,
            book: value.selectedBookArr,
        },
      }),
      invalidatesTags: ['Training'],
    }),
  }),
});

export const { useUpdateTrainingMutation } = addTrainingApi;