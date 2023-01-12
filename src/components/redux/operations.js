import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63bc4204fa38d30d85c21ca8.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/contacts')
            return response;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const addContacts = createAsyncThunk(
    'contacts/add',
    async (contact, thunkApi) => {
        try {
            const response = await axios.post('/contacts', {name: contact.name, phonenumber: contact.number})
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const deleteContacts = createAsyncThunk(
    'contacts/delete',
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
           return thunkApi.rejectWithValue(e.message); 
        }
    }
)