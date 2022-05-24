import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  tagTypes: ['Contacts', 'filter'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: build => ({
    getContactsRTK: build.query({
      query: token => ({
        url: '/contacts',
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['Contacts', 'filter'],
    }),
    addContactRTK: build.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        // headers: { Authorization: `Bearer ${body.token}` },
        body: body.contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactRTK: build.mutation({
      query: body => ({
        url: `/contacts/${body.id}`,
        method: 'DELETE',
        // headers: { Authorization: `Bearer ${body.token}` },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsRTKQuery,
  useAddContactRTKMutation,
  useDeleteContactRTKMutation,
} = contactsApi;
