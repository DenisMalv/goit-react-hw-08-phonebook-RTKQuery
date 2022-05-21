import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(`/contacts`);
      return contacts.data; //- etot return eto payload pri success!
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContactThunk = createAsyncThunk(
  'contacts/fetchAddContactThunk',
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const contacts = await axios.post(`/contacts`, contact);

      dispatch(fetchContactsThunk());

      console.log(contacts);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDeleteContactsThunk = createAsyncThunk(
  'contacts/fetchDeleteContactsThunk',
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const ress = await axios.delete(`/contacts/${id}`);

      dispatch(fetchContactsThunk());

      console.log(ress);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// fetchContactsThunk.pending - eto loading
// fetchContactsThunk.fulfilled - eto success
// fetchContactsThunk.rejected - eto error

//  otmena -
// useEffect()=> {
//    const promise = dispatch(nashdispatch);
//     return () => {
//         promise.abort()
//     }
// }
