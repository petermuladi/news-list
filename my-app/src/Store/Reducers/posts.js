
//The code defines a Redux slice for managing state related to blog posts. 
//The default state has a loading flag and an empty articles object. 
//The slice also handles async actions with extraReducers, including FetchPosts and FetchById.
import { createSlice } from '@reduxjs/toolkit';
//async thunks
import { FetchPosts } from '../Thunks/FetchHomePosts';
import { FetchById } from '../Thunks/FetchById';


// Default State is Required!
const initialState = {
  //pending
  loading: true,
  
  articles: {
    items: []
  }
};


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  
  // handle async actions
  extraReducers: (builder) => {

    builder
      // FetchPosts - Pending state -> true
      .addCase(FetchPosts.pending, (state) => {
        state.loading = true;
      })
       //Result
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        const result = action.payload
        state.articles = result
      })

      //Pending false
      .addCase(FetchPosts.rejected, (state) => {
        state.loading = false;
      })
      
      // FetchById
      .addCase(FetchById.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchById.fulfilled, (state, action) => {
        const result = action.payload
        state.postById = result
        state.loading = false;
      })
      .addCase(FetchById.rejected, (state, action) => {
        state.loading = false;
      })

  }
});

export default postsSlice.reducer;
