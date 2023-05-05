// import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const getContacts = async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('/contacts');
//     console.log(response.data)
//         return response.data;
//     } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//     }
// }

// export const createContact = async (contact, thunkAPI) => {
//   try {
//         const response = await axios.post('/contacts',contact);
//         alert('Create contact')
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//   }
// }

// export const deleteContact = async (contactId, thunkAPI) => {
//   try {
//         const response = await axios.delete(`/contacts/${contactId}`);
//         alert('Delete contact')
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//   }
// }




export const getContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
    console.log(response.data)
        return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
    }
})

export const createContact = createAsyncThunk('contacts/createContact', async (contact, thunkAPI) => {
  try {
        const response = await axios.post('/contacts',contact);
        alert('Create contact')
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
        const response = await axios.delete(`/contacts/${contactId}`);
        alert('Delete contact')
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
