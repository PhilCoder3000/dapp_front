import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (num) => `https://jsonplaceholder.typicode.com/todos/${num}`,
    }),
  }),
})

export const { useLazyGetTodoQuery, useGetTodoQuery } = transactionsApi