import { addContacts, deleteContacts, fetchContacts } from './operations';
const { createSlice } = require('@reduxjs/toolkit');


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactsList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = [...action.payload.data];
    },
    [fetchContacts.rejected]: handleRejected,
    
    [addContacts.pending]:handlePending,
    [addContacts.rejected]:handleRejected,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = [...state.contactsList, action.payload]
    },

    [deleteContacts.pending]: handlePending,
    [deleteContacts.rejected]: handleRejected,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = state.contactsList.filter(({id}) => id !== action.payload.id)
    }
    
  },
});

export const contactReducer = contactSlice.reducer;


