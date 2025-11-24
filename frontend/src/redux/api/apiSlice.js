import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.VITE_BASE_URL
const baseQuery = fetchBaseQuery(BASE_URL);

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
});
