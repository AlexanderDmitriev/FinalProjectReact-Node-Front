import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-reader-43-back.herokuapp.com/api/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,

  tagTypes: ['Books'],

  endpoints: builder => ({
    getBooks: builder.query({
      query: () => 'books',
      providesTags: ['Books'],
    }),
    addBooks: builder.mutation({
      query: result => ({
        url: '/books',
        method: 'POST',
        body: {
          title: result.title,
          author: result.author,
          year: result.year,
          pages: result.pages,
        },
      }),
      invalidatesTags: ['Books'],
    }),
    updateRating: builder.mutation({
      query: value => ({
        url: `books/${value.id}`,
        method: 'PATCH',
        body: {
          comment: value.comment,
          rating: value.rating,
        },
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBooksMutation,
  useUpdateRatingMutation,
} = booksApi;
