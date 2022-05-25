import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsList = createAsyncThunk(
    'contacts/get',
    async () => {
        try {
            const {data} = await axios.get('/contacts')
        
        return data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const postContactsList = createAsyncThunk(
    'contacts/post',
    async (data) => {
        try {
            const {data: result} = await axios.post('/contacts', data)
        return result;
        } catch (error) {
            console.log(error)
        }
    }
)

export const delContactsList = createAsyncThunk(
    'contacts/del',
    async (id) => {
        try {
             await axios.delete(`/contacts/${id}`, id)
        return id;
        } catch (error) {
            console.log(error)
        }
    }
)


