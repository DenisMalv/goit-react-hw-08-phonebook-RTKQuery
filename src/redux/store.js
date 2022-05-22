import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './filterSlice/filterSlice';
import { contactsApi } from './RTKContactsApi/ContactsApi';
import { AuthApi } from './RTKAuthApi/AuthApi';
import { persistedUserAuthReducer } from './tokenSlice/tokenSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// store
export const store = configureStore({
  reducer: {
    filter: contactsSliceReducer,
    token: persistedUserAuthReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    AuthApi.middleware,
  ],
});

export const persistor = persistStore(store);
