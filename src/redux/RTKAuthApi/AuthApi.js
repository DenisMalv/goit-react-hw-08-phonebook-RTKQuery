import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'userAuth',
  tagTypes: ['userAuth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // console.log('login me pls auto');
      // const token = getState().token.token;
      const token = localStorage.getItem('tokenhz');
      console.log(token);
      if (token !== 'null') {
        headers.set(
          'authorization',
          `Bearer ${localStorage.getItem('tokenhz')}`
        );
      }
      return headers;
    },
  }),
  endpoints: build => ({
    getUserRTK: build.query({
      query: body => ({
        url: `/users/current`,
        method: 'GET',
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('tokenhz')}`,
        // },
      }),
      providesTags: ['userAuth'],
      // invalidesTags: ['userAuth'],
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
        // headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['userAuth'],
    }),
  }),
});

export const {
  useGetUserRTKQuery,
  useRegisterRTKMutation,
  useLoginRTKMutation,
  useLogOutRTKMutation,
} = AuthApi;
