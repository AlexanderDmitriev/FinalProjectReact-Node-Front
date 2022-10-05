import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import toast from 'react-hot-toast'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      toast.success(`Тренування додано.`);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      toast.error(`На жаль, додавання тренування не було успішним`);
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
            end: value.end,
            book: value.book,
        },
      }),
      invalidatesTags: ['Training'],
    }),
  }),
});

export const { useUpdateTrainingMutation } = addTrainingApi;