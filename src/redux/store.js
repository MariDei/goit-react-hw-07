import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigContacts = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistConfigFilters = {
  key: 'filters',
  storage,
};

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactsReducer
);

const persistedReducerFilters = persistReducer(
  persistConfigFilters,
  filtersReducer
);

const rootReducer = {
  contacts: persistedReducerContacts,
  filters: persistedReducerFilters,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
