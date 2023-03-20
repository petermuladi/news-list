import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = "http://localhost:4000";

// Async thunk function to fetch a post by its ID
export const FetchById = createAsyncThunk(

    'post/FetchById',
    async (id) => {

        try {
            const response = await axios.get(`${url}/posts/${id}`)

            return response.data

        } catch (error) {
            console.log(error)
        }

    }

);