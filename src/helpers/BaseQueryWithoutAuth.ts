import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_BASE_URL } from '../config/Api.constants';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', '*/*');
    return headers;
  },
});

export default baseQuery;
