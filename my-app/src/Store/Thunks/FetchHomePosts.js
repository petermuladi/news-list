
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = "http://localhost:4000";

export const FetchPosts = createAsyncThunk(

    'posts/FetchPosts',

    async ({ page = 1, order = 'asc', limit = '6' }, thunkAPI) => {

        try {

            const res = await axios.get(`${url}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

            //Previus state.
            const prevState = thunkAPI.getState().posts;

            return {

                items: [...prevState.articles.items, ...res.data],
                page: page,
                end: res.data.length === 0 ? true : false

            }

        } catch (error) {
            console.log("💥", error)
        }

    }

);



