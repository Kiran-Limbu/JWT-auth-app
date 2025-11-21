import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery(import.meta.BASE_URL);

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
});
