import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'userAuth',
  tagTypes: ['userAuth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: build => ({
    getUserRTK: build.query({
      query: body => ({
        url: `/users/current`,
        method: 'GET',
        headers: { Authorization: `Bearer ${body.token}` },
      }),
      providesTags: ['userAuth'],
    }),
    registerRTK: build.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['userAuth'],
    }),
    loginRTK: build.mutation({
      query: body => ({
        url: `/users/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['userAuth'],
    }),
    logOutRTK: build.mutation({
      query: token => ({
        url: `/users/logout`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),
      // invalidatesTags: ['userAuth'],
    }),
  }),
});

export const {
  useGetUserRTKQuery,
  useRegisterRTKMutation,
  useLoginRTKMutation,
  useLogOutRTKMutation,
} = AuthApi;
