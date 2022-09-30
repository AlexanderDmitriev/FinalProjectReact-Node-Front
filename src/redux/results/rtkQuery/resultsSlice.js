import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resultsApi = createApi({
  reducerPath: 'resultsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-reader-43-back.herokuapp.com/',
  }),
  tagTypes: ['Result'],
  endpoints: builder => ({
    fetchResults: builder.query({
      query: () => 'training/stats',
      providesTags: ['Result'],
    }),
    createResult: builder.mutation({
      query: result => ({
        url: '/training/stats',
        method: 'POST',
        body: {
          date: result.date,
          time: result.time,
          pages: result.pages,
        },
      }),
      invalidatesTags: ['Result'],
    }),
  }),
});

export const { useFetchResultsQuery, useCreateResultMutation } = resultsApi;
