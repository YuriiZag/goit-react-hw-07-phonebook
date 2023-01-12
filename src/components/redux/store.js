import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import filterSlice from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware({
  serializableCheck: false
})
});

